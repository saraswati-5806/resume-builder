import React from 'react';
import { getOrderedSections, renderSectionByName } from '../resume/SectionBlocks';

export default function Template7(props) {
  const mainSections = getOrderedSections(
    props.containerOrder,
    [
      'Summary',
      'Education',
      'Experience',
      'Projects',
      'Publications',
      'Skills',
      'Languages',
      'References'
    ]
  );

  return (
    <div className="min-h-[297mm] bg-white text-[#2B2B2B] px-20 py-16">
      <header className="text-center">
        <h1 className="text-[34px] font-black uppercase tracking-[0.08em] leading-tight">
          {props.profile.name}
        </h1>

        <p className="text-[18px] mt-1">
          {props.profile.title}
        </p>
      </header>

      <div className="flex justify-center items-center gap-6 text-[11px] py-3 mt-3 border-b-2 border-[#555]">
        <span>☎ {props.profile.phone}</span>
        <span>✉ {props.profile.email}</span>
        <span>📍 {props.profile.address || '123 Anywhere St., Any City'}</span>
      </div>

      <main className="space-y-6 mt-7">
        {mainSections.map((section) =>
          renderSectionByName(section, props, {
            color: '#2B2B2B',
            mode: section === 'Skills' ? 'inline' : 'inline'
          })
        )}
      </main>

      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#555]" />
    </div>
  );
}