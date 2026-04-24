from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (
    AppointmentViewSet,
    BlogPostViewSet,
    DoctorViewSet,
    FAQViewSet,
    GalleryViewSet,
    PageSEOViewSet,
    ServiceViewSet,
    SiteSettingViewSet,
    TestimonialViewSet,
    health_check,
)

router = DefaultRouter()
router.register('settings', SiteSettingViewSet, basename='site-settings')
router.register('services', ServiceViewSet, basename='services')
router.register('doctors', DoctorViewSet, basename='doctors')
router.register('testimonials', TestimonialViewSet, basename='testimonials')
router.register('gallery', GalleryViewSet, basename='gallery')
router.register('faqs', FAQViewSet, basename='faqs')
router.register('blogs', BlogPostViewSet, basename='blogs')
router.register('seo', PageSEOViewSet, basename='seo')
router.register('appointments', AppointmentViewSet, basename='appointments')

urlpatterns = [
    path('health/', health_check, name='health-check'),
    path('', include(router.urls)),
]
