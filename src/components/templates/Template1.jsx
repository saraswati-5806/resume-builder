import React from 'react';
import { getOrderedSections, renderSectionByName } from '../resume/SectionBlocks';

export default function Template1(props) {
  const sidebarSections = getOrderedSections(
    props.containerOrder,
    ['Contact', 'Address', 'Education', 'Skills', 'Languages']
  );

  const mainSections = getOrderedSections(
    props.containerOrder,
    ['Summary', 'Experience', 'Projects', 'Publications', 'References']
  );

  return (
    <div className="min-h-[297mm] bg-white text-[#4B5358]">
      <div className="min-h-[44mm] bg-[#474D51] text-white flex items-center px-16 py-8 gap-16">
        {props.profile.avatar && (
          <img
            src={props.profile.avatar}
            alt="profile"
            className="w-28 h-28 object-cover rounded-full"
          />
        )}

        <div>
          <h1 className="font-serif text-[30px] uppercase tracking-wide leading-none">
            {props.profile.name}
          </h1>

          <p className="font-serif text-[15px] mt-2">
            {props.profile.title}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[34%_66%] min-h-[253mm]">
        <aside className="bg-[#F6F6F6] px-8 py-7 space-y-6">
          {sidebarSections.map((section) =>
            renderSectionByName(section, props, {
              color: '#4B5358',
              mode: 'sidebar'
            })
          )}
        </aside>

        <main className="px-9 py-7 space-y-5">
          {mainSections.map((section) =>
            renderSectionByName(section, props, {
              color: '#4B5358',
              mode: 'inline'
            })
          )}
        </main>
      </div>
    </div>
  );
}