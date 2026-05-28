import html2pdf from "html2pdf.js";
import { 
  Moon, Sun, User, Briefcase, GraduationCap, 
  Award, FileText, Download, Plus, Trash2, ArrowUp, ArrowDown, Image, X
} from "lucide-react";

export default function FormPanel({ resumeData, setResumeData }) {
  const { personalInfo, summary, experience, education, skills, sectionOrder } = resumeData;

  const updatePersonalInfo = (field, value) => {
    setResumeData({
      ...resumeData,
      personalInfo: { ...personalInfo, [field]: value },
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => updatePersonalInfo("photo", reader.result);
    reader.readAsDataURL(file);
  };

  const removePhoto = () => updatePersonalInfo("photo", "");

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...experience,
        { id: crypto.randomUUID(), company: "", role: "", duration: "", description: "" },
      ],
    });
  };

  const updateExperience = (id, field, value) => {
    const updated = experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp);
    setResumeData({ ...resumeData, experience: updated });
  };

  const removeExperience = (id) => {
    setResumeData({ ...resumeData, experience: experience.filter(exp => exp.id !== id) });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...education,
        { id: crypto.randomUUID(), college: "", degree: "", year: "" },
      ],
    });
  };

  const updateEducation = (id, field, value) => {
    const updated = education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu);
    setResumeData({ ...resumeData, education: updated });
  };

  const removeEducation = (id) => {
    setResumeData({ ...resumeData, education: education.filter(edu => edu.id !== id) });
  };

  const handleSkillsChange = (e) => {
    setResumeData({
      ...resumeData,
      skills: e.target.value.split(",").map(s => s.trim()),
    });
  };

  const moveSection = (index, direction) => {
    const newOrder = [...sectionOrder];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newOrder.length) return;
    const [movedItem] = newOrder.splice(index, 1);
    newOrder.splice(targetIndex, 0, movedItem);
    setResumeData({ ...resumeData, sectionOrder: newOrder });
  };

  const exportPDF = () => {
    const element = document.getElementById("resume-preview");
    const opt = {
      margin: 0,
      filename: `${personalInfo.name || "Resume"}_Document.pdf`,
      image: { type: "jpeg", quality: 1.0 },
      html2canvas: { scale: 3, useCORS: true, letterRendering: true },
      jsPDF: { unit: "px", format: [794, 1123], orientation: "portrait" }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="space-y-8 p-8 max-w-2xl mx-auto text-slate-800 dark:text-slate-100">
      
      {/* Dynamic Main Branding Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Resume Builder
          </h1>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Design Studio Console Workspace</p>
        </div>

        <button
          onClick={() => setResumeData({ ...resumeData, themeMode: resumeData.themeMode === "light" ? "dark" : "light" })}
          className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 dynamic-transition shadow-sm"
        >
          {resumeData.themeMode === "light" ? <Moon className="h-5 w-5 text-slate-700" /> : <Sun className="h-5 w-5 text-amber-400" />}
        </button>
      </div>

      {/* Controller Block Selection Panel */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 space-y-4">
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Layout Presentation Preset</label>
          <select
            className="mt-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 bg-white dark:bg-slate-800 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
            value={resumeData.selectedTemplate}
            onChange={(e) => setResumeData({ ...resumeData, selectedTemplate: e.target.value })}
          >
            <option value="Classic">Classic Traditional (Serif Accent)</option>
            <option value="Modern">Modern Executive (Asymmetric Column Split)</option>
            <option value="Minimal">Minimal Elegant (Clean Typography Spacing)</option>
          </select>
        </div>
      </div>

      {/* Input Module Form Core Stack */}
      <div className="space-y-6">
        
        {/* Module Card Component: Personal Info */}
        <div className="bg-white dark:bg-slate-800/30 rounded-2xl p-6 border border-slate-100 dark:border-slate-800/80 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-50 dark:border-slate-800/50 pb-3">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600"><User className="h-5 w-5" /></div>
            <h2 className="text-lg font-bold">Personal Profile</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text" placeholder="Full Name"
              className="col-span-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
              value={personalInfo.name} onChange={(e) => updatePersonalInfo("name", e.target.value)}
            />
            <input
              type="text" placeholder="Professional Title / Role"
              className="col-span-2 w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
              value={personalInfo.role} onChange={(e) => updatePersonalInfo("role", e.target.value)}
            />
            <input
              type="email" placeholder="Email Address"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
              value={personalInfo.email} onChange={(e) => updatePersonalInfo("email", e.target.value)}
            />
            <input
              type="text" placeholder="Phone Number"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
              value={personalInfo.phone} onChange={(e) => updatePersonalInfo("phone", e.target.value)}
            />
          </div>

          <div className="pt-2">
            <label className="text-xs font-bold text-slate-400 block mb-2">Profile Avatar Media Data Source</label>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-xs font-medium cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 dynamic-transition">
                <Image className="h-4 w-4 text-slate-500" />
                <span>Upload Photograph Image</span>
                <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
              </label>
              {personalInfo.photo && (
                <button
                  onClick={removePhoto}
                  className="flex items-center gap-1 px-3 py-2.5 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 text-xs font-semibold hover:bg-red-100 dynamic-transition"
                >
                  <X className="h-3.5 w-3.5" /> Remove Image
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Module Card Component: Executive Abstract Summary */}
        <div className="bg-white dark:bg-slate-800/30 rounded-2xl p-6 border border-slate-100 dark:border-slate-800/80 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-50 dark:border-slate-800/50 pb-3">
            <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600"><FileText className="h-5 w-5" /></div>
            <h2 className="text-lg font-bold">Executive Overview Abstract</h2>
          </div>
          <textarea
            rows="4" placeholder="Brief summary describing your skills and experience statement outline profiles..."
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
            value={summary} onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
          />
        </div>

        {/* Module Card Component: Work Experience Dynamic Multi-Array Container */}
        <div className="bg-white dark:bg-slate-800/30 rounded-2xl p-6 border border-slate-100 dark:border-slate-800/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-50 dark:border-slate-800/50 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600"><Briefcase className="h-5 w-5" /></div>
              <h2 className="text-lg font-bold">Work History Records</h2>
            </div>
            <button
              onClick={addExperience}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm dynamic-transition"
            >
              <Plus className="h-3.5 w-3.5" /> Add Job
            </button>
          </div>

          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 space-y-3 relative group">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text" placeholder="Corporate Company / Firm"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-xs bg-white dark:bg-slate-800 focus:outline-none text-slate-800 dark:text-white"
                    value={exp.company} onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                  />
                  <input
                    type="text" placeholder="Operational Role Assignment"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-xs bg-white dark:bg-slate-800 focus:outline-none text-slate-800 dark:text-white"
                    value={exp.role} onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
                  />
                  <input
                    type="text" placeholder="Employment Term Duration (e.g. 2022 - Present)"
                    className="col-span-2 w-full rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-xs bg-white dark:bg-slate-800 focus:outline-none text-slate-800 dark:text-white"
                    value={exp.duration} onChange={(e) => updateExperience(exp.id, "duration", e.target.value)}
                  />
                  <textarea
                    rows="3" placeholder="Core achievements metrics scope parameters layout..."
                    className="col-span-2 w-full rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-xs bg-white dark:bg-slate-800 focus:outline-none text-slate-800 dark:text-white"
                    value={exp.description} onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => removeExperience(exp.id)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-600 text-xs font-semibold hover:bg-red-100 dynamic-transition"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete Term
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Module Card Component: Education Framework History Container */}
        <div className="bg-white dark:bg-slate-800/30 rounded-2xl p-6 border border-slate-100 dark:border-slate-800/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-50 dark:border-slate-800/50 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600"><GraduationCap className="h-5 w-5" /></div>
              <h2 className="text-lg font-bold">Academic Formations</h2>
            </div>
            <button
              onClick={addEducation}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm dynamic-transition"
            >
              <Plus className="h-3.5 w-3.5" /> Add Record
            </button>
          </div>

          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text" placeholder="University / Academy Campus"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-xs bg-white dark:bg-slate-800 focus:outline-none text-slate-800 dark:text-white"
                    value={edu.college} onChange={(e) => updateEducation(edu.id, "college", e.target.value)}
                  />
                  <input
                    type="text" placeholder="Degree Graduation Matrix Title"
                    className="w-full rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-xs bg-white dark:bg-slate-800 focus:outline-none text-slate-800 dark:text-white"
                    value={edu.degree} onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                  />
                  <input
                    type="text" placeholder="Passout Calendar Year Schedule"
                    className="col-span-2 w-full rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-xs bg-white dark:bg-slate-800 focus:outline-none text-slate-800 dark:text-white"
                    value={edu.year} onChange={(e) => updateEducation(edu.id, "year", e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => removeEducation(edu.id)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/40 text-red-600 text-xs font-semibold hover:bg-red-100 dynamic-transition"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete Term
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Module Card Component: Technical Skills Tokens input */}
        <div className="bg-white dark:bg-slate-800/30 rounded-2xl p-6 border border-slate-100 dark:border-slate-800/80 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-50 dark:border-slate-800/50 pb-3">
            <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-600"><Award className="h-5 w-5" /></div>
            <h2 className="text-lg font-bold">Skills & Framework Competency</h2>
          </div>
          <div>
            <input
              type="text" placeholder="Comma separated strings: React, Angular, Cloud Systems..."
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-sm bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
              value={skills.join(", ")} onChange={handleSkillsChange}
            />
            <span className="text-[11px] text-slate-400 dark:text-slate-500 block mt-2 ml-1">Separate separate items targeting a clear dynamic string token mapping output tag array parsing execution setup.</span>
          </div>
        </div>

        {/* Dynamic Engine Control Section Layout sorter module pane */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 dark:from-slate-800/80 dark:to-slate-900 text-white rounded-2xl p-6 space-y-4 shadow-md">
          <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-200">Structural Architecture Engine (Reorder Canvas)</h3>
          <p className="text-xs text-slate-300">Click the arrow controls to swap structural hierarchy positions on the right preview canvas live dynamically.</p>
          <div className="space-y-2">
            {sectionOrder.map((section, idx) => (
              <div key={section} className="flex items-center justify-between bg-white/10 rounded-xl p-3 text-xs font-medium border border-white/5">
                <span className="capitalize tracking-wide">{section === "personalInfo" ? "Profile Title Banner" : section} Container</span>
                <div className="flex items-center gap-1.5">
                  <button
                    disabled={idx === 0} onClick={() => moveSection(idx, -1)}
                    className="p-1.5 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 cursor-pointer"
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button
                    disabled={idx === sectionOrder.length - 1} onClick={() => moveSection(idx, 1)}
                    className="p-1.5 rounded bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 cursor-pointer"
                  >
                    <ArrowDown className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Main Serializer Blueprint System Action Trigger */}
      <button
        onClick={exportPDF}
        className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 p-4 text-sm font-bold text-white shadow-md hover:shadow-lg flex items-center justify-center gap-2 tracking-wide uppercase dynamic-transition cursor-pointer mt-4"
      >
        <Download className="h-4 w-4" /> Compile & Download Vector PDF
      </button>

    </div>
  );
}