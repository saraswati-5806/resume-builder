import React from 'react';
import { getOrderedSections, renderSectionByName } from '../resume/SectionBlocks';

export default function Template11(props) {
  const mainSections = getOrderedSections(
    props.containerOrder,
    [
      'Summary',
      'Experience',
      'Education',
      'Projects',
      'Publications',
      'Skills',
      'Languages',
      'References',
      'Address'
    ]
  );

  return (
    <div className="min-h-[297mm] bg-white text-[#222]">
      <header className="bg-[#0B55B6] text-white text-center py-9">
        <h1 className="text-[34px] font-black uppercase tracking-wide">
          {props.profile.name}
        </h1>

        <p className="text-[15px] font-semibold">
          {props.profile.title}
        </p>
      </header>

      <div className="text-center py-5 text-[13px] text-[#555]">
        {props.profile.email} | {props.profile.phone} |{' '}
        {props.profile.address || '123 Anywhere St., Any City'}
      </div>

      <main className="px-16 space-y-7">
        {mainSections.map((section) =>
          renderSectionByName(section, props, {
            color: '#0B55B6',
            mode: 'inline',
            summaryTitle: 'Summary',
            experienceTitle: 'Work Experience',
            skillsTitle: 'Key Skills'
          })
        )}
      </main>
    </div>
  );
}