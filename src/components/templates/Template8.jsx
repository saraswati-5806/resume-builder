import React from 'react';
import {
  getOrderedSections,
  renderSectionByName,
  sectionIcons
} from '../resume/SectionBlocks';

export default function Template8(props) {
  const sidebarSections = getOrderedSections(
    props.containerOrder,
    ['Contact', 'Address', 'Skills', 'Languages', 'References']
  );

  const mainSections = getOrderedSections(
    props.containerOrder,
    ['Summary', 'Experience', 'Projects', 'Education', 'Publications']
  );

  return (
    <div className="min-h-[297mm] bg-white text-[#3B3B3B] grid grid-cols-[34%_66%] relative overflow-hidden">
      <aside className="bg-[#3A3A38] text-white p-9 pt-64 space-y-8 relative">
        <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#F6C400] rotate-45" />

        {props.profile.avatar && (
          <img
            src={props.profile.avatar}
            alt="profile"
            className="absolute top-16 left-16 w-40 h-40 rounded-full object-cover border-[8px] border-white"
          />
        )}

        {sidebarSections.map((section) =>
          renderSectionByName(section, props, {
            color: '#F6C400',
            white: true,
            mode: 'sidebar',
            icons: section === 'Contact',
            icon: sectionIcons[section]
          })
        )}
      </aside>

      <main className="p-12 pt-24 space-y-7">
        <div>
          <h1 className="text-[36px] font-black uppercase leading-none">
            {props.profile.name}
          </h1>

          <p className="text-[18px] font-black uppercase">
            {props.profile.title}
          </p>
        </div>

        {mainSections.map((section) =>
          renderSectionByName(section, props, {
            color: '#3B3B3B',
            timeline: section === 'Experience',
            mode: 'inline',
            icon: sectionIcons[section],
            summaryTitle: section === 'Summary' ? 'Profile' : undefined,
            experienceTitle:
              section === 'Experience' ? 'Work Experience' : undefined
          })
        )}
      </main>
    </div>
  );
}