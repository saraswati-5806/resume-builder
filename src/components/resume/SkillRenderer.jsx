import React from 'react';
export const splitSkills = (skills) => String(skills || '').split(',').map(s => s.trim()).filter(Boolean);
export default function SkillRenderer({ skills, mode='sidebar', white=false, color='#333', bars=false }) {
  const items = splitSkills(skills);
  if (mode === 'inline') return <p className={`text-[9.5px] leading-[1.7] ${white ? 'text-white/90' : 'text-slate-700'}`}>{items.join(' • ')}</p>;
  return <div className='space-y-1.5'>{items.map((skill,index)=><div key={skill+index} className={bars?'grid grid-cols-[1fr_70px] gap-3 items-center':''}><p className={`text-[9px] leading-4 ${white?'text-white':'text-slate-700'}`}>{!bars && <span className='mr-1.5'>•</span>}{skill}</p>{bars && <div className='h-1.5 rounded bg-slate-300 overflow-hidden'><div className='h-full rounded' style={{width:`${85-(index%3)*10}%`,backgroundColor:color}} /></div>}</div>)}</div>;
}
