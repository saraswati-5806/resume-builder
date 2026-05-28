import React from 'react';
import { getOrderedSections, renderSectionByName } from '../resume/SectionBlocks';

export default function Template12(props) {
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
    <div className="min-h-[297mm] bg-white text-[#2B2B2B] px-12 py-12 relative">
      <header className="grid grid-cols-[1fr_170px] gap-8 items-end">
        <div>
          <h1 className="text-[34px] font-black uppercase tracking-[0.13em] leading-tight">
            {props.profile.name}
          </h1>

          <p className="text-[18px] mt-1">
            {props.profile.title}
          </p>
        </div>

        {props.profile.avatar && (
          <img
            src={props.profile.avatar}
            alt="profile"
            className="w-[170px] h-[170px] object-cover grayscale"
          />
        )}
      </header>

      <div className="bg-[#E7E7E7] -mx-12 px-12 py-3 mt-5 text-[12px] flex flex-wrap gap-4">
        <span>{props.profile.phone}</span>
        <span>|</span>
        <span>{props.profile.email}</span>
        <span>|</span>
        <span>{props.profile.address || '123 Anywhere St., Any City'}</span>
      </div>

      <main className="mt-7 space-y-6">
        {mainSections.map((section) =>
          renderSectionByName(section, props, {
            color: '#2B2B2B',
            mode: 'inline',
            summaryTitle: 'Profile',
            experienceTitle: 'Work Experience',
            educationTitle: 'Education',
            skillsTitle: 'Skills'
          })
        )}
      </main>
    </div>
  );
}