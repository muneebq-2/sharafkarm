export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'cost-estimation-guide',
    title: 'How Accurate Cost Estimation Protects Your Construction Budget',
    excerpt:
      'Learn why early-stage quantity take-offs and rate analysis reduce overrun risk and improve contractor negotiations.',
    category: 'Cost Estimation',
    date: 'May 2026',
    readTime: '6 min read',
  },
  {
    id: 'fidic-contract-basics',
    title: 'FIDIC Contract Essentials for Civil Engineering Projects',
    excerpt:
      'A practical overview of interim certificates, variations, and dispute documentation for smoother project administration.',
    category: 'Contract Management',
    date: 'April 2026',
    readTime: '8 min read',
  },
  {
    id: 'structural-design-tips',
    title: 'Structural Design Best Practices for Commercial Buildings',
    excerpt:
      'From load optimization to reinforcement detailing — key steps that improve constructability and code compliance.',
    category: 'Structural Design',
    date: 'March 2026',
    readTime: '7 min read',
  },
];
