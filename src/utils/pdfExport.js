import html2pdf from 'html2pdf.js';
const bad = v => typeof v === 'string' && (v.includes('oklch') || v.includes('lab(') || v.includes('lch('));
const textColor = c => c.includes('text-white') ? '#fff' : c.includes('text-slate-500') ? '#64748b' : c.includes('text-slate-600') ? '#475569' : c.includes('text-slate-700') ? '#334155' : c.includes('text-stone') ? '#292524' : '#111827';
const bgColor = c => c.includes('bg-white') ? '#fff' : c.includes('bg-black') ? '#000' : c.includes('bg-slate-9') ? '#0f172a' : c.includes('bg-stone-8') ? '#292524' : c.includes('bg-gray') ? '#f3f4f6' : 'transparent';
export async function exportResumePdf({ element, profileName }) {
  if (!element) return;
  const changed = [];
  const nodes = [element, ...element.querySelectorAll('*')];
  try {
    nodes.forEach(node => {
      const s = window.getComputedStyle(node); const cls = typeof node.className === 'string' ? node.className : '';
      changed.push({ node, color: node.style.color, backgroundColor: node.style.backgroundColor, borderColor: node.style.borderColor, boxShadow: node.style.boxShadow });
      if (bad(s.color)) node.style.color = textColor(cls);
      if (bad(s.backgroundColor)) node.style.backgroundColor = bgColor(cls);
      if (bad(s.borderColor) || bad(s.borderTopColor) || bad(s.borderBottomColor)) node.style.borderColor = '#d1d5db';
      if (bad(s.boxShadow)) node.style.boxShadow = 'none';
    });
    await html2pdf().set({
      margin: [0,0,0,0], filename: `${profileName.replaceAll(' ','_')}_Resume.pdf`,
      image: { type:'jpeg', quality:0.98 }, pagebreak: { mode:['css','legacy'], avoid:['.resume-section','.pdf-avoid-break'] },
      html2canvas: { scale:2, useCORS:true, allowTaint:true, backgroundColor:'#fff', letterRendering:true, imageTimeout:15000, logging:false, windowWidth:element.scrollWidth, windowHeight:element.scrollHeight },
      jsPDF: { unit:'mm', format:'a4', orientation:'portrait' }
    }).from(element).save();
  } catch (err) { console.error(err); alert('Error printing PDF document file.'); }
  finally { changed.forEach(x => { x.node.style.color=x.color; x.node.style.backgroundColor=x.backgroundColor; x.node.style.borderColor=x.borderColor; x.node.style.boxShadow=x.boxShadow; }); }
}
