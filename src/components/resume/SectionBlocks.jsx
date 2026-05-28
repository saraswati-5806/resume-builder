import React from 'react';
import { contactIcons, sectionIcons } from './ContactIcons';
import SkillRenderer from './SkillRenderer';
import TimelineRenderer, { TimelineDot } from './TimelineRenderer';

export const getOrderedSections = (containerOrder, allowedSections) => {
  const dynamicSections = [
    'Contact',
    'Address',
    'Summary',
    'Experience',
    'Education',
    'Projects',
    'Publications',
    'Skills',
    'Languages',
    'References',
    'Awards'
  ];

  const safeOrder = Array.isArray(containerOrder) ? containerOrder : dynamicSections;

  return safeOrder.filter((section) => allowedSections.includes(section));
};

export function SectionTitle({ title, color = '#333', icon = null, className = '' }) {
  return (
    <div className={`pdf-avoid-break ${className}`}>
      <div className="flex items-center gap-2">
        {icon && <span style={{ color }}>{icon}</span>}
        <h3 className="font-black uppercase tracking-[0.18em]" style={{ color }}>
          {title}
        </h3>
      </div>
      <div className="mt-2 h-px w-full" style={{ backgroundColor: color, opacity: 0.35 }} />
    </div>
  );
}

export function ContactBlock({
  profile,
  color = '#333',
  white = false,
  icons = false,
  horizontal = false,
  showAddress = true
}) {
  const textColor = white ? 'text-white/90' : 'text-slate-700';

  const Item = ({ icon, children }) => (
    <p className={`text-[9.5px] leading-5 ${textColor} break-words ${icons ? 'flex items-start gap-2' : ''}`}>
      {icons && <span className="pt-0.5" style={{ color }}>{icon}</span>}
      <span>{children}</span>
    </p>
  );

  return (
    <div className="resume-section pdf-avoid-break">
      {!horizontal && <SectionTitle title="Contact" color={color} className="text-[15px] mb-3" />}

      <div className={horizontal ? 'flex flex-wrap gap-x-4 gap-y-1 items-center' : 'space-y-1.5'}>
        <Item icon={contactIcons.phone}>{profile.phone}</Item>
        <Item icon={contactIcons.email}>{profile.email}</Item>
        <Item icon={contactIcons.website}>www.reallygreatsite.com</Item>
        {showAddress && (
          <Item icon={contactIcons.location}>
            {profile.address || '123 Anywhere St., Any City'}
          </Item>
        )}
      </div>
    </div>
  );
}

export function AddressBlock({ profile, color = '#333', white = false, icon = null }) {
  return (
    <div className="resume-section pdf-avoid-break">
      <SectionTitle title="Address" color={color} icon={icon} className="text-[15px] mb-3" />
      <p className={`text-[10px] ${white ? 'text-white/90' : 'text-slate-700'}`}>
        {profile.address || '123 Anywhere St., Any City'}
      </p>
    </div>
  );
}

export function SummaryBlock({ profile, color = '#333', white = false, title = 'About Me', icon = null }) {
  return (
    <div className="resume-section pdf-avoid-break">
      <SectionTitle title={title} color={color} icon={icon} className="text-[15px] mb-3" />
      <p className={`text-[9.5px] leading-[1.55] ${white ? 'text-white/90' : 'text-slate-700'} text-justify`}>
        {profile.abstract}
      </p>
    </div>
  );
}

export function ExperienceBlock({ jobs = [], color = '#333', white = false, title = 'Experience', timeline = false, icon = null }) {
  return (
    <div className="resume-section pdf-avoid-break">
      <SectionTitle title={title} color={color} icon={icon} className="text-[15px] mb-4" />

      <TimelineRenderer color={color} enabled={timeline}>
        {jobs.map((job) => (
          <div key={job.id} className="relative pdf-avoid-break">
            {timeline && <TimelineDot color={color} />}

            <div className="flex justify-between gap-4">
              <div>
                <p className={`${white ? 'text-white' : 'text-slate-800'} font-black text-[10.5px] leading-tight`}>
                  {job.role}
                </p>
                <p className={`${white ? 'text-white/85' : 'text-slate-600'} text-[9.5px] font-medium`}>
                  {job.company}
                </p>
              </div>

              <p className={`${white ? 'text-white/80' : 'text-slate-500'} text-[9px] whitespace-nowrap`}>
                {job.duration}
              </p>
            </div>

            <p className={`${white ? 'text-white/85' : 'text-slate-600'} text-[9px] leading-[1.5] mt-1.5 text-justify`}>
              {job.desc}
            </p>
          </div>
        ))}
      </TimelineRenderer>
    </div>
  );
}

export function EducationBlock({ education = [], color = '#333', white = false, title = 'Education', icon = null }) {
  return (
    <div className="resume-section pdf-avoid-break">
      <SectionTitle title={title} color={color} icon={icon} className="text-[15px] mb-3" />

      <div className="space-y-3">
        {education.map((edu) => (
          <div key={edu.id}>
            <p className={`${white ? 'text-white/80' : 'text-slate-500'} text-[9px]`}>
              {edu.duration}
            </p>
            <p className={`${white ? 'text-white' : 'text-slate-800'} text-[10px] font-black leading-tight`}>
              {edu.degree}
            </p>
            <p className={`${white ? 'text-white/80' : 'text-slate-600'} text-[9.5px] leading-tight`}>
              {edu.school}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsBlock({ skills = '', color = '#333', white = false, title = 'Skills', icon = null, mode = 'sidebar', bars = false }) {
  return (
    <div className="resume-section pdf-avoid-break">
      <SectionTitle title={title} color={color} icon={icon} className="text-[15px] mb-3" />
      <SkillRenderer skills={skills} mode={mode} white={white} color={color} bars={bars} />
    </div>
  );
}

export function ProjectsBlock({ projects = [], color = '#333', white = false, title = 'Projects', icon = null }) {
  return (
    <div className="resume-section pdf-avoid-break">
      <SectionTitle title={title} color={color} icon={icon} className="text-[15px] mb-4" />

      <div className="space-y-3.5">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="flex justify-between gap-4">
              <div>
                <p className={`${white ? 'text-white' : 'text-slate-800'} font-black text-[10.5px] leading-tight`}>
                  {project.name}
                </p>
                <p className={`${white ? 'text-white/85' : 'text-slate-600'} text-[9.5px] font-medium`}>
                  {project.role}
                </p>
              </div>
              <p className={`${white ? 'text-white/80' : 'text-slate-500'} text-[9px] whitespace-nowrap`}>
                {project.duration}
              </p>
            </div>

            <p className={`${white ? 'text-white/85' : 'text-slate-600'} text-[9px] leading-[1.5] mt-1 text-justify`}>
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PublicationsBlock({ publications = [], color = '#333', white = false, title = 'Publications', icon = null }) {
  return (
    <div className="resume-section pdf-avoid-break">
      <SectionTitle title={title} color={color} icon={icon} className="text-[15px] mb-4" />

      <div className="space-y-3">
        {publications.map((publication) => (
          <div key={publication.id}>
            <div className="flex justify-between gap-4">
              <div>
                <p className={`${white ? 'text-white' : 'text-slate-800'} font-black text-[10.5px] leading-tight`}>
                  {publication.title}
                </p>
                <p className={`${white ? 'text-white/85' : 'text-slate-600'} text-[9.5px] font-medium`}>
                  {publication.publisher}
                </p>
              </div>
              <p className={`${white ? 'text-white/80' : 'text-slate-500'} text-[9px] whitespace-nowrap`}>
                {publication.year}
              </p>
            </div>

            <p className={`${white ? 'text-white/85' : 'text-slate-600'} text-[9px] leading-[1.5] mt-1 text-justify`}>
              {publication.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LanguagesBlock({ languages = [], color = '#333', white = false, icon = null }) {
  return (
    <div className="resume-section pdf-avoid-break">
      <SectionTitle title="Languages" color={color} icon={icon} className="text-[15px] mb-3" />

      <div className="space-y-1">
        {languages.map((language, index) => (
          <p key={index} className={`text-[10px] ${white ? 'text-white/90' : 'text-slate-700'}`}>
            • {language}
          </p>
        ))}
      </div>
    </div>
  );
}

export function ReferencesBlock({ references = [], color = '#333', white = false, icon = null }) {
  return (
    <div className="resume-section pdf-avoid-break">
      <SectionTitle title="References" color={color} icon={icon} className="text-[15px] mb-3" />

      <div className={`grid grid-cols-2 gap-6 text-[9px] leading-4 ${white ? 'text-white/90' : 'text-slate-700'}`}>
        {references.map((ref, index) => (
          <div key={index}>
            <p className="font-bold">{ref.name}</p>
            <p>{ref.position}</p>
            <p>{ref.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AwardsBlock({ color = '#333', white = false, icon = null }) {
  return (
    <div className="resume-section pdf-avoid-break">
      <SectionTitle title="Awards" color={color} icon={icon} className="text-[15px] mb-3" />

      <div className={`space-y-2 text-[10px] ${white ? 'text-white/90' : 'text-slate-700'}`}>
        <p>• Most Outstanding Employee of the Year</p>
        <p>• Best Project / Academic Achievement</p>
      </div>
    </div>
  );
}

export function renderSectionByName(sectionName, props, options = {}) {
  
  if (sectionName === 'Contact') {
    return (
      <ContactBlock
        key={sectionName}
        profile={props.profile}
        showAddress={props.containerOrder?.includes('Address')}
        {...options}
        
      />
    );
  }

  if (sectionName === 'Address') {
    return null;
  }

  if (sectionName === 'Summary') {
    return (
      <SummaryBlock
        key={sectionName}
        profile={props.profile}
        title={options.summaryTitle || options.title || 'About Me'}
        {...options}
      />
    );
  }

  if (sectionName === 'Experience') {
    return (
      <ExperienceBlock
        key={sectionName}
        jobs={props.jobs}
        title={options.experienceTitle || options.title || 'Experience'}
        {...options}
      />
    );
  }

  if (sectionName === 'Education') {
    return (
      <EducationBlock
        key={sectionName}
        education={props.education}
        title={options.educationTitle || options.title || 'Education'}
        {...options}
      />
    );
  }

  if (sectionName === 'Skills') {
    return (
      <SkillsBlock
        key={sectionName}
        skills={props.skills}
        title={options.skillsTitle || options.title || 'Skills'}
        {...options}
      />
    );
  }

  if (sectionName === 'Projects') {
    return <ProjectsBlock key={sectionName} projects={props.projects} {...options} />;
  }

  if (sectionName === 'Publications') {
    return <PublicationsBlock key={sectionName} publications={props.publications} {...options} />;
  }

  if (sectionName === 'Languages') {
    return <LanguagesBlock key={sectionName} languages={props.languages || []} {...options} />;
  }

  if (sectionName === 'References') {
    return <ReferencesBlock key={sectionName} references={props.references || []} {...options} />;
  }

  if (sectionName === 'Awards') {
    return <AwardsBlock key={sectionName} {...options} />;
  }

  return null;
}

export { sectionIcons };