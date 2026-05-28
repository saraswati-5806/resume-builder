import React from 'react';
import SectionManager from './SectionManager';

export default function EditorPanel({
  config,
  profile,
  setProfile,
  jobs,
  setJobs,
  education,
  setEducation,
  projects,
  setProjects,
  publications,
  setPublications,
  skills,
  setSkills,
  languages = [],
  setLanguages,
  references = [],
  setReferences,
  containerOrder,
  setContainerOrder,
  shiftOrderPosition,
  handlePhotoUpload,
  handlePdfDownload,
  setCurrentPage,
  layoutPreset
}) {
  const cardStyle = {
    backgroundColor: '#C5A496',
    borderColor: config.accent
  };

  const input =
    'p-2 bg-white text-xs rounded text-stone-900 border border-stone-300';

  const del =
    'absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-red-500 text-white font-black text-sm shadow-md hover:bg-red-600 disabled:opacity-40 disabled:cursor-not-allowed';

  const rowBtn =
    'px-3 py-2 rounded bg-stone-800 text-white text-xs font-bold hover:bg-stone-700 cursor-pointer';

  const sectionHead = (icon, title) => (
    <div className="flex justify-between items-center border-b border-stone-400/40 pb-1">
      <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">
        {icon} {title}
      </h3>
      <span className="text-[10px] text-white bg-stone-800 px-2 py-0.5 rounded font-mono">
        Position: Dynamic
      </span>
    </div>
  );

  const render = (name) => {
    if (name === 'Summary') {
      return (
        <div key="Summary" className="p-5 rounded-xl border shadow-md space-y-2" style={cardStyle}>
          {sectionHead('📝', 'Summary Narrative Block')}
          <label className="block text-xs text-stone-900 font-medium">Executive Abstract</label>
          <textarea
            rows={3}
            value={profile.abstract}
            onChange={(e) => setProfile({ ...profile, abstract: e.target.value })}
            className="w-full p-2.5 rounded text-sm bg-white text-stone-900 border border-stone-400 resize-none"
          />
        </div>
      );
    }

    if (name === 'Experience') {
      return (
        <div key="Experience" className="p-5 rounded-xl border shadow-md space-y-4" style={cardStyle}>
          {sectionHead('💼', 'Experience Chronicles')}

          {jobs.map((job, idx) => (
            <div key={job.id} className="p-3 rounded border space-y-2 bg-white border-stone-400 relative">
              <button onClick={() => setJobs(jobs.filter((x) => x.id !== job.id))} disabled={jobs.length === 1} className={del}>
                🗑
              </button>

              <div className="grid grid-cols-2 gap-2 pr-6">
                <input value={job.company} onChange={(e) => { const n = [...jobs]; n[idx].company = e.target.value; setJobs(n); }} className={input} placeholder="Institution" />
                <input value={job.role} onChange={(e) => { const n = [...jobs]; n[idx].role = e.target.value; setJobs(n); }} className={input} placeholder="Role Assigned" />
              </div>

              <input value={job.duration} onChange={(e) => { const n = [...jobs]; n[idx].duration = e.target.value; setJobs(n); }} className={`${input} w-full`} placeholder="Timeline Tenure" />

              <textarea rows={2} value={job.desc} onChange={(e) => { const n = [...jobs]; n[idx].desc = e.target.value; setJobs(n); }} className={`${input} w-full resize-none`} placeholder="Description" />
            </div>
          ))}

          <button onClick={() => setJobs([...jobs, { id: Date.now(), company: 'New Company', role: 'New Role', duration: '2025 - Present', desc: 'Describe your responsibilities and measurable impact.' }])} className={rowBtn}>
            + Add Experience
          </button>
        </div>
      );
    }

    if (name === 'Education') {
      return (
        <div key="Education" className="p-5 rounded-xl border shadow-md space-y-4" style={cardStyle}>
          {sectionHead('🎓', 'Academic Ledger')}

          {education.map((edu, idx) => (
            <div key={edu.id} className="p-3 rounded border space-y-2 bg-white border-stone-400 relative">
              <button onClick={() => setEducation(education.filter((x) => x.id !== edu.id))} disabled={education.length === 1} className={del}>
                🗑
              </button>

              <div className="grid grid-cols-2 gap-2 pr-6">
                <input value={edu.school} onChange={(e) => { const n = [...education]; n[idx].school = e.target.value; setEducation(n); }} className={input} placeholder="Academy" />
                <input value={edu.degree} onChange={(e) => { const n = [...education]; n[idx].degree = e.target.value; setEducation(n); }} className={input} placeholder="Degree" />
              </div>

              <input value={edu.duration} onChange={(e) => { const n = [...education]; n[idx].duration = e.target.value; setEducation(n); }} className={`${input} w-full`} placeholder="Years" />
            </div>
          ))}

          <button onClick={() => setEducation([...education, { id: Date.now(), school: 'New School / University', degree: 'New Degree / Certificate', duration: '2021 - 2025' }])} className={rowBtn}>
            + Add Education
          </button>
        </div>
      );
    }

    if (name === 'Projects') {
      return (
        <div key="Projects" className="p-5 rounded-xl border shadow-md space-y-4" style={cardStyle}>
          {sectionHead('🚀', 'Project Portfolio')}

          {projects.map((p, idx) => (
            <div key={p.id} className="p-3 rounded border space-y-2 bg-white border-stone-400 relative">
              <button onClick={() => setProjects(projects.filter((x) => x.id !== p.id))} disabled={projects.length === 1} className={del}>
                🗑
              </button>

              <div className="grid grid-cols-2 gap-2 pr-6">
                <input value={p.name} onChange={(e) => { const n = [...projects]; n[idx].name = e.target.value; setProjects(n); }} className={input} placeholder="Project Name" />
                <input value={p.role} onChange={(e) => { const n = [...projects]; n[idx].role = e.target.value; setProjects(n); }} className={input} placeholder="Role" />
              </div>

              <input value={p.duration} onChange={(e) => { const n = [...projects]; n[idx].duration = e.target.value; setProjects(n); }} className={`${input} w-full`} placeholder="Timeline" />

              <textarea rows={2} value={p.desc} onChange={(e) => { const n = [...projects]; n[idx].desc = e.target.value; setProjects(n); }} className={`${input} w-full resize-none`} placeholder="Project description" />
            </div>
          ))}

          <button onClick={() => setProjects([...projects, { id: Date.now(), name: 'New Project', role: 'Project Role', duration: '2025', desc: 'Describe project impact and outcome.' }])} className={rowBtn}>
            + Add Project
          </button>
        </div>
      );
    }

    if (name === 'Publications') {
      return (
        <div key="Publications" className="p-5 rounded-xl border shadow-md space-y-4" style={cardStyle}>
          {sectionHead('📚', 'Publications')}

          {publications.map((p, idx) => (
            <div key={p.id} className="p-3 rounded border space-y-2 bg-white border-stone-400 relative">
              <button onClick={() => setPublications(publications.filter((x) => x.id !== p.id))} disabled={publications.length === 1} className={del}>
                🗑
              </button>

              <div className="grid grid-cols-2 gap-2 pr-6">
                <input value={p.title} onChange={(e) => { const n = [...publications]; n[idx].title = e.target.value; setPublications(n); }} className={input} placeholder="Publication Title" />
                <input value={p.publisher} onChange={(e) => { const n = [...publications]; n[idx].publisher = e.target.value; setPublications(n); }} className={input} placeholder="Publisher" />
              </div>

              <input value={p.year} onChange={(e) => { const n = [...publications]; n[idx].year = e.target.value; setPublications(n); }} className={`${input} w-full`} placeholder="Year" />

              <textarea rows={2} value={p.desc} onChange={(e) => { const n = [...publications]; n[idx].desc = e.target.value; setPublications(n); }} className={`${input} w-full resize-none`} placeholder="Publication description" />
            </div>
          ))}

          <button onClick={() => setPublications([...publications, { id: Date.now(), title: 'New Publication', publisher: 'Publisher Name', year: '2025', desc: 'Describe publication topic and contribution.' }])} className={rowBtn}>
            + Add Publication
          </button>
        </div>
      );
    }

    if (name === 'Skills') {
      return (
        <div key="Skills" className="p-5 rounded-xl border shadow-md space-y-2" style={cardStyle}>
          {sectionHead('🛠️', 'Core Capabilities Matrix')}
          <input value={skills} onChange={(e) => setSkills(e.target.value)} className="w-full p-2.5 rounded text-sm bg-white text-stone-900 border border-stone-400" />
        </div>
      );
    }

    if (name === 'Languages') {
      return (
        <div key="Languages" className="p-5 rounded-xl border shadow-md space-y-4" style={cardStyle}>
          {sectionHead('🌐', 'Languages')}

          {languages.map((language, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={language}
                onChange={(e) => {
                  const updated = [...languages];
                  updated[index] = e.target.value;
                  setLanguages(updated);
                }}
                className="flex-1 p-2.5 rounded text-sm bg-white text-stone-900 border border-stone-400"
                placeholder="English"
              />

              <button onClick={() => setLanguages(languages.filter((_, i) => i !== index))} className="px-3 rounded bg-red-600 text-white font-bold">
                🗑
              </button>
            </div>
          ))}

          <button onClick={() => setLanguages([...languages, ''])} className={rowBtn}>
            + Add Language
          </button>
        </div>
      );
    }

    if (name === 'References') {
      return (
        <div key="References" className="p-5 rounded-xl border shadow-md space-y-4" style={cardStyle}>
          {sectionHead('👥', 'References')}

          {references.map((reference, index) => (
            <div key={index} className="p-3 rounded border space-y-2 bg-white border-stone-400">
              <input type="text" value={reference.name} onChange={(e) => { const updated = [...references]; updated[index].name = e.target.value; setReferences(updated); }} className="p-2 bg-white text-xs w-full rounded text-stone-900 border" placeholder="Reference Name" />

              <input type="text" value={reference.position} onChange={(e) => { const updated = [...references]; updated[index].position = e.target.value; setReferences(updated); }} className="p-2 bg-white text-xs w-full rounded text-stone-900 border" placeholder="Position / Company" />

              <input type="text" value={reference.contact} onChange={(e) => { const updated = [...references]; updated[index].contact = e.target.value; setReferences(updated); }} className="p-2 bg-white text-xs w-full rounded text-stone-900 border" placeholder="Phone or Email" />

              <button onClick={() => setReferences(references.filter((_, i) => i !== index))} className="px-3 py-1 rounded bg-red-600 text-white text-xs font-bold">
                Delete Reference
              </button>
            </div>
          ))}

          <button onClick={() => setReferences([...references, { name: '', position: '', contact: '' }])} className={rowBtn}>
            + Add Reference
          </button>
        </div>
      );
    }

    if (name === 'Address') {
      return (
        <div key="Address" className="p-5 rounded-xl border shadow-md space-y-3" style={cardStyle}>
          {sectionHead('📍', 'Address Details')}

          <input
            type="text"
            value={profile.address || ''}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
            className="w-full p-2.5 rounded text-sm bg-white text-stone-900 border border-stone-400"
            placeholder="123 Anywhere St., Any City"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <section className="space-y-6 max-h-[88vh] overflow-y-auto pr-2 custom-scrollbar">
      <div className="p-4 rounded-xl border flex justify-between items-center" style={cardStyle}>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider block text-stone-800">
            Active Structure Preset
          </span>
          <span className="text-sm font-bold text-stone-900">{layoutPreset}</span>
          <span className="text-[11px] font-semibold block mt-1 text-stone-700">
            Editor adapts as: {config.panelName}
          </span>
        </div>

        <button onClick={() => setCurrentPage('templates')} className="px-3 py-1.5 bg-stone-800 text-white font-bold rounded-lg text-xs">
          Change
        </button>
      </div>

      <div className="p-5 rounded-xl border shadow-md space-y-4" style={{ ...cardStyle, borderLeft: `8px solid ${config.accent}` }}>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">
            💳 Adaptive Header/Profile Fields
          </h3>
          <span className="text-[10px] bg-stone-900 text-white px-2 py-0.5 rounded font-mono">
            {config.panelName}
          </span>
        </div>

        <div className="p-3 bg-white/40 rounded-lg border border-stone-400">
          <input type="file" accept="image/*" onChange={handlePhotoUpload} className="block w-full text-xs text-stone-800 file:mr-2 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-stone-800 file:text-white" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="w-full p-2 rounded text-xs bg-white text-stone-900 border border-stone-400" placeholder="Full Name" />
          <input value={profile.title} onChange={(e) => setProfile({ ...profile, title: e.target.value })} className="w-full p-2 rounded text-xs bg-white text-stone-900 border border-stone-400" placeholder="Professional Title" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className="w-full p-2 rounded text-xs bg-white text-stone-900 border border-stone-400" placeholder="Email" />
          <input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} className="w-full p-2 rounded text-xs bg-white text-stone-900 border border-stone-400" placeholder="Phone" />
        </div>
      </div>

      {containerOrder.map(render)}

      <SectionManager
        containerOrder={containerOrder}
        setContainerOrder={setContainerOrder}
        shiftOrderPosition={shiftOrderPosition}
      />

      <button onClick={handlePdfDownload} className="w-full py-4 rounded-xl font-bold uppercase tracking-wider text-sm shadow-xl" style={{ backgroundColor: '#FCEAE6', color: '#322529' }}>
        📥 Compile & Download Vector PDF
      </button>
    </section>
  );
}