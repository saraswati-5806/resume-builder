import React from 'react';
import { contactIcons } from './ContactIcons';
export default function FooterRenderer({ profile, color='#7B8372', background='#EEF1E8' }) {
  return <footer className='absolute bottom-0 left-0 right-0 min-h-[18mm] flex items-center justify-around text-[10px] py-3' style={{color, backgroundColor:background}}>
    <span className='flex items-center gap-2'>{contactIcons.phone} {profile.phone}</span>
    <span className='flex items-center gap-2'>{contactIcons.email} {profile.email}</span>
    <span className='flex items-center gap-2'>{contactIcons.website} reallygreatsite.com</span>
  </footer>;
}
