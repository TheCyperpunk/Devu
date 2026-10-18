import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const resumeRequest = `mailto:${personalInfo.email}?subject=${encodeURIComponent('Resume request')}`;

export default function SocialStrip() {
  const iconClass = 'inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition-colors hover:border-[var(--volt)] hover:text-[var(--volt)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]';

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mono-label whitespace-nowrap font-normal text-[var(--secondary)]">FIND ME ON</span>
      <a href={personalInfo.github} target="_blank" rel="noreferrer" className={iconClass} aria-label="Open Devika TD's GitHub profile" title="GitHub"><Github className="h-3.5 w-3.5" /></a>
      <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={iconClass} aria-label="Open Devika TD's LinkedIn profile" title="LinkedIn"><Linkedin className="h-3.5 w-3.5" /></a>
      <a href={`mailto:${personalInfo.email}`} className={iconClass} aria-label="Email Devika TD" title="Email"><Mail className="h-3.5 w-3.5" /></a>
      <a href={resumeRequest} className="mono-label inline-flex h-9 items-center gap-2 rounded-xl border border-[var(--border)] px-3 font-normal text-[var(--foreground)] transition-colors hover:border-[var(--volt)] hover:text-[var(--volt)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]" aria-label="Request Devika TD's resume by email" title="Request resume"><FileText className="h-3.5 w-3.5" /> RESUME</a>
    </div>
  );
}
