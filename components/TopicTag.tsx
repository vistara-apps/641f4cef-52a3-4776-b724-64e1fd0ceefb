'use client';

import { cn } from '@/lib/utils';
import { getTopicColor } from '@/lib/utils';
import { TopicTagProps } from '@/lib/types';

export function TopicTag({ 
  topic, 
  variant = 'display', 
  selected = false, 
  onToggle 
}: TopicTagProps) {
  const isSelectable = variant === 'selectable';
  
  const handleClick = () => {
    if (isSelectable && onToggle) {
      onToggle(topic);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!isSelectable}
      className={cn(
        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-smooth",
        isSelectable ? "cursor-pointer hover:opacity-80" : "cursor-default",
        isSelectable && selected 
          ? "bg-primary text-white" 
          : getTopicColor(topic)
      )}
    >
      {topic}
    </button>
  );
}
