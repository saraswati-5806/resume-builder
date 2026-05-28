import React from 'react';
export default function TimelineRenderer({ children, color='#333', enabled=false }) {
  if (!enabled) return <div className='space-y-4'>{children}</div>;
  return <div className='relative pl-6 space-y-4 border-l-2' style={{borderColor:color}}>{children}</div>;
}
export function TimelineDot({ color='#333' }) {
  return <span className='absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-white border-2' style={{borderColor:color}} />;
}
