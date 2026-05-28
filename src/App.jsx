import React, { useState, useRef } from 'react';
import { SAMPLE_TEMPLATES, getTemplateConfig } from './data/templateConfigs';
import {
  DEFAULT_PROFILE,
  DEFAULT_JOBS,
  DEFAULT_EDUCATION,
  DEFAULT_PROJECTS,
  DEFAULT_PUBLICATIONS,
  DEFAULT_SKILLS
} from './data/defaultResumeData';
import { exportResumePdf } from './utils/pdfExport';
import EditorPanel from './components/editor/EditorPanel';
import ResumePreview from './components/resume/ResumePreview';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState('olivia-sanchez');
  const [layoutPreset, setLayoutPreset] = useState('Olivia Sanchez (Classic Split-Color Layout)');

  const [profile, setProfile] = useState({
    ...DEFAULT_PROFILE,
    address: DEFAULT_PROFILE.address || '123 Anywhere St., Any City'
  });

  const [jobs, setJobs] = useState(DEFAULT_JOBS);
  const [education, setEducation] = useState(DEFAULT_EDUCATION);
  const [projects, setProjects] = useState(DEFAULT_PROJECTS);
  const [publications, setPublications] = useState(DEFAULT_PUBLICATIONS);
  const [skills, setSkills] = useState(DEFAULT_SKILLS);

  const [languages, setLanguages] = useState([
    'English',
    'Hindi'
  ]);

  const [references, setReferences] = useState([
    {
      name: 'John Carter',
      position: 'CEO / ABC Company',
      contact: '+123456789'
    }
  ]);

  const [containerOrder, setContainerOrder] = useState([
    'Summary',
    'Experience',
    'Education',
    'Projects',
    'Publications',
    'Skills',
    'Contact',
    'Address',
    'Languages',
    'References'
  ]);

  const resumePrintContainerRef = useRef(null);
  const canvasStyle = getTemplateConfig(selectedTemplateId);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setProfile((prev) => ({
        ...prev,
        avatar: reader.result
      }));
    };

    reader.readAsDataURL(file);
  };

  const handlePdfDownload = async () => {
    await exportResumePdf({
      element: resumePrintContainerRef.current,
      profileName: profile.name
    });
  };

  const shiftOrderPosition = (index, direction) => {
    const updatedLayout = [...containerOrder];

    if (direction === 'up' && index > 0) {
      [updatedLayout[index], updatedLayout[index - 1]] = [
        updatedLayout[index - 1],
        updatedLayout[index]
      ];
    } else if (direction === 'down' && index < updatedLayout.length - 1) {
      [updatedLayout[index], updatedLayout[index + 1]] = [
        updatedLayout[index + 1],
        updatedLayout[index]
      ];
    }

    setContainerOrder(updatedLayout);
  };

  const selectAndLoadTemplate = (template) => {
    setSelectedTemplateId(template.id);
    setLayoutPreset(`${template.name} (${template.subText})`);

    const titleMap = {
      'catrine-ziv': 'IT Project Manager',
      'samira-hadid': 'General Manager',
      'richard-sanchez': 'Photographer',
      'sebastian-bennett': 'Professional Accountant',
      'olivia-sanchez-circle': 'Administrative Assistant',
      'olivia-sanchez-blue': 'Administrative Manager',
      'olivia-wilson': 'Marketing Manager',
      'sebastian-bennett-black': 'Retail Associate Manager',
      'rosa-maria-aguado': 'Digital Marketing Manager',
      'mariana-anderson': 'Marketing Manager'
    };

    setProfile((prev) => ({
      ...prev,
      title: titleMap[template.id] || prev.title
    }));

    setCurrentPage('home');
  };

  return (
    <div
      className="min-h-screen transition-all duration-300"
      style={{
        backgroundColor: isDarkMode ? '#322529' : '#583E46'
      }}
    >
      <header
        className="px-8 py-4 flex items-center justify-between border-b"
        style={{
          backgroundColor: isDarkMode ? '#1F1719' : '#322529',
          borderColor: isDarkMode ? '#4E3A3F' : '#453137'
        }}
      >
        <div>
          <h1
            className="text-xl font-bold tracking-tight"
            style={{ color: '#FCEAE6' }}
          >
            Resume Builder
          </h1>

          <p
            className="text-xs"
            style={{
              color: '#FCEAE6',
              opacity: 0.7
            }}
          >
            Design Studio Console Workspace
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setCurrentPage(currentPage === 'home' ? 'templates' : 'home')
            }
            className="px-4 py-2 text-xs font-semibold rounded-lg border uppercase tracking-wider transition-all hover:scale-105 cursor-pointer"
            style={{
              backgroundColor: currentPage === 'templates' ? '#FCEAE6' : '#322529',
              color: currentPage === 'templates' ? '#322529' : '#FCEAE6',
              borderColor: '#453137'
            }}
          >
            {currentPage === 'home'
              ? '📂 Templates Marketplace'
              : '⬅ Back To Editor'}
          </button>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 w-10 h-10 rounded-lg border transition-all text-lg flex items-center justify-center cursor-pointer hover:scale-105"
            style={{
              backgroundColor: isDarkMode ? '#4E3A3F' : '#322529',
              borderColor: '#453137',
              color: '#FCEAE6'
            }}
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      {currentPage === 'templates' ? (
        <main className="max-w-7xl mx-auto p-8">
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-black tracking-tight"
              style={{ color: '#FCEAE6' }}
            >
              Select a Layout Base Template
            </h2>

            <p
              className="mt-2 text-sm max-w-2xl mx-auto"
              style={{
                color: '#FCEAE6',
                opacity: 0.8
              }}
            >
              Pick any design to change your runtime preview canvas shape and structure instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_TEMPLATES.map((tmpl) => (
              <div
                key={tmpl.id}
                className={`group rounded-2xl overflow-hidden border shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between ${
                  selectedTemplateId === tmpl.id ? 'ring-4 ring-pink-300' : ''
                }`}
                style={{
                  backgroundColor: '#322529',
                  borderColor: '#453137'
                }}
                onClick={() => selectAndLoadTemplate(tmpl)}
              >
                <div className="aspect-[3/4] overflow-hidden relative bg-slate-950">
                  <img
                    src={tmpl.thumbnail}
                    alt={tmpl.name}
                    className="w-full h-full object-contain p-2 opacity-90 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <span className="px-5 py-3 bg-neutral-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl">
                      Activate This Structure
                    </span>
                  </div>
                </div>

                <div
                  className="p-5 text-left border-t"
                  style={{ borderColor: '#453137' }}
                >
                  <h3 className="font-bold text-base tracking-wide text-white">
                    {tmpl.name}
                  </h3>

                  <p
                    className="text-xs mt-1 font-medium"
                    style={{
                      color: '#FCEAE6',
                      opacity: 0.7
                    }}
                  >
                    {tmpl.subText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      ) : (
        <main className="p-6 grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[1800px] mx-auto">
          <EditorPanel
            config={canvasStyle}
            profile={profile}
            setProfile={setProfile}
            jobs={jobs}
            setJobs={setJobs}
            education={education}
            setEducation={setEducation}
            projects={projects}
            setProjects={setProjects}
            publications={publications}
            setPublications={setPublications}
            skills={skills}
            setSkills={setSkills}
            languages={languages}
            setLanguages={setLanguages}
            references={references}
            setReferences={setReferences}
            containerOrder={containerOrder}
            setContainerOrder={setContainerOrder}
            shiftOrderPosition={shiftOrderPosition}
            handlePhotoUpload={handlePhotoUpload}
            handlePdfDownload={handlePdfDownload}
            setCurrentPage={setCurrentPage}
            layoutPreset={layoutPreset}
          />

          <section className="flex justify-center items-start overflow-auto max-h-[88vh] bg-black/20 p-4 rounded-2xl border border-white/10">
            <div className="shadow-2xl scale-[0.82] origin-top transform-gpu">
              <ResumePreview
                selectedTemplateId={selectedTemplateId}
                profile={profile}
                jobs={jobs}
                education={education}
                projects={projects}
                publications={publications}
                skills={skills}
                languages={languages}
                references={references}
                containerOrder={containerOrder}
                resumePrintContainerRef={resumePrintContainerRef}
              />
            </div>
          </section>
        </main>
      )}
    </div>
  );
}