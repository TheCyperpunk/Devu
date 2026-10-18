'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from '@/components/theme-toggle';
import { personalInfo } from '@/data/portfolio';

const links = [
  ['about', 'ABOUT'],
  ['education', 'EDUCATION'],
  ['skills', 'SKILLS'],
  ['projects', 'WORK'],
  ['experience', 'EXPERIENCE'],
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--header)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <a href="#home" onClick={closeMenu} className="display-title shrink-0 text-3xl italic">
          {personalInfo.name.split(' ')[0]}<span className="text-[var(--volt)]">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([href, label], index) => (
            <a key={href} href={`#${href}`} className="mono-label text-[var(--muted)] transition-colors hover:text-[var(--volt)]">
              {label} <span className="text-[var(--volt)]">0{index + 1}</span>
            </a>
          ))}
        </div>

        <div className="hidden md:block"><ThemeToggle /></div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button type="button" className="p-2 text-[var(--volt)]" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-4 border-b border-[var(--border)] bg-[var(--background)] p-6 md:hidden`}>
          {links.map(([href, label], index) => (
            <a key={href} href={`#${href}`} onClick={closeMenu} className="mono-label text-[var(--muted)] transition-colors hover:text-[var(--volt)]">
              {label} <span className="text-[var(--volt)]">0{index + 1}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
