from datetime import date

from rest_framework import serializers

from .models import (
    Appointment,
    BlogPost,
    Doctor,
    FAQ,
    GalleryImage,
    PageSEO,
    Service,
    ServiceCategory,
    SiteSetting,
    Testimonial,
)


class SiteSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSetting
        fields = '__all__'


class ServiceCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceCategory
        fields = ['id', 'name', 'slug']


class ServiceListSerializer(serializers.ModelSerializer):
    category = ServiceCategorySerializer(read_only=True)

    class Meta:
        model = Service
        fields = [
            'id',
            'name',
            'slug',
            'short_description',
            'icon',
            'image',
            'is_featured',
            'category',
            'meta_title',
            'meta_description',
        ]


class ServiceDetailSerializer(ServiceListSerializer):
    class Meta(ServiceListSerializer.Meta):
        fields = ServiceListSerializer.Meta.fields + ['description']


class DoctorListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = [
            'id',
            'name',
            'slug',
            'title',
            'credentials',
            'photo',
            'years_of_experience',
            'is_featured',
        ]


class DoctorDetailSerializer(DoctorListSerializer):
    specialties = ServiceListSerializer(many=True, read_only=True)

    class Meta(DoctorListSerializer.Meta):
        fields = DoctorListSerializer.Meta.fields + ['bio', 'specialties']


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'


class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = '__all__'


class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'


class BlogPostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = [
            'id',
            'title',
            'slug',
            'excerpt',
            'cover_image',
            'author',
            'published_at',
            'meta_title',
            'meta_description',
        ]


class BlogPostDetailSerializer(BlogPostListSerializer):
    class Meta(BlogPostListSerializer.Meta):
        fields = BlogPostListSerializer.Meta.fields + ['content']


class PageSEOSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageSEO
        fields = '__all__'


class AppointmentCreateSerializer(serializers.ModelSerializer):
    honeypot = serializers.CharField(required=False, allow_blank=True, write_only=True)

    class Meta:
        model = Appointment
        fields = [
            'patient_name',
            'phone',
            'email',
            'preferred_date',
            'preferred_time',
            'service',
            'doctor',
            'message',
            'honeypot',
        ]

    def validate_honeypot(self, value):
        if value:
            raise serializers.ValidationError('Spam submission blocked.')
        return value

    def validate_preferred_date(self, value):
        if value < date.today():
            raise serializers.ValidationError('Preferred date must be today or later.')
        return value


class AppointmentAdminSerializer(serializers.ModelSerializer):
    service = ServiceListSerializer(read_only=True)
    doctor = DoctorListSerializer(read_only=True)

    class Meta:
        model = Appointment
        fields = '__all__'
