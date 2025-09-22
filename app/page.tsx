'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, Plus } from 'lucide-react';
import { AppShell } from '@/components/AppShell';
import { FeedCard } from '@/components/FeedCard';
import { ProfileCard } from '@/components/ProfileCard';
import { InitiativeCard } from '@/components/InitiativeCard';
import { ExpertChat } from '@/components/ExpertChat';
import { TopicTag } from '@/components/TopicTag';
import { IntelligenceItem, User, InitiativeTemplate } from '@/lib/types';
import { MOCK_INTELLIGENCE_ITEMS, MOCK_USERS, MOCK_INITIATIVE_TEMPLATES, HEALTH_TOPICS } from '@/lib/constants';
import { filterBySearch, sortByDate } from '@/lib/utils';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [feedItems, setFeedItems] = useState<IntelligenceItem[]>(MOCK_INTELLIGENCE_ITEMS);
  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  const [templates, setTemplates] = useState<InitiativeTemplate[]>(MOCK_INITIATIVE_TEMPLATES);

  // Filter feed items based on search and topics
  const filteredFeedItems = feedItems.filter(item => {
    const matchesSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTopics = selectedTopics.length === 0 ||
      selectedTopics.some(topic => item.tags.includes(topic));
    
    return matchesSearch && matchesTopics;
  });

  // Filter users based on search
  const filteredUsers = users.filter(user => {
    if (!searchQuery) return true;
    return user.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
           user.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
           user.interests.some(interest => interest.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  // Filter templates based on search
  const filteredTemplates = templates.filter(template => {
    if (!searchQuery) return true;
    return template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
           template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  const handleTopicToggle = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleItemClick = (item: IntelligenceItem) => {
    console.log('View intelligence item:', item);
    // TODO: Implement detailed view
  };

  const handleConnect = (userId: string) => {
    console.log('Connect with user:', userId);
    // TODO: Implement connection request
  };

  const handleMessage = (userId: string) => {
    console.log('Message user:', userId);
    // TODO: Implement messaging
  };

  const handleTemplateSelect = (template: InitiativeTemplate) => {
    console.log('Select template:', template);
    // TODO: Implement template selection
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return (
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="card p-6 bg-gradient-to-r from-primary to-accent text-white">
              <h2 className="text-display mb-2">Welcome to HealthPulse Hub</h2>
              <p className="text-body opacity-90 mb-4">
                Your curated intelligence and collaboration network for proactive public health.
              </p>
              <button className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-smooth">
                Explore Feed
              </button>
            </div>

            {/* Topic Filters */}
            <div className="space-y-3">
              <h3 className="text-heading text-textPrimary">Filter by Topics</h3>
              <div className="flex flex-wrap gap-2">
                {HEALTH_TOPICS.slice(0, 8).map((topic) => (
                  <TopicTag
                    key={topic}
                    topic={topic}
                    variant="selectable"
                    selected={selectedTopics.includes(topic)}
                    onToggle={handleTopicToggle}
                  />
                ))}
              </div>
            </div>

            {/* Feed Items */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-heading text-textPrimary">Latest Intelligence</h3>
                <span className="text-caption">
                  {filteredFeedItems.length} items
                </span>
              </div>
              {filteredFeedItems.length > 0 ? (
                filteredFeedItems.map((item) => (
                  <FeedCard
                    key={item.itemId}
                    item={item}
                    variant={item.type}
                    onItemClick={handleItemClick}
                  />
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-textSecondary">No items match your current filters.</p>
                </div>
              )}
            </div>
          </div>
        );

      case 'network':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-display text-textPrimary">Professional Network</h2>
              <button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Find Peers
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-heading text-textPrimary">Suggested Connections</h3>
              {filteredUsers.map((user) => (
                <ProfileCard
                  key={user.userId}
                  user={user}
                  variant="withStats"
                  onConnect={handleConnect}
                  onMessage={handleMessage}
                />
              ))}
            </div>
          </div>
        );

      case 'initiatives':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-display text-textPrimary">Initiative Toolkit</h2>
              <button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Create Custom
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-heading text-textPrimary">Available Templates</h3>
              {filteredTemplates.map((template) => (
                <InitiativeCard
                  key={template.templateId}
                  template={template}
                  variant="template"
                  onSelect={handleTemplateSelect}
                />
              ))}
            </div>
          </div>
        );

      case 'chat':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-display text-textPrimary mb-2">Expert Q&A</h2>
              <p className="text-body text-textSecondary">
                Get instant answers to your public health questions from our AI assistant.
              </p>
            </div>
            <ExpertChat />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AppShell>
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-textSecondary" />
          <input
            type="text"
            placeholder="Search intelligence, people, or initiatives..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {[
            { id: 'feed', label: 'Feed' },
            { id: 'network', label: 'Network' },
            { id: 'initiatives', label: 'Initiatives' },
            { id: 'chat', label: 'Expert Q&A' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-smooth ${
                activeTab === tab.id
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {renderContent()}
    </AppShell>
  );
}
