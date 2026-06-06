export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin?: string;
  email: string;
  whatsapp?: string;
}

export const featuredMember: TeamMember = {
  name: 'Syed Mohammad Asad',
  role: 'Managing Partner',
  description:
    'Sets vision and strategy, leads company direction, manages partnerships, and oversees overall performance. Asad brings together technical rigor and client-focused delivery to ensure every project meets scope, budget, and timeline.',
  image: '/images/asad.jpg',
  linkedin: 'http://www.linkedin.com/in/syedasadmohammad',
  email: 'asdsydmhd79@gmail.com',
  whatsapp: '923045410966',
};

export const coreTeamMembers: TeamMember[] = [
  {
    name: 'Khadija Javed',
    role: 'Director of Services',
    description:
      'Manages daily workflow, team coordination, project delivery timelines, and service quality.',
    image: '/images/khadija.jpg',
    linkedin: 'http://linkedin.com/in/khadija-javed-083579347',
    email: 'khadijajaved450@gmail.com',
  },
  {
    name: 'Rayan Amin',
    role: 'Head of Design',
    description:
      'Leads architectural, structural, and MEP design output (AutoCAD, Revit, etc.) and supervises design deliverables.',
    image: '/images/Rayyan.jpg',
    email: 'rayyanamin2k19@gmail.com',
  },
  {
    name: 'Muhammad Faseeh',
    role: 'Head of Estimation',
    description:
      'Manages estimation work, quantity take-offs, and cost breakdowns using tools like Bluebeam, PlanSwift, and Excel.',
    image: '/images/faseeh.png',
    email: 'Faseehlicious@gmail.com',
  },
  {
    name: 'Muneeb Qureshi',
    role: 'Tech and Ops Manager',
    description:
      'Coordinates multidisciplinary project workflows, client communication, and technical deliverable reviews across civil engineering engagements.',
    image: '/images/muneeb.png',
    linkedin: 'https://www.linkedin.com/in/muneebqureshi2003/',
    email: 'info@sharafkarmsolutions.com',
  },
];
