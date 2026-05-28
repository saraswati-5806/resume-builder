import React from 'react';
export default function DynamicEditor({ children }) {
  return <div className='space-y-6 max-h-[88vh] overflow-y-auto pr-2 custom-scrollbar'>{children}</div>;
}
