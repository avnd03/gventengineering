export const IMAGES = {
  hero: 'https://images.pexels.com/photos/15269606/pexels-photo-15269606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  heroAbout: 'https://images.pexels.com/photos/16512502/pexels-photo-16512502.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  heroServices: 'https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  heroProjects: 'https://images.pexels.com/photos/37182542/pexels-photo-37182542.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  heroContact: 'https://images.pexels.com/photos/32229751/pexels-photo-32229751.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  heroClients: 'https://images.pexels.com/photos/15269597/pexels-photo-15269597.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  acmv: 'https://images.pexels.com/photos/37913513/pexels-photo-37913513.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  plumbing: 'https://images.pexels.com/photos/5658852/pexels-photo-5658852.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  structural: 'https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  fire: 'https://images.pexels.com/photos/36595991/pexels-photo-36595991.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  alteration: 'https://images.pexels.com/photos/10810462/pexels-photo-10810462.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  about1: 'https://images.pexels.com/photos/8961126/pexels-photo-8961126.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  about2: 'https://images.pexels.com/photos/31473864/pexels-photo-31473864.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  project1: 'https://images.pexels.com/photos/15269606/pexels-photo-15269606.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  project2: 'https://images.pexels.com/photos/16512502/pexels-photo-16512502.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  project3: 'https://images.pexels.com/photos/37182542/pexels-photo-37182542.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  project4: 'https://images.pexels.com/photos/28958824/pexels-photo-28958824.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  project5: 'https://images.pexels.com/photos/16512504/pexels-photo-16512504.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  project6: 'https://images.pexels.com/photos/31375781/pexels-photo-31375781.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  project7: 'https://images.pexels.com/photos/37634701/pexels-photo-37634701.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
};

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  icon: string;
  features: string[];
  benefits: string[];
  details: string[];
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'acmv-system-maintenance',
    title: 'ACMV System & Maintenance',
    shortDesc: 'Air conditioning and mechanical ventilation systems designed for comfort, efficiency, and reliability.',
    description: 'Our ACMV (Air Conditioning & Mechanical Ventilation) services encompass the full spectrum of climate control solutions for commercial and industrial facilities. From initial design and installation to ongoing maintenance and optimization, we ensure your building maintains optimal indoor air quality and thermal comfort while maximizing energy efficiency.',
    image: IMAGES.acmv,
    icon: 'Wind',
    features: ['HVAC Installation & Commissioning', 'Ventilation System Design', 'Preventive Maintenance Contracts', 'Energy Optimization & Audits', 'Chiller Plant Management', 'Air Quality Monitoring', 'Ductwork Fabrication & Installation', 'Building Automation Integration'],
    benefits: ['Reduced energy consumption by up to 30%', 'Extended equipment lifespan', 'Improved indoor air quality', 'Regulatory compliance assurance', 'Minimized downtime and disruptions'],
    details: ['Our team of certified ACMV engineers brings decades of combined experience in designing, installing, and maintaining climate control systems for buildings of all sizes. We use cutting-edge technology and follow international standards to deliver solutions that are both efficient and sustainable.'],
  },
  {
    id: '2',
    slug: 'plumbing-sanitary',
    title: 'Plumbing & Sanitary',
    shortDesc: 'Installation, repair, and maintenance of water supply and drainage systems.',
    description: 'Our Plumbing & Sanitary services cover everything from water supply system design and installation to drainage, sewage, and rainwater management. We work with commercial and industrial clients to ensure reliable, code-compliant plumbing infrastructure that supports operations efficiently.',
    image: IMAGES.plumbing,
    icon: 'Droplets',
    features: ['Water Supply System Design', 'Drainage & Sewage Systems', 'Maintenance & Emergency Repairs', 'Pipe Replacement & Upgrading', 'Sanitary Installation', 'Rainwater Harvesting Systems', 'Water Treatment Solutions', 'Backflow Prevention'],
    benefits: ['Reliable water supply infrastructure', 'Code-compliant installations', 'Reduced water waste', 'Emergency response capability', 'Long-lasting plumbing solutions'],
    details: ['We provide comprehensive plumbing and sanitary engineering services that meet the highest standards of quality and safety. Our experienced team handles projects of all scales, from small commercial buildings to large industrial facilities.'],
  },
  {
    id: '3',
    slug: 'structural-design-engineering',
    title: 'Structural Design & Engineering',
    shortDesc: 'Comprehensive structural planning, analysis, and engineering services.',
    description: 'Our Structural Design & Engineering services provide end-to-end structural solutions for commercial and industrial projects. From concept design through detailed engineering to construction supervision, we ensure every structure is safe, efficient, and built to last.',
    image: IMAGES.structural,
    icon: 'Building2',
    features: ['Structural Analysis & Design', 'Steel Structure Engineering', 'Building Engineering Services', 'Sustainability-Focused Design', 'Material Selection & Testing', 'Load Analysis & Calculations', 'Safety Engineering', 'Construction Supervision'],
    benefits: ['Structurally sound and safe buildings', 'Cost-effective material usage', 'Sustainable design practices', 'Regulatory compliance', 'Reduced construction risks'],
    details: ['Our structural engineering team combines advanced computational tools with practical construction experience to deliver designs that are both innovative and buildable. We specialize in material selection, load analysis, safety engineering, sustainability, and cost efficiency based on industry best practices.'],
  },
  {
    id: '4',
    slug: 'fire-protection-system',
    title: 'Fire Protection System',
    shortDesc: 'Complete fire detection, suppression, and safety solutions.',
    description: 'Our Fire Protection services provide comprehensive fire safety solutions including detection, alarm, suppression, and emergency systems. We design, install, and maintain fire protection infrastructure that meets the most stringent safety standards and regulatory requirements.',
    image: IMAGES.fire,
    icon: 'Flame',
    features: ['Fire Alarm Systems', 'Sprinkler System Design & Installation', 'Fire Suppression Systems', 'Compliance Inspections', 'Emergency Lighting', 'Smoke Control Systems', 'Fire Risk Assessment', 'System Integration & Monitoring'],
    benefits: ['Life safety compliance', 'Property protection', 'Insurance requirement fulfillment', 'Rapid emergency response', 'Peace of mind for occupants'],
    details: ['Fire safety is non-negotiable. Our fire protection engineers design and implement systems that provide early detection, effective suppression, and safe evacuation pathways. We stay current with the latest codes and technologies to deliver the most effective fire safety solutions.'],
  },
  {
    id: '5',
    slug: 'addition-alteration-services',
    title: 'Addition & Alteration (A&A)',
    shortDesc: 'Expert renovation, retrofitting, and facility upgrading services.',
    description: 'Our Addition & Alteration services help building owners and managers modernize, expand, and improve existing facilities. Whether you need to renovate aging infrastructure, retrofit for new requirements, or upgrade building systems, our team delivers seamless transformation with minimal disruption.',
    image: IMAGES.alteration,
    icon: 'Hammer',
    features: ['Renovation Planning & Execution', 'Retrofitting Existing Systems', 'Facility Upgrading', 'Space Reconfiguration', 'M&E System Modernization', 'Green Building Upgrades', 'Code Compliance Upgrades', 'Project Management'],
    benefits: ['Modernized facilities', 'Extended building lifespan', 'Improved energy efficiency', 'Enhanced functionality', 'Minimal operational disruption'],
    details: ['Our A&A team specializes in transforming existing buildings to meet modern standards and requirements. We coordinate all trades and manage the entire process from planning through completion, ensuring quality results delivered on time and within budget.'],
  },
];

export interface Project {
  id: string;
  name: string;
  category: string;
  location: string;
  image: string;
  client: string;
  scope: string;
  completionDate: string;
  technologies: string[];
  description: string;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'Jewel Changi Airport',
    category: 'ACMV System',
    location: 'Singapore',
    image: IMAGES.project1,
    client: 'Changi Airport Group',
    scope: 'ACMV system design, installation, and commissioning for the iconic mixed-use development.',
    completionDate: '2019',
    technologies: ['Chilled Water System', 'Variable Air Volume', 'Building Automation'],
    description: 'Complete ACMV system for the world-renowned Jewel Changi Airport, featuring advanced climate control for the indoor rainforest and retail spaces.',
  },
  {
    id: '2',
    name: 'Katong Park MRT Station',
    category: 'ACMV System',
    location: 'Singapore',
    image: IMAGES.project2,
    client: 'Land Transport Authority',
    scope: 'Mechanical ventilation and air conditioning for underground MRT station.',
    completionDate: '2024',
    technologies: ['Tunnel Ventilation', 'Platform Screen Doors', 'Emergency Ventilation'],
    description: 'Advanced ventilation systems for the Thomson-East Coast Line MRT station, ensuring passenger comfort and safety in underground environments.',
  },
  {
    id: '3',
    name: 'National Cancer Centre',
    category: 'Plumbing & Sanitary',
    location: 'Singapore',
    image: IMAGES.project3,
    client: 'Ministry of Health',
    scope: 'Complete plumbing and sanitary systems for the medical facility.',
    completionDate: '2022',
    technologies: ['Medical Gas Systems', 'Waste Management', 'Water Treatment'],
    description: 'Specialized plumbing and sanitary engineering for healthcare facility requirements, including medical-grade water systems and waste management.',
  },
  {
    id: '4',
    name: 'Keppel Tower',
    category: 'Structural & Piping',
    location: 'Singapore',
    image: IMAGES.project4,
    client: 'Keppel Corporation',
    scope: 'Structural engineering and piping works for commercial tower renovation.',
    completionDate: '2021',
    technologies: ['Steel Structures', 'Piping Systems', 'Structural Reinforcement'],
    description: 'Major structural and piping works for the renovation of Keppel Tower, ensuring the building meets modern safety and performance standards.',
  },
  {
    id: '5',
    name: 'Yishun Community Hospital',
    category: 'ACMV System',
    location: 'Singapore',
    image: IMAGES.project5,
    client: 'Alexandra Health System',
    scope: 'HVAC systems for the 428-bed community hospital.',
    completionDate: '2020',
    technologies: ['Clean Room HVAC', 'Energy Recovery', 'Air Filtration'],
    description: 'Healthcare-grade ACMV systems providing precise temperature and humidity control for patient wards, operating theatres, and pharmaceutical areas.',
  },
  {
    id: '6',
    name: 'SATS Inflight Catering Centre',
    category: 'Plumbing & Sanitary',
    location: 'Singapore',
    image: IMAGES.project6,
    client: 'SATS Ltd',
    scope: 'Industrial plumbing and food-grade water systems.',
    completionDate: '2021',
    technologies: ['Food Grade Piping', 'Hot Water Systems', 'Drainage Engineering'],
    description: 'Specialized plumbing systems for the food production facility, meeting stringent food safety and hygiene standards.',
  },
  {
    id: '7',
    name: 'Ng Teng Fong General Hospital',
    category: 'Structural & Piping',
    location: 'Singapore',
    image: IMAGES.project7,
    client: 'JurongHealth',
    scope: 'Structural works and piping systems for the 700-bed hospital.',
    completionDate: '2020',
    technologies: ['Medical Piping', 'Structural Steel', 'Seismic Design'],
    description: 'Comprehensive structural and piping engineering for one of Singapore\'s largest and most advanced healthcare facilities.',
  },
];

export const clients = [
  { id: '1', name: 'Asahi', logo: '' },
  { id: '2', name: 'Seatrium', logo: '' },
  { id: '3', name: 'Kurihara', logo: '' },
  { id: '4', name: 'Omnicrest', logo: '' },
  { id: '5', name: 'Kinden', logo: '' },
  { id: '6', name: 'Keppel', logo: '' },
  { id: '7', name: 'Johnson Controls', logo: '' },
];

export const testimonials = [
  {
    id: '1',
    name: 'David Chen',
    company: 'Keppel Corporation',
    role: 'Project Director',
    text: 'GVENT Engineering delivered exceptional ACMV solutions for our tower renovation. Their technical expertise and project management capabilities exceeded our expectations.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Tan',
    company: 'Alexandra Health System',
    role: 'Facilities Manager',
    text: 'The team at GVENT demonstrated outstanding professionalism in delivering healthcare-grade engineering systems. Their attention to detail and commitment to quality was impressive.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Wong',
    company: 'SATS Ltd',
    role: 'Engineering Manager',
    text: 'Working with GVENT on our catering centre was a great experience. They understood our unique requirements and delivered food-grade plumbing solutions on time and within budget.',
    rating: 5,
  },
];

export const companyInfo = {
  name: 'GVENT Engineering Pte Ltd',
  tagline: 'Engineering Solutions That Drive Innovation',
  phone: '+65 6123 4567',
  email: 'info@gvent.com.sg',
  registeredAddress: '10 Anson Road, #12-06 International Plaza, Singapore 079903',
  factory1: '21 Tuas South Avenue 2, Singapore 637601',
  factory2: '15 Pioneer Road North, Singapore 628461',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8198936799437!2d103.84545!3d1.2743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnMjcuNSJOIDEwM8KwNTAnNDMuNiJF!5e0!3m2!1sen!2ssg!4v1234567890',
  socialMedia: {
    facebook: 'https://facebook.com/gventengineering',
    linkedin: 'https://linkedin.com/company/gventengineering',
    instagram: 'https://instagram.com/gventengineering',
  },
  whatsapp: '+6561234567',
};

export const stats = [
  { label: 'Years of Excellence', value: 12, suffix: '+' },
  { label: 'Project Success', value: 100, suffix: '+' },
  { label: 'Employees', value: 120, suffix: '+' },
  { label: 'Completed Projects', value: 500, suffix: '+' },
];

export const whyChooseUs = [
  {
    title: 'Experience & Expertise',
    description: 'Over 12 years of proven track record in delivering complex engineering projects across commercial and industrial sectors.',
    icon: 'Award',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes and adherence to international engineering standards ensure excellence in every project.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Reliable Solutions',
    description: 'Our engineering solutions are designed for long-term performance, minimizing maintenance costs and maximizing operational efficiency.',
    icon: 'Settings',
  },
  {
    title: 'Customized Engineering Services',
    description: 'Every project receives a tailored approach, with solutions engineered specifically to meet your unique requirements and objectives.',
    icon: 'Wrench',
  },
];
