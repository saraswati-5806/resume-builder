export const TEMPLATE_LAYOUTS = {
  'olivia-sanchez': { component: 'Template1', accent: '#4B5358', sidebarSections: ['Contact','Education','Skills','Languages'], mainSections: ['Summary','Experience','Projects','Publications','References'] },
  'lorna-alvarado': { component: 'Template2', accent: '#24242C', sidebarSections: ['Summary','Education','Skills','Languages'], mainSections: ['Contact','Experience','Projects','Publications','References'] },
  'catrine-ziv': { component: 'Template3', accent: '#7B8372', sidebarSections: ['Summary','Skills','Projects'], mainSections: ['Experience','Education','Publications'] },
  'samira-hadid': { component: 'Template4', accent: '#111111', sidebarSections: [], mainSections: ['Summary','Experience','Education','Projects','Publications','Skills'] },
  'rosa-maria-aguado': { component: 'Template5', accent: '#5F5A55', sidebarSections: ['Contact','Skills','Education'], mainSections: ['Summary','Experience','Projects','Publications'] },
  'richard-sanchez': { component: 'Template6', accent: '#14716D', sidebarSections: ['Education','Skills','Languages'], mainSections: ['Summary','Experience','Projects','Publications'] },
  'sebastian-bennett': { component: 'Template7', accent: '#2B2B2B', sidebarSections: [], mainSections: ['Summary','Education','Experience','Projects','Publications','Skills'] },
  'olivia-wilson': { component: 'Template8', accent: '#F6C400', sidebarSections: ['Contact','Skills','Languages'], mainSections: ['Summary','Experience','Projects','Education','Publications'] },
  'mariana-anderson': { component: 'Template9', accent: '#2F3B4F', sidebarSections: ['Contact','Education','Skills','Languages'], mainSections: ['Summary','Experience','Projects','Publications','References'] },
  'olivia-sanchez-circle': { component: 'Template10', accent: '#111111', sidebarSections: [], mainSections: ['Summary','Experience','Education','Projects','Publications','Skills'] },
  'olivia-sanchez-blue': { component: 'Template11', accent: '#0B55B6', sidebarSections: [], mainSections: ['Summary','Experience','Education','Projects','Publications','Skills'] },
  'sebastian-bennett-black': { component: 'Template12', accent: '#6D4D3D', sidebarSections: [], mainSections: ['Summary','Experience','Education','Projects','Publications','Skills'] }
};
export const getTemplateLayout = (templateId) => TEMPLATE_LAYOUTS[templateId] || TEMPLATE_LAYOUTS['olivia-sanchez'];
