// User types
export interface User {
  userId: string;
  displayName: string;
  handle: string;
  bio: string;
  interests: string[];
  location: string;
  subscriptionTier: 'free' | 'pro' | 'agency';
  avatar?: string;
  expertise?: string[];
  connections?: number;
}

// Intelligence Item types
export interface IntelligenceItem {
  itemId: string;
  title: string;
  source: string;
  url: string;
  summary: string;
  tags: string[];
  publishedDate: string;
  type: 'news' | 'research' | 'policy';
  imageUrl?: string;
  readTime?: number;
  priority?: 'low' | 'medium' | 'high';
}

// Connection types
export interface Connection {
  connectionId: string;
  fromUserId: string;
  toUserId: string;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: string;
}

// Initiative Template types
export interface InitiativeTemplate {
  templateId: string;
  name: string;
  description: string;
  tags: string[];
  contentUrl: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  imageUrl?: string;
}

// Feed types
export interface FeedFilter {
  topics: string[];
  sources: string[];
  timeRange: 'today' | 'week' | 'month';
  priority: 'all' | 'high' | 'medium';
}

// Chat types
export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Component Props types
export interface FeedCardProps {
  item: IntelligenceItem;
  variant?: 'news' | 'research' | 'policy';
  onItemClick?: (item: IntelligenceItem) => void;
}

export interface ProfileCardProps {
  user: User;
  variant?: 'basic' | 'withStats';
  onConnect?: (userId: string) => void;
  onMessage?: (userId: string) => void;
}

export interface TopicTagProps {
  topic: string;
  variant?: 'selectable' | 'display';
  selected?: boolean;
  onToggle?: (topic: string) => void;
}

export interface InitiativeCardProps {
  template: InitiativeTemplate;
  variant?: 'template' | 'myInitiative';
  onSelect?: (template: InitiativeTemplate) => void;
}

export interface NetworkButtonProps {
  variant: 'connect' | 'message';
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}
