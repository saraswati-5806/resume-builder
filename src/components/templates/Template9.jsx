import React from 'react';
import { getOrderedSections, renderSectionByName } from '../resume/SectionBlocks';

export default function Template9(props) {
  const sidebarSections = getOrderedSections(
    props.containerOrder,
    ['Contact', 'Address', 'Education', 'Skills', 'Languages']
  );

  const mainSections = getOrderedSections(
    props.containerOrder,
    ['Summary', 'Experience', 'Projects', 'Publications', 'References']
  );

  return (
    <div className="min-h-[297mm] grid grid-cols-[35%_65%] bg-white text-[#2F3B4F]">
      <aside className="bg-[#2F3B4F] text-white p-10 space-y-8">
        {props.profile.avatar && (
          <img
            src={props.profile.avatar}
            alt="profile"
            className="w-40 h-40 rounded-full object-cover mx-auto"
          />
        )}

        {sidebarSections.map((section) =>
          renderSectionByName(section, props, {
            color: 'white',
            white: true,
            mode: 'sidebar'
          })
        )}
      </aside>

      <main className="p-12 space-y-7">
        <div>
          <h1 className="text-[38px] font-black tracking-[0.12em]">
            {props.profile.name}
          </h1>

          <p className="text-[22px] tracking-[0.3em] mt-2">
            {props.profile.title}
          </p>
        </div>

        {mainSections.map((section) =>
          renderSectionByName(section, props, {
            color: '#2F3B4F',
            timeline: section === 'Experience',
            mode: 'inline'
          })
        )}
      </main>
    </div>
  );
}