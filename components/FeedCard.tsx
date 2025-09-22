'use client';

import Image from 'next/image';
import { Clock, ExternalLink, Bookmark, Share2 } from 'lucide-react';
import { IntelligenceItem, FeedCardProps } from '@/lib/types';
import { formatDate, formatReadTime, truncateText } from '@/lib/utils';
import { TYPE_COLORS, PRIORITY_COLORS } from '@/lib/constants';
import { TopicTag } from './TopicTag';

export function FeedCard({ item, variant = 'news', onItemClick }: FeedCardProps) {
  const handleClick = () => {
    onItemClick?.(item);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Implement bookmark functionality
    console.log('Bookmark item:', item.itemId);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Implement share functionality
    console.log('Share item:', item.itemId);
  };

  const handleExternalLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(item.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <article 
      className={`card p-4 cursor-pointer border-l-4 ${PRIORITY_COLORS[item.priority || 'low']}`}
      onClick={handleClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${TYPE_COLORS[item.type]}`}>
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </span>
          <span className="text-caption">
            {item.source}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={handleBookmark}
            className="p-1 rounded hover:bg-gray-100 transition-smooth"
            aria-label="Bookmark article"
          >
            <Bookmark className="w-4 h-4 text-textSecondary" />
          </button>
          <button
            onClick={handleShare}
            className="p-1 rounded hover:bg-gray-100 transition-smooth"
            aria-label="Share article"
          >
            <Share2 className="w-4 h-4 text-textSecondary" />
          </button>
          <button
            onClick={handleExternalLink}
            className="p-1 rounded hover:bg-gray-100 transition-smooth"
            aria-label="Open in new tab"
          >
            <ExternalLink className="w-4 h-4 text-textSecondary" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-4">
        <div className="flex-1">
          <h3 className="text-heading text-textPrimary mb-2 line-clamp-2">
            {item.title}
          </h3>
          <p className="text-body text-textSecondary mb-3 line-clamp-3">
            {truncateText(item.summary, 150)}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {item.tags.slice(0, 3).map((tag) => (
              <TopicTag 
                key={tag} 
                topic={tag} 
                variant="display" 
              />
            ))}
            {item.tags.length > 3 && (
              <span className="text-caption">
                +{item.tags.length - 3} more
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-caption">
            <div className="flex items-center space-x-4">
              <span>{formatDate(item.publishedDate)}</span>
              {item.readTime && (
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{formatReadTime(item.readTime)}</span>
                </div>
              )}
            </div>
            {item.priority === 'high' && (
              <span className="text-red-600 font-medium text-xs">
                High Priority
              </span>
            )}
          </div>
        </div>

        {/* Image */}
        {item.imageUrl && (
          <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={96}
              height={96}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </article>
  );
}
