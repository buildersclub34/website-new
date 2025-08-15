'use client';

import NeoPopStickyButton from './ui/NeoPopStickyButton';

/**
 * StickyJoinButton - A wrapper around NeoPopStickyButton with default values
 * for joining the community.
 * 
 * @component
 * @example
 * <StickyJoinButton />
 */
const StickyJoinButton = () => {
  return (
    <NeoPopStickyButton 
      href="/circle"
      label="Join the Community"
      showAfterScroll={100}
      showNotificationDot={true}
    />
  );
};

export default StickyJoinButton;
