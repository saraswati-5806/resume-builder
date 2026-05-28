import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";

export default function PreviewCanvas({ resumeData }) {
  return (
    <div
      id="resume-preview"
      className="resume-paper shadow-2xl border border-slate-200/60 dark:border-slate-800 rounded-sm overflow-hidden text-black bg-white"
    >
      {resumeData.selectedTemplate === "Classic" && (
        <ClassicTemplate resumeData={resumeData} />
      )}

      {resumeData.selectedTemplate === "Modern" && (
        <ModernTemplate resumeData={resumeData} />
      )}

      {resumeData.selectedTemplate === "Minimal" && (
        <MinimalTemplate resumeData={resumeData} />
      )}
    </div>
  );
}