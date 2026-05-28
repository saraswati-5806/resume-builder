import React from 'react';
import { getOrderedSections, renderSectionByName } from '../resume/SectionBlocks';
import FooterRenderer from '../resume/FooterRenderer';

export default function Template3(props) {
  const sidebarSections = getOrderedSections(
    props.containerOrder,
    ['Summary', 'Skills', 'Languages', 'References', 'Awards']
  );

  const mainSections = getOrderedSections(
    props.containerOrder,
    [
      'Experience',
      'Education',
      'Projects',
      'Publications',
      'Address',
      'Contact'
    ]
  );

  return (
    <div className="min-h-[297mm] bg-[#F7F5EF] text-[#7B8372] grid grid-cols-[43%_57%] relative pb-[18mm]">
      <aside className="bg-[#9BA28F] text-white p-10 space-y-7">
        {props.profile.avatar && (
          <img
            src={props.profile.avatar}
            alt="profile"
            className="w-full h-[230px] object-cover"
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
        <div className="bg-[#E5E7DC] -mx-12 px-12 py-8">
          <h1 className="font-serif text-[44px] leading-none">
            {props.profile.name}
          </h1>

          <p className="uppercase tracking-[0.28em] text-[14px] mt-2">
            {props.profile.title}
          </p>
        </div>

        {mainSections.map((section) =>
          renderSectionByName(section, props, {
            color: '#7B8372',
            mode: 'inline'
          })
        )}
      </main>

      <FooterRenderer profile={props.profile} />
    </div>
  );
}