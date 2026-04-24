from django.core.validators import EmailValidator, RegexValidator
from django.db import models
from django.utils.text import slugify


class TimeStampedModel(models.Model):
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	class Meta:
		abstract = True


class SiteSetting(TimeStampedModel):
	clinic_name = models.CharField(max_length=140, default='Prime Dental Care')
	short_clinic_name = models.CharField(max_length=80, default='Prime Dental')
	tagline = models.CharField(max_length=180, default='Confident smiles with modern dental care')
	logo = models.ImageField(upload_to='branding/', blank=True, null=True)
	favicon = models.ImageField(upload_to='branding/', blank=True, null=True)

	primary_color = models.CharField(max_length=7, default='#0E7490')
	secondary_color = models.CharField(max_length=7, default='#0F766E')
	accent_color = models.CharField(max_length=7, default='#F59E0B')

	email = models.EmailField(validators=[EmailValidator()])
	phone = models.CharField(max_length=30)
	whatsapp = models.CharField(max_length=30)
	address = models.TextField()
	opening_hours = models.CharField(max_length=240, default='Sat-Thu: 9:00 AM - 9:00 PM')
	google_map_embed = models.TextField(blank=True)

	facebook = models.URLField(blank=True)
	instagram = models.URLField(blank=True)
	youtube = models.URLField(blank=True)
	linkedin = models.URLField(blank=True)

	hero_title = models.CharField(max_length=180, default='A trusted dentist in Dhaka for complete smile care')
	hero_subtitle = models.TextField(default='Comprehensive family dentistry, digital diagnostics, and aesthetic smile treatments under one roof.')
	hero_cta_primary = models.CharField(max_length=80, default='Book Appointment')
	hero_cta_secondary = models.CharField(max_length=80, default='Call Now')

	default_meta_title = models.CharField(max_length=180, default='Best Dental Clinic in Dhaka | Premium Dental Care')
	default_meta_description = models.TextField(default='Visit a modern, patient-friendly dental clinic in Dhaka for painless treatment, preventive checkups, implants, braces, and cosmetic smile design.')

	schema_name = models.CharField(max_length=180, default='Prime Dental Care')
	schema_type = models.CharField(max_length=50, default='Dentist')
	schema_price_range = models.CharField(max_length=50, default='$$')

	class Meta:
		verbose_name = 'Site Setting'
		verbose_name_plural = 'Site Settings'

	def __str__(self):
		return self.clinic_name


class ServiceCategory(TimeStampedModel):
	name = models.CharField(max_length=120, unique=True)
	slug = models.SlugField(max_length=140, unique=True, blank=True)

	class Meta:
		ordering = ['name']

	def __str__(self):
		return self.name

	def save(self, *args, **kwargs):
		if not self.slug:
			self.slug = slugify(self.name)
		super().save(*args, **kwargs)


class Service(TimeStampedModel):
	category = models.ForeignKey(ServiceCategory, on_delete=models.CASCADE, related_name='services')
	name = models.CharField(max_length=140)
	slug = models.SlugField(max_length=160, unique=True, blank=True)
	short_description = models.CharField(max_length=220)
	description = models.TextField()
	icon = models.CharField(max_length=80, default='sparkles')
	image = models.ImageField(upload_to='services/', blank=True, null=True)
	is_featured = models.BooleanField(default=False)
	meta_title = models.CharField(max_length=180, blank=True)
	meta_description = models.CharField(max_length=280, blank=True)

	class Meta:
		ordering = ['name']

	def __str__(self):
		return self.name

	def save(self, *args, **kwargs):
		if not self.slug:
			self.slug = slugify(self.name)
		super().save(*args, **kwargs)


class Doctor(TimeStampedModel):
	name = models.CharField(max_length=140)
	slug = models.SlugField(max_length=160, unique=True, blank=True)
	title = models.CharField(max_length=180)
	credentials = models.CharField(max_length=280)
	bio = models.TextField()
	photo = models.ImageField(upload_to='doctors/', blank=True, null=True)
	years_of_experience = models.PositiveIntegerField(default=5)
	specialties = models.ManyToManyField(Service, related_name='doctors', blank=True)
	is_featured = models.BooleanField(default=False)

	class Meta:
		ordering = ['name']

	def __str__(self):
		return self.name

	def save(self, *args, **kwargs):
		if not self.slug:
			self.slug = slugify(self.name)
		super().save(*args, **kwargs)


class Testimonial(TimeStampedModel):
	patient_name = models.CharField(max_length=120)
	patient_location = models.CharField(max_length=120, default='Dhaka')
	rating = models.PositiveSmallIntegerField(default=5)
	quote = models.TextField()
	treatment = models.CharField(max_length=140, blank=True)
	is_featured = models.BooleanField(default=True)

	class Meta:
		ordering = ['-created_at']

	def __str__(self):
		return f'{self.patient_name} ({self.rating}/5)'


class GalleryImage(TimeStampedModel):
	title = models.CharField(max_length=180)
	image = models.ImageField(upload_to='gallery/')
	alt_text = models.CharField(max_length=220, default='Dental clinic interior in Dhaka')
	is_before_after = models.BooleanField(default=False)

	class Meta:
		ordering = ['-created_at']

	def __str__(self):
		return self.title


class FAQ(TimeStampedModel):
	question = models.CharField(max_length=240)
	answer = models.TextField()
	display_order = models.PositiveIntegerField(default=1)

	class Meta:
		ordering = ['display_order', 'id']

	def __str__(self):
		return self.question


class BlogPost(TimeStampedModel):
	title = models.CharField(max_length=180)
	slug = models.SlugField(max_length=190, unique=True, blank=True)
	excerpt = models.CharField(max_length=280)
	content = models.TextField()
	cover_image = models.ImageField(upload_to='blog/', blank=True, null=True)
	author = models.CharField(max_length=120, default='Dental Editorial Team')
	is_published = models.BooleanField(default=True)
	published_at = models.DateTimeField(blank=True, null=True)
	meta_title = models.CharField(max_length=180, blank=True)
	meta_description = models.CharField(max_length=280, blank=True)

	class Meta:
		ordering = ['-published_at', '-created_at']

	def __str__(self):
		return self.title

	def save(self, *args, **kwargs):
		if not self.slug:
			self.slug = slugify(self.title)
		super().save(*args, **kwargs)


class PageSEO(TimeStampedModel):
	page_key = models.CharField(max_length=80, unique=True)
	title = models.CharField(max_length=180)
	description = models.CharField(max_length=280)
	canonical_url = models.URLField(blank=True)
	og_image = models.ImageField(upload_to='seo/', blank=True, null=True)

	class Meta:
		verbose_name = 'Page SEO'
		verbose_name_plural = 'Page SEO'

	def __str__(self):
		return self.page_key


class Appointment(TimeStampedModel):
	STATUS_PENDING = 'pending'
	STATUS_CONFIRMED = 'confirmed'
	STATUS_COMPLETED = 'completed'
	STATUS_CANCELLED = 'cancelled'
	STATUS_CHOICES = [
		(STATUS_PENDING, 'Pending'),
		(STATUS_CONFIRMED, 'Confirmed'),
		(STATUS_COMPLETED, 'Completed'),
		(STATUS_CANCELLED, 'Cancelled'),
	]

	patient_name = models.CharField(max_length=140)
	phone_validator = RegexValidator(
		regex=r'^(\+?8801|01)[3-9]\d{8}$',
		message='Enter a valid Bangladesh phone number.',
	)
	phone = models.CharField(max_length=20, validators=[phone_validator])
	email = models.EmailField(blank=True)
	preferred_date = models.DateField()
	preferred_time = models.TimeField()
	service = models.ForeignKey(Service, on_delete=models.SET_NULL, related_name='appointments', null=True, blank=True)
	doctor = models.ForeignKey(Doctor, on_delete=models.SET_NULL, related_name='appointments', null=True, blank=True)
	message = models.TextField(blank=True)
	status = models.CharField(max_length=20, choices=STATUS_CHOICES, default=STATUS_PENDING)
	source = models.CharField(max_length=50, default='website')
	ip_address = models.GenericIPAddressField(blank=True, null=True)

	class Meta:
		ordering = ['-created_at']

	def __str__(self):
		return f'{self.patient_name} - {self.preferred_date}'
