import React from 'react';
import { getOrderedSections, renderSectionByName } from '../resume/SectionBlocks';

export default function Template2(props) {
  const sidebarSections = getOrderedSections(
    props.containerOrder,
    ['Summary', 'Education', 'Skills', 'Languages']
  );

  const mainSections = getOrderedSections(
    props.containerOrder,
    ['Contact', 'Address', 'Experience', 'Projects', 'Publications', 'References']
  );

  return (
    <div className="min-h-[297mm] bg-white text-[#444] grid grid-cols-[36%_64%] relative">
      <aside className="bg-[#E6E7E4] p-10 pt-72 space-y-8">
        {props.profile.avatar && (
          <img
            src={props.profile.avatar}
            alt="profile"
            className="absolute top-10 left-12 w-44 h-44 rounded-full object-cover border-[10px] border-white z-20"
          />
        )}

        {sidebarSections.map((section) =>
          renderSectionByName(section, props, {
            color: '#24242C',
            mode: 'sidebar',
            bars: section === 'Skills'
          })
        )}
      </aside>

      <main className="p-10 pt-56 space-y-7">
        <div className="absolute top-[52px] left-[190px] right-0 bg-[#24242C] text-white min-h-[85px] flex flex-col justify-center pl-28 py-4">
          <h1 className="text-[34px] font-black uppercase tracking-[0.2em] leading-none">
            {props.profile.name}
          </h1>

          <p className="tracking-[0.35em] text-[16px] mt-2">
            {props.profile.title}
          </p>
        </div>

        {mainSections.map((section) =>
          renderSectionByName(section, props, {
            color: '#24242C',
            timeline: section === 'Experience',
            icons: section === 'Contact',
            horizontal: section === 'Contact',
            mode: 'inline'
          })
        )}
      </main>
    </div>
  );
}