import React from 'react';
import { getOrderedSections, renderSectionByName } from '../resume/SectionBlocks';

export default function Template4(props) {
  const mainSections = getOrderedSections(
    props.containerOrder,
    [
      'Summary',
      'Experience',
      'Education',
      'Projects',
      'Publications',
      'Skills',
      'Address',
      'Languages',
      'References'
    ]
  );

  return (
    <div className="min-h-[297mm] bg-white text-[#111] p-12">
      <header className="grid grid-cols-[130px_1fr_240px] gap-8 items-center border-b border-[#9BC5D8] pb-6">
        {props.profile.avatar && (
          <img
            src={props.profile.avatar}
            alt="profile"
            className="w-[120px] h-[120px] object-cover"
          />
        )}

        <div>
          <h1 className="text-[28px] uppercase tracking-[0.12em]">
            {props.profile.name}
          </h1>

          <p className="text-[18px] mt-2">
            {props.profile.title}
          </p>
        </div>

        <div className="border-l border-[#9BC5D8] pl-6 text-[10px] leading-6">
          <p>Mail: {props.profile.email}</p>
          <p>Phone: {props.profile.phone}</p>
          <p>Website: reallygreatsite.com</p>
          <p>Address: {props.profile.address || '123 Anywhere St., Any City'}</p>
        </div>
      </header>

      <main className="space-y-5 mt-5">
        {mainSections.map((section) =>
          renderSectionByName(section, props, {
            color: '#111',
            mode: 'inline',
            summaryTitle: 'Professional Profile',
            experienceTitle: 'Work Experience',
            educationTitle: 'Vocational Training',
            skillsTitle: 'Outstanding Skills'
          })
        )}
      </main>
    </div>
  );
}