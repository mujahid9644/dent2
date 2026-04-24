from datetime import datetime

from django.core.management.base import BaseCommand
from django.utils import timezone

from core.models import BlogPost, Doctor, FAQ, PageSEO, Service, ServiceCategory, SiteSetting, Testimonial


SERVICE_NAMES = [
    'Dental Checkup',
    'Teeth Cleaning',
    'Scaling & Polishing',
    'Root Canal Treatment',
    'Tooth Extraction',
    'Dental Filling',
    'Dental Crown & Bridge',
    'Dental Implant',
    'Orthodontics / Braces',
    'Clear Aligners',
    'Teeth Whitening',
    'Cosmetic Dentistry',
    'Pediatric Dentistry',
    'Gum Treatment',
    'Wisdom Tooth Surgery',
    'Smile Makeover',
]


class Command(BaseCommand):
    help = 'Seeds starter data for reusable dental clinic template.'

    def handle(self, *args, **kwargs):
        SiteSetting.objects.get_or_create(
            id=1,
            defaults={
                'clinic_name': 'Prime Dental Care',
                'short_clinic_name': 'Prime Dental',
                'tagline': 'Modern dentistry crafted for confident smiles',
                'email': 'hello@primedental.example',
                'phone': '+8801712345678',
                'whatsapp': '+8801712345678',
                'address': 'House 10, Road 11, Dhanmondi, Dhaka 1209',
                'google_map_embed': 'https://maps.google.com/',
                'hero_title': 'Best dental clinic in Dhaka for family and cosmetic care',
                'hero_subtitle': 'Patient-first treatments with digital imaging, strict sterilization, and transparent guidance.',
            },
        )

        general, _ = ServiceCategory.objects.get_or_create(name='General Dentistry')
        cosmetic, _ = ServiceCategory.objects.get_or_create(name='Cosmetic & Advanced Care')

        for index, name in enumerate(SERVICE_NAMES):
            Service.objects.get_or_create(
                name=name,
                defaults={
                    'category': general if index < 8 else cosmetic,
                    'short_description': f'{name} delivered with modern, patient-friendly care in Dhaka.',
                    'description': (
                        f'{name} at our dental clinic in Dhaka is planned around comfort, precision, and long-term oral health. '
                        'Each case starts with detailed diagnosis and transparent treatment recommendations.'
                    ),
                    'is_featured': index < 6,
                },
            )

        doctor_one, _ = Doctor.objects.get_or_create(
            name='Dr. Ayesha Rahman',
            defaults={
                'title': 'Consultant Dental Surgeon',
                'credentials': 'BDS, FCPS (Oral & Maxillofacial Surgery)',
                'bio': 'Focuses on minimally invasive treatment planning and comprehensive smile rehabilitation.',
                'years_of_experience': 12,
                'is_featured': True,
            },
        )
        doctor_two, _ = Doctor.objects.get_or_create(
            name='Dr. Fahim Hasan',
            defaults={
                'title': 'Orthodontic & Cosmetic Dentist',
                'credentials': 'BDS, MSc Orthodontics',
                'bio': 'Specializes in braces, aligners, and smile design with patient-centered communication.',
                'years_of_experience': 9,
                'is_featured': True,
            },
        )

        doctor_one.specialties.set(Service.objects.filter(name__in=['Dental Implant', 'Root Canal Treatment']))
        doctor_two.specialties.set(Service.objects.filter(name__in=['Orthodontics / Braces', 'Clear Aligners', 'Smile Makeover']))

        Testimonial.objects.get_or_create(
            patient_name='Tanvir Hossain',
            defaults={
                'patient_location': 'Banani, Dhaka',
                'rating': 5,
                'quote': 'Very clean setup, friendly doctors, and zero pain during treatment. Highly recommended.',
                'treatment': 'Root Canal Treatment',
            },
        )

        FAQ.objects.get_or_create(
            question='How often should I visit a dentist in Dhaka?',
            defaults={
                'answer': 'For most patients, a checkup every 6 months is ideal. If you have gum issues or orthodontic treatment, your dentist may suggest more frequent visits.',
                'display_order': 1,
            },
        )

        blog_topics = [
            'How to Choose the Best Dentist in Dhaka',
            'Signs You May Need a Root Canal',
            'Best Time to Get Braces Treatment',
            'How Often Should You Visit a Dental Clinic',
            'Teeth Whitening: What to Expect',
            'Dental Implant Cost and Benefits',
            'Common Causes of Tooth Pain',
            'Dental Care Tips for Children',
            'How to Maintain Oral Hygiene',
            'What to Do in a Dental Emergency',
        ]

        for idx, topic in enumerate(blog_topics):
            BlogPost.objects.get_or_create(
                title=topic,
                defaults={
                    'excerpt': f'A practical guide for patients in Dhaka about {topic.lower()}.',
                    'content': (
                        'This educational article helps patients understand treatment options, warning signs, and how to make informed decisions. '
                        'Always consult a qualified dentist for personalized advice.'
                    ),
                    'is_published': True,
                    'published_at': timezone.make_aware(datetime(2026, 1, 1, 10, 0)) + timezone.timedelta(days=idx),
                },
            )

        PageSEO.objects.get_or_create(
            page_key='home',
            defaults={
                'title': 'Best Dental Clinic in Dhaka | Dentist in Dhaka',
                'description': 'Book trusted dental care with experienced dentists in Dhaka for implants, braces, whitening, and emergency treatment.',
            },
        )

        self.stdout.write(self.style.SUCCESS('Demo data seeded successfully.'))
