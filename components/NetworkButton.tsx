'use client';

import { UserPlus, MessageCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NetworkButtonProps } from '@/lib/types';

export function NetworkButton({ 
  variant, 
  onClick, 
  disabled = false, 
  loading = false 
}: NetworkButtonProps) {
  const isConnect = variant === 'connect';
  const Icon = isConnect ? UserPlus : MessageCircle;

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-smooth",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        isConnect
          ? "btn-primary"
          : "btn-secondary"
      )}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Icon className="w-4 h-4" />
      )}
      <span>
        {isConnect ? 'Connect' : 'Message'}
      </span>
    </button>
  );
}
