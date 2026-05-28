import React from 'react';
import TemplateRenderer from './TemplateRenderer';

export default function ResumePreview(props) {
  return (
    <div
      ref={props.resumePrintContainerRef}
      data-pdf-root="true"
      className="
        w-[210mm]
        min-h-[297mm]
        bg-white
        relative
        overflow-hidden
        shadow-2xl
      "
      style={{
        color: '#1e1e24',
        fontFamily: 'DM Sans, system-ui, sans-serif'
      }}
    >
      <TemplateRenderer {...props} />
    </div>
  );
}