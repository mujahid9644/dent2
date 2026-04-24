from rest_framework import mixins, status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Appointment, BlogPost, Doctor, FAQ, GalleryImage, PageSEO, Service, SiteSetting, Testimonial
from .serializers import (
	AppointmentAdminSerializer,
	AppointmentCreateSerializer,
	BlogPostDetailSerializer,
	BlogPostListSerializer,
	DoctorDetailSerializer,
	DoctorListSerializer,
	FAQSerializer,
	GalleryImageSerializer,
	PageSEOSerializer,
	ServiceDetailSerializer,
	ServiceListSerializer,
	SiteSettingSerializer,
	TestimonialSerializer,
)
from .services.notifications import AdminAlertService, send_patient_confirmation
from .throttles import AppointmentThrottle


class SiteSettingViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
	queryset = SiteSetting.objects.all()
	serializer_class = SiteSettingSerializer


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Service.objects.select_related('category').all()
	lookup_field = 'slug'
	search_fields = ['name', 'description']

	def get_serializer_class(self):
		if self.action == 'retrieve':
			return ServiceDetailSerializer
		return ServiceListSerializer


class DoctorViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Doctor.objects.prefetch_related('specialties').all()
	lookup_field = 'slug'
	search_fields = ['name', 'title', 'credentials']

	def get_serializer_class(self):
		if self.action == 'retrieve':
			return DoctorDetailSerializer
		return DoctorListSerializer


class TestimonialViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
	queryset = Testimonial.objects.all()
	serializer_class = TestimonialSerializer


class GalleryViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
	queryset = GalleryImage.objects.all()
	serializer_class = GalleryImageSerializer


class FAQViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
	queryset = FAQ.objects.all()
	serializer_class = FAQSerializer


class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = BlogPost.objects.filter(is_published=True)
	lookup_field = 'slug'
	search_fields = ['title', 'excerpt', 'content']

	def get_serializer_class(self):
		if self.action == 'retrieve':
			return BlogPostDetailSerializer
		return BlogPostListSerializer


class PageSEOViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
	queryset = PageSEO.objects.all()
	serializer_class = PageSEOSerializer


class AppointmentViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
	queryset = Appointment.objects.select_related('service', 'doctor').all()
	throttle_classes = [AppointmentThrottle]

	def get_serializer_class(self):
		if self.action == 'create':
			return AppointmentCreateSerializer
		return AppointmentAdminSerializer

	def create(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		appointment = serializer.save(ip_address=self._extract_ip(request))
		AdminAlertService.send_new_appointment_alert(appointment)
		send_patient_confirmation(appointment)
		return Response({'message': 'Appointment request submitted successfully.'}, status=status.HTTP_201_CREATED)

	@staticmethod
	def _extract_ip(request):
		forwarded = request.META.get('HTTP_X_FORWARDED_FOR')
		if forwarded:
			return forwarded.split(',')[0].strip()
		return request.META.get('REMOTE_ADDR')


@api_view(['GET'])
def health_check(_request):
	return Response({'status': 'ok'})

# Create your views here.
