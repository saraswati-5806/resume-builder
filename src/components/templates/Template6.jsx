import React from 'react';
import { getOrderedSections, renderSectionByName } from '../resume/SectionBlocks';

export default function Template6(props) {
  const sidebarSections = getOrderedSections(
    props.containerOrder,
    ['Education', 'Skills', 'Languages', 'References']
  );

  const mainSections = getOrderedSections(
    props.containerOrder,
    ['Summary', 'Experience', 'Projects', 'Publications']
  );

  return (
    <div className="min-h-[297mm] bg-[#DDF0F0] grid grid-cols-[65%_35%] text-[#0C716D] relative">
      <main className="p-10 pt-20 space-y-9">
        <div>
          <h1 className="text-[30px] font-black uppercase">
            {props.profile.name}
          </h1>

          <p className="tracking-[0.35em] uppercase text-[15px]">
            {props.profile.title}
          </p>

          <div className="flex flex-wrap gap-5 text-[10px] mt-5">
            <p>✉ {props.profile.email}</p>
            <p>☎ {props.profile.phone}</p>
            <p>📍 {props.profile.address || '123 Anywhere St., Any City'}</p>
          </div>
        </div>

        {mainSections.map((section) =>
          renderSectionByName(section, props, {
            color: '#14716D',
            mode: 'inline'
          })
        )}
      </main>

      <aside className="bg-[#14716D] text-white p-10 pt-60 space-y-9">
        {props.profile.avatar && (
          <img
            src={props.profile.avatar}
            alt="profile"
            className="absolute top-[78px] right-[185px] w-40 h-40 rounded-full object-cover"
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
    </div>
  );
}