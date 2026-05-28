import React from 'react';
import { ALL_SECTIONS } from '../../data/defaultSections';

export default function AddSectionModal({ isOpen, activeSections, onAddSection, onClose }) {
  if (!isOpen) return null;
  const available = ALL_SECTIONS.filter(section => !activeSections.includes(section));
  return (
    <div className='fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4'>
      <div className='w-full max-w-md rounded-2xl bg-[#C5A496] border border-[#B39183] shadow-2xl p-5'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-lg font-black text-stone-900'>Add Resume Section</h2>
          <button onClick={onClose} className='w-8 h-8 rounded-lg bg-stone-900 text-white font-black'>×</button>
        </div>
        {available.length === 0 ? <p className='text-sm text-stone-800'>All sections are already added.</p> : (
          <div className='grid grid-cols-1 gap-2'>
            {available.map(section => <button key={section} onClick={() => { onAddSection(section); onClose(); }} className='text-left px-4 py-3 rounded-xl bg-white text-stone-900 font-bold text-sm hover:bg-stone-100'>+ {section}</button>)}
          </div>
        )}
      </div>
    </div>
  );
}
