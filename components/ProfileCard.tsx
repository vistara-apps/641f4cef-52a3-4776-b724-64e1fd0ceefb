'use client';

import Image from 'next/image';
import { MapPin, Users, MessageCircle, UserPlus } from 'lucide-react';
import { User, ProfileCardProps } from '@/lib/types';
import { formatNumber, getInitials, getSubscriptionTierColor } from '@/lib/utils';
import { TopicTag } from './TopicTag';
import { NetworkButton } from './NetworkButton';

export function ProfileCard({ 
  user, 
  variant = 'basic', 
  onConnect, 
  onMessage 
}: ProfileCardProps) {
  const handleConnect = () => {
    onConnect?.(user.userId);
  };

  const handleMessage = () => {
    onMessage?.(user.userId);
  };

  const showStats = variant === 'withStats';

  return (
    <div className="card p-4">
      {/* Header */}
      <div className="flex items-start space-x-3 mb-3">
        <div className="relative">
          {user.avatar ? (
            <Image
              src={user.avatar}
              alt={user.displayName}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">
                {getInitials(user.displayName)}
              </span>
            </div>
          )}
          {/* Subscription tier indicator */}
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
            user.subscriptionTier === 'pro' ? 'bg-blue-500' :
            user.subscriptionTier === 'agency' ? 'bg-purple-500' :
            'bg-gray-400'
          }`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="text-heading text-textPrimary truncate">
              {user.displayName}
            </h3>
            <span className={`text-sm font-medium ${getSubscriptionTierColor(user.subscriptionTier)}`}>
              {user.subscriptionTier.charAt(0).toUpperCase() + user.subscriptionTier.slice(1)}
            </span>
          </div>
          <p className="text-caption truncate">
            {user.handle}
          </p>
          {user.location && (
            <div className="flex items-center space-x-1 mt-1">
              <MapPin className="w-3 h-3 text-textSecondary" />
              <span className="text-caption">
                {user.location}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Bio */}
      <p className="text-body text-textSecondary mb-3 line-clamp-2">
        {user.bio}
      </p>

      {/* Interests/Expertise */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {(user.expertise || user.interests).slice(0, 3).map((item) => (
            <TopicTag 
              key={item} 
              topic={item} 
              variant="display" 
            />
          ))}
          {(user.expertise || user.interests).length > 3 && (
            <span className="text-caption">
              +{(user.expertise || user.interests).length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Stats */}
      {showStats && user.connections && (
        <div className="flex items-center space-x-4 mb-4 text-caption">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{formatNumber(user.connections)} connections</span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex space-x-2">
        <NetworkButton
          variant="connect"
          onClick={handleConnect}
        />
        <NetworkButton
          variant="message"
          onClick={handleMessage}
        />
      </div>
    </div>
  );
}
