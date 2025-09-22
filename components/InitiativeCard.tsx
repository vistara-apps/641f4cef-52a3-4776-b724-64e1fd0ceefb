'use client';

import Image from 'next/image';
import { Clock, Download, Users, ArrowRight } from 'lucide-react';
import { InitiativeTemplate, InitiativeCardProps } from '@/lib/types';
import { TopicTag } from './TopicTag';

export function InitiativeCard({ 
  template, 
  variant = 'template', 
  onSelect 
}: InitiativeCardProps) {
  const handleSelect = () => {
    onSelect?.(template);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Implement download functionality
    console.log('Download template:', template.templateId);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      className="card p-4 cursor-pointer"
      onClick={handleSelect}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(template.difficulty)}`}>
            {template.difficulty.charAt(0).toUpperCase() + template.difficulty.slice(1)}
          </span>
          <span className="text-caption">
            {template.category}
          </span>
        </div>
        <button
          onClick={handleDownload}
          className="p-1 rounded hover:bg-gray-100 transition-smooth"
          aria-label="Download template"
        >
          <Download className="w-4 h-4 text-textSecondary" />
        </button>
      </div>

      {/* Content */}
      <div className="flex gap-4">
        <div className="flex-1">
          <h3 className="text-heading text-textPrimary mb-2">
            {template.name}
          </h3>
          <p className="text-body text-textSecondary mb-3 line-clamp-2">
            {template.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {template.tags.slice(0, 2).map((tag) => (
              <TopicTag 
                key={tag} 
                topic={tag} 
                variant="display" 
              />
            ))}
            {template.tags.length > 2 && (
              <span className="text-caption">
                +{template.tags.length - 2} more
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-caption">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{template.estimatedTime}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-primary">
              <span className="text-sm font-medium">View Details</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Image */}
        {template.imageUrl && (
          <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
            <Image
              src={template.imageUrl}
              alt={template.name}
              width={96}
              height={96}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
