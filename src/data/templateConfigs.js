export const SAMPLE_TEMPLATES = [
  { id: 'olivia-sanchez', name: 'Olivia Sanchez', subText: 'Marketing Manager (Classic Split-Color Layout)', thumbnail: '/template1.png' },
  { id: 'lorna-alvarado', name: 'Lorna Alvarado', subText: 'Marketing Manager (Bold Top Banner & Skill Metrics)', thumbnail: '/template2.png' },
  { id: 'catrine-ziv', name: 'Catrine Ziv', subText: 'IT Project Manager (Sage Green Accents & Block Margins)', thumbnail: '/template3.png' },
  { id: 'samira-hadid', name: 'Samira Hadid', subText: 'General Manager (Modern Minimal Slate Design)', thumbnail: '/template4.png' },
  { id: 'rosa-maria-aguado', name: 'Rosa Maria Aguado', subText: 'Digital Marketing Manager (Warm Tone Column Split)', thumbnail: '/template5.png' },
  { id: 'richard-sanchez', name: 'Richard Sanchez', subText: 'Photographer (Deep Teal Accent Columns)', thumbnail: '/template6.png' },
  { id: 'sebastian-bennett', name: 'Sebastian Bennett', subText: 'Professional Accountant (Symmetric Minimal Canvas Style)', thumbnail: '/template7.png' },
  { id: 'olivia-wilson', name: 'Olivia Wilson', subText: 'Marketing Manager (High-Impact Yellow Geometric Style)', thumbnail: '/template8.png' },
  { id: 'mariana-anderson', name: 'Mariana Anderson', subText: 'Marketing Manager (Executive Corporate Navy Split)', thumbnail: '/template9.png' },
  { id: 'olivia-sanchez-circle', name: 'Olivia Sanchez (Minimalist)', subText: 'Administrative Assistant (Elegant Centered Round Portrait Layout)', thumbnail: '/template10.png' },
  { id: 'olivia-sanchez-blue', name: 'Olivia Sanchez (Corporate)', subText: 'Administrative Manager (Bold Blue Top Header Ribbon)', thumbnail: '/template11.png' },
  { id: 'sebastian-bennett-black', name: 'Sebastian Bennett (Black)', subText: 'Professional Accountant (Symmetric Minimal Canvas Style)', thumbnail: '/template12.png' }
];

export const TEMPLATE_CONFIGS = {
  'olivia-sanchez': {
    panelName: 'Dark Header + Light Sidebar',
    layout: 'topHeaderSidebar',
    accent: '#4B5358',
    formAccent: '#4B5358',
    sidebarSections: ['Contact', 'Education', 'Skills', 'Languages'],
    mainSections: ['Summary', 'Experience', 'Projects', 'Publications', 'References'],
    avatarShape: 'circle',
    compact: true
  },
  'lorna-alvarado': {
    panelName: 'Bold Banner + Timeline',
    layout: 'bannerTimeline',
    accent: '#24242C',
    formAccent: '#F0B429',
    sidebarSections: ['Summary', 'Education', 'Skills', 'Languages'],
    mainSections: ['Contact', 'Experience', 'Projects', 'Publications', 'References'],
    avatarShape: 'circle',
    timeline: true,
    skillBars: true,
    compact: true
  },
  'catrine-ziv': {
    panelName: 'Sage Editorial Split',
    layout: 'sageSplit',
    accent: '#7B8372',
    formAccent: '#7B8372',
    sidebarSections: ['Summary', 'Skills', 'Projects'],
    mainSections: ['Experience', 'Education', 'Publications'],
    avatarShape: 'square',
    compact: true
  },
  'samira-hadid': {
    panelName: 'Clean Medical Document',
    layout: 'medicalDoc',
    accent: '#9BC5D8',
    formAccent: '#9BC5D8',
    sidebarSections: [],
    mainSections: ['Summary', 'Experience', 'Education', 'Projects', 'Publications', 'Skills'],
    avatarShape: 'square',
    compact: true
  },
  'rosa-maria-aguado': {
    panelName: 'Warm Sidebar + Dark Artistic Main',
    layout: 'artisticDark',
    accent: '#F5E5D4',
    formAccent: '#F5E5D4',
    sidebarSections: ['Contact', 'Skills', 'Education'],
    mainSections: ['Summary', 'Experience', 'Projects', 'Publications'],
    avatarShape: 'circle',
    compact: true
  },
  'richard-sanchez': {
    panelName: 'Teal Editorial Split',
    layout: 'tealEditorial',
    accent: '#14716D',
    formAccent: '#14716D',
    sidebarSections: ['Education', 'Skills', 'Languages'],
    mainSections: ['Summary', 'Experience', 'Projects', 'Publications'],
    avatarShape: 'circle',
    compact: true
  },
  'sebastian-bennett': {
    panelName: 'Centered Minimal Accounting',
    layout: 'accountantMinimal',
    accent: '#2B2B2B',
    formAccent: '#2B2B2B',
    sidebarSections: [],
    mainSections: ['Summary', 'Education', 'Experience', 'Projects', 'Publications', 'Skills'],
    avatarShape: 'none',
    compact: true
  },
  'olivia-wilson': {
    panelName: 'Yellow Geometric Sidebar',
    layout: 'yellowGeometric',
    accent: '#F6C400',
    formAccent: '#F6C400',
    sidebarSections: ['Contact', 'Skills', 'Languages'],
    mainSections: ['Summary', 'Experience', 'Projects', 'Education', 'Publications'],
    avatarShape: 'circle',
    timeline: true,
    compact: true
  },
  'mariana-anderson': {
    panelName: 'Executive Navy Sidebar',
    layout: 'navySplit',
    accent: '#2F3B4F',
    formAccent: '#2F3B4F',
    sidebarSections: ['Contact', 'Education', 'Skills', 'Languages'],
    mainSections: ['Summary', 'Experience', 'Projects', 'Publications', 'References'],
    avatarShape: 'circle',
    timeline: true,
    compact: true
  },
  'olivia-sanchez-circle': {
    panelName: 'Centered Portrait Minimal',
    layout: 'circleMinimal',
    accent: '#111111',
    formAccent: '#111111',
    sidebarSections: [],
    mainSections: ['Summary', 'Experience', 'Education', 'Projects', 'Publications', 'Skills'],
    avatarShape: 'circle',
    compact: true
  },
  'olivia-sanchez-blue': {
    panelName: 'Blue Corporate Header',
    layout: 'blueCorporate',
    accent: '#0B55B6',
    formAccent: '#0B55B6',
    sidebarSections: [],
    mainSections: ['Summary', 'Experience', 'Education', 'Projects', 'Publications', 'Skills'],
    avatarShape: 'none',
    compact: true
  },
  'sebastian-bennett-black': {
    panelName: 'Simple Retail Document',
    layout: 'simpleMalay',
    accent: '#6D4D3D',
    formAccent: '#6D4D3D',
    sidebarSections: [],
    mainSections: ['Summary', 'Experience', 'Education', 'Projects', 'Publications', 'Skills'],
    avatarShape: 'square',
    compact: true
  }
};

export const getTemplateConfig = (templateId) => {
  return TEMPLATE_CONFIGS[templateId] || TEMPLATE_CONFIGS['olivia-sanchez'];
};
