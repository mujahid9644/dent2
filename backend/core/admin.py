from django.contrib import admin
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


@admin.register(SiteSetting)
class SiteSettingAdmin(admin.ModelAdmin):
	list_display = ('clinic_name', 'phone', 'email', 'updated_at')


@admin.register(ServiceCategory)
class ServiceCategoryAdmin(admin.ModelAdmin):
	list_display = ('name', 'slug')
	prepopulated_fields = {'slug': ('name',)}


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
	list_display = ('name', 'category', 'is_featured', 'updated_at')
	list_filter = ('category', 'is_featured')
	search_fields = ('name', 'short_description', 'description')
	prepopulated_fields = {'slug': ('name',)}


@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
	list_display = ('name', 'title', 'years_of_experience', 'is_featured')
	list_filter = ('is_featured',)
	search_fields = ('name', 'credentials')
	prepopulated_fields = {'slug': ('name',)}


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
	list_display = ('patient_name', 'patient_location', 'rating', 'is_featured')
	list_filter = ('rating', 'is_featured')


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
	list_display = ('title', 'is_before_after', 'created_at')
	list_filter = ('is_before_after',)


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
	list_display = ('question', 'display_order')
	ordering = ('display_order',)


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
	list_display = ('title', 'author', 'is_published', 'published_at')
	list_filter = ('is_published', 'published_at')
	search_fields = ('title', 'excerpt', 'content')
	prepopulated_fields = {'slug': ('title',)}


@admin.register(PageSEO)
class PageSEOAdmin(admin.ModelAdmin):
	list_display = ('page_key', 'title', 'updated_at')
	search_fields = ('page_key', 'title')


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
	list_display = ('patient_name', 'phone', 'preferred_date', 'preferred_time', 'status', 'created_at')
	list_filter = ('status', 'preferred_date', 'service')
	search_fields = ('patient_name', 'phone', 'email', 'message')
