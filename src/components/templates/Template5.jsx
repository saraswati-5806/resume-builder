import React from 'react';
import { getOrderedSections, renderSectionByName } from '../resume/SectionBlocks';

export default function Template5(props) {
  const sidebarSections = getOrderedSections(
    props.containerOrder,
    ['Contact', 'Address', 'Skills', 'Education', 'Languages']
  );

  const mainSections = getOrderedSections(
    props.containerOrder,
    ['Summary', 'Experience', 'Projects', 'Publications', 'References']
  );

  return (
    <div className="min-h-[297mm] grid grid-cols-[35%_65%] bg-[#777774] text-white relative overflow-hidden">
      <aside className="bg-[#F5E5D4] text-[#5F5A55] p-10 space-y-7">
        {props.profile.avatar && (
          <img
            src={props.profile.avatar}
            alt="profile"
            className="w-40 h-40 rounded-full object-cover mx-auto"
          />
        )}

        {sidebarSections.map((section) =>
          renderSectionByName(section, props, {
            color: '#5F5A55',
            mode: 'sidebar',
            icons: section === 'Contact'
          })
        )}
      </aside>

      <main className="p-12 space-y-7">
        <div className="absolute -right-12 -top-12 w-36 h-36 rounded-full border-2 border-[#F5E5D4]" />

        <h1 className="font-serif text-[30px] uppercase leading-none mt-8">
          {props.profile.name}
        </h1>

        <p className="font-serif text-[13px]">
          {props.profile.title}
        </p>

        {mainSections.map((section) =>
          renderSectionByName(section, props, {
            color: 'white',
            white: true,
            mode: 'inline'
          })
        )}
      </main>
    </div>
  );
}