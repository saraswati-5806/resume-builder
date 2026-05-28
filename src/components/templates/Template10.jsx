import React from 'react';
import { getOrderedSections, renderSectionByName } from '../resume/SectionBlocks';

export default function Template10(props) {
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
    <div className="min-h-[297mm] bg-white text-black">
      <header className="bg-[#F4F5F6] min-h-[62mm] grid grid-cols-3 items-center px-16 py-8">
        <div>
          <h1 className="text-[32px] font-black uppercase leading-tight">
            {props.profile.name}
          </h1>

          <p className="text-[16px] mt-2">
            {props.profile.title}
          </p>
        </div>

        {props.profile.avatar && (
          <img
            src={props.profile.avatar}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover mx-auto"
          />
        )}

        <div className="text-right text-[12px] leading-7">
          <p>{props.profile.phone} ☎</p>
          <p>{props.profile.email} @</p>
          <p>{props.profile.address || '123 Anywhere St., Any City'} ⚲</p>
        </div>
      </header>

      <main className="p-14 space-y-7">
        {mainSections.map((section) =>
          renderSectionByName(section, props, {
            color: '#111',
            mode: 'inline'
          })
        )}
      </main>
    </div>
  );
}