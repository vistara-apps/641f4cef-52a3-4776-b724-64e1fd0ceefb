// Health topics for filtering and categorization
export const HEALTH_TOPICS = [
  'Infectious Diseases',
  'Health Equity',
  'Climate Health',
  'Mental Health',
  'Chronic Diseases',
  'Health Policy',
  'Global Health',
  'Environmental Health',
  'Occupational Health',
  'Community Health',
  'Health Technology',
  'Public Health Emergency',
] as const;

// Content sources
export const CONTENT_SOURCES = [
  'WHO',
  'CDC',
  'NIH',
  'APHA',
  'The Lancet',
  'NEJM',
  'Health Affairs',
  'BMJ',
  'JAMA',
  'Nature Medicine',
] as const;

// Initiative categories
export const INITIATIVE_CATEGORIES = [
  'Disease Prevention',
  'Health Promotion',
  'Emergency Preparedness',
  'Community Engagement',
  'Health Education',
  'Policy Advocacy',
  'Research & Surveillance',
  'Health Equity',
] as const;

// Subscription tiers
export const SUBSCRIPTION_TIERS = {
  free: {
    name: 'Free',
    price: 0,
    features: [
      'Basic intelligence feed',
      'Limited networking',
      'Basic initiative templates',
    ],
  },
  pro: {
    name: 'Pro',
    price: 10,
    features: [
      'Enhanced intelligence feed',
      'Advanced networking',
      'Premium templates',
      'Expert Q&A access',
    ],
  },
  agency: {
    name: 'Agency',
    price: 50,
    features: [
      'Team features',
      'Custom templates',
      'Priority support',
      'Analytics dashboard',
    ],
  },
} as const;

// Mock data for development
export const MOCK_INTELLIGENCE_ITEMS = [
  {
    itemId: '1',
    title: 'New WHO Guidelines on Climate Health Adaptation',
    source: 'WHO',
    url: 'https://who.int/news/climate-health-guidelines',
    summary: 'The World Health Organization releases comprehensive guidelines for health system adaptation to climate change impacts.',
    tags: ['Climate Health', 'Health Policy', 'Global Health'],
    publishedDate: '2024-01-15T10:00:00Z',
    type: 'policy' as const,
    imageUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400',
    readTime: 8,
    priority: 'high' as const,
  },
  {
    itemId: '2',
    title: 'Mental Health Crisis in Urban Communities',
    source: 'APHA',
    url: 'https://apha.org/mental-health-urban',
    summary: 'Latest research reveals increasing mental health challenges in urban populations post-pandemic.',
    tags: ['Mental Health', 'Community Health', 'Health Equity'],
    publishedDate: '2024-01-14T14:30:00Z',
    type: 'research' as const,
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400',
    readTime: 6,
    priority: 'medium' as const,
  },
  {
    itemId: '3',
    title: 'Breakthrough in Infectious Disease Surveillance',
    source: 'CDC',
    url: 'https://cdc.gov/surveillance-breakthrough',
    summary: 'New AI-powered surveillance system shows promise in early detection of disease outbreaks.',
    tags: ['Infectious Diseases', 'Health Technology', 'Public Health Emergency'],
    publishedDate: '2024-01-13T09:15:00Z',
    type: 'news' as const,
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400',
    readTime: 5,
    priority: 'high' as const,
  },
];

export const MOCK_USERS = [
  {
    userId: '1',
    displayName: 'Dr. Sarah Chen',
    handle: '@sarahchen',
    bio: 'Epidemiologist specializing in infectious disease surveillance and global health security.',
    interests: ['Infectious Diseases', 'Global Health', 'Health Technology'],
    location: 'Atlanta, GA',
    subscriptionTier: 'pro' as const,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100',
    expertise: ['Epidemiology', 'Disease Surveillance', 'Global Health'],
    connections: 342,
  },
  {
    userId: '2',
    displayName: 'Marcus Rodriguez',
    handle: '@marcusrph',
    bio: 'Community health advocate focused on health equity and social determinants of health.',
    interests: ['Health Equity', 'Community Health', 'Health Policy'],
    location: 'Los Angeles, CA',
    subscriptionTier: 'agency' as const,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    expertise: ['Community Health', 'Health Equity', 'Program Management'],
    connections: 189,
  },
];

export const MOCK_INITIATIVE_TEMPLATES = [
  {
    templateId: '1',
    name: 'Heatwave Preparedness Program',
    description: 'Comprehensive toolkit for developing community heatwave response and prevention programs.',
    tags: ['Climate Health', 'Emergency Preparedness', 'Community Health'],
    contentUrl: '/templates/heatwave-preparedness.pdf',
    category: 'Emergency Preparedness',
    difficulty: 'intermediate' as const,
    estimatedTime: '2-3 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400',
  },
  {
    templateId: '2',
    name: 'Vaccine Outreach Campaign',
    description: 'Step-by-step guide for organizing effective community vaccination campaigns.',
    tags: ['Disease Prevention', 'Community Engagement', 'Health Education'],
    contentUrl: '/templates/vaccine-outreach.pdf',
    category: 'Disease Prevention',
    difficulty: 'beginner' as const,
    estimatedTime: '1-2 weeks',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400',
  },
];

// Navigation items
export const NAVIGATION_ITEMS = [
  { id: 'feed', label: 'Feed', icon: 'Home' },
  { id: 'network', label: 'Network', icon: 'Users' },
  { id: 'initiatives', label: 'Initiatives', icon: 'Briefcase' },
  { id: 'chat', label: 'Expert Q&A', icon: 'MessageCircle' },
] as const;

// Color mappings for different content types
export const TYPE_COLORS = {
  news: 'bg-blue-100 text-blue-800',
  research: 'bg-green-100 text-green-800',
  policy: 'bg-purple-100 text-purple-800',
} as const;

export const PRIORITY_COLORS = {
  high: 'border-l-red-500',
  medium: 'border-l-yellow-500',
  low: 'border-l-gray-300',
} as const;
