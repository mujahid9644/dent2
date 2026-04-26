import { getServiceImage } from '../config/serviceImages'

export const serviceCatalog = [
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
].map((name) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-')

  return {
    title: name,
    name,
    slug,
    image: getServiceImage(slug, name),
    short_description: `${name} with patient-friendly planning and modern diagnostics in Dhaka.`,
    description:
      `${name} is delivered with a personalized treatment plan, transparent explanation, and careful follow-up for long-term oral health.`,
  }
})

export const doctorProfiles = [
  /*{
    name: 'Dr. Ayesha Rahman',
    slug: 'dr-ayesha-rahman',
    title: 'Consultant Dental Surgeon',
    credentials: 'BDS, FCPS',
    image_url:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
    years_of_experience: 12,
    bio: 'Known for calm communication and precision-led treatment planning for complex dental cases.',
    is_featured: true,
  },    */
  {
    name: 'Dr. Mustak',
    slug: 'dr-mustak',
    title: 'Orthodontic & Cosmetic Dentist',
    credentials: 'BDS, MSc Orthodontics',
    image_url:
      'https://scontent.fdac3-2.fna.fbcdn.net/v/t39.30808-6/470595130_1105656478237613_6998746177189950089_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=clAXV0Q4igkQ7kNvwHUEbR1&_nc_oc=AdpHek5Vn8F9yIUcDSrOVp2m1F7HnsUVTJMWqqoiBVRlv5QSdjmLhb2z9W73sAcaiRU&_nc_zt=23&_nc_ht=scontent.fdac3-2.fna&_nc_gid=9pfHqaXchbwDoroBGPRaNg&_nc_ss=7b289&oh=00_Af2akTenpcrhJDjWSMmxqjfzbZ_TW8Etd0-ivPLh4u-CDA&oe=69F3A509',
    years_of_experience: 9,
    bio: 'Specializes in braces, aligners, and smile design with a minimally invasive approach.',
    is_featured: true,
  },
]

export const testimonials = [
  {
    patient_name: 'Tanvir Hossain',
    patient_location: 'Banani, Dhaka',
    rating: 5,
    quote: 'Excellent hygiene, caring doctors, and painless treatment. Truly one of the best dental clinics in Dhaka.',
    treatment: 'Root Canal Treatment',
  },
  {
    patient_name: 'Sadia Akter',
    patient_location: 'Mirpur, Dhaka',
    rating: 5,
    quote: 'I got braces consultation and the process was clear and reassuring from day one.',
    treatment: 'Braces Treatment',
  },
]

export const faqs = [
  {
    question: 'How often should I visit a dentist in Dhaka?',
    answer: 'Most patients should have a checkup every 6 months. Your dentist may suggest shorter intervals for ongoing treatment.',
  },
  {
    question: 'Do you provide emergency dental treatment?',
    answer: 'Yes. For severe pain, swelling, trauma, or broken teeth, contact us immediately for priority scheduling.',
  },
  {
    question: 'What dental services do you usually offer?',
    answer: 'We offer complete dental care services in Dhaka, including dental implants, braces, root canal treatment, teeth whitening, cosmetic dentistry, and general check-ups. Our goal is to provide all solutions under one roof with the best dentist team in Dhaka.',
  },
  {
    question: ' Are you the best dental clinic in Dhaka?',
    answer: 'We are proud to be recognized as one of the best dental clinics in Dhaka, known for our modern equipment, experienced dentists, and commitment to quality dental care. Our focus is on delivering excellent results, patient satisfaction, and long-term oral health.',
  },
  {
    question: ' Why do patients choose your dental care in Dhaka?',
    answer: 'Patients choose us as the best dentist in Dhaka for our expert team, advanced technology, and patient-focused approach. We provide high-quality dental care with painless treatments, transparent pricing, and personalized solutions.',
  },
  {
    question: 'How do you ensure hygiene and safety in your clinic?',
    answer: 'We follow strict hygiene and sterilization protocols to deliver safe and reliable dental care in Dhaka. All instruments are properly sterilized, and we maintain a clean and safe environment according to international standards.',
  },
]

export const blogPosts = [
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
].map((title, index) => ({
  title,
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  excerpt: `A practical patient guide for Dhaka residents about ${title.toLowerCase()}.`,
  content:
    'This educational article explains symptoms, treatment pathways, and prevention strategies. Always seek a clinical assessment for personalized guidance.',
  published_at: `2026-01-${String(index + 1).padStart(2, '0')}T10:00:00Z`,
}))

export const galleryItems = [
  {
    title: 'Modern reception and waiting lounge',
    alt_text: 'Premium dental clinic reception in Dhaka',
    image:
      'https://th.bing.com/th/id/OIP.oW7Xf24SqwkUpw6E9lhsIgHaDt?w=307&h=174&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3',
  },
  {
    title: 'Digital diagnostic treatment room',
    alt_text: 'Advanced dental treatment setup',
    image:
      'https://sachemdental.com/wp-content/uploads/2022/05/1U1A7740-scaled.jpg',
  },
  {
    title: 'Sterilization and patient safety zone',
    alt_text: 'Dental instrument sterilization area',
    image:
      'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80',
  },
]
