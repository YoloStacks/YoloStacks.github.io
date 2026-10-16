import React from 'react';

export const SkipToContent: React.FC = () => {
  return (
    <a href="#main-content" className="skip-to-content">
      Skip to content
    </a>
  );
};

export const LiveAnnouncements: React.FC = () => {
  return (
    <div
      id="sr-announcements"
      className="sr-only"
      aria-live="polite"
      aria-atomic="true"
    />
  );
};
