'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme-toggle';
import { personalInfo } from '@/data/portfolio';

const links = ['home', 'about', 'education', 'skills', 'projects', 'experience'];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--header)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" onClick={closeMenu} className="bg-gradient-to-r from-[#4F39F6] via-[#625FFF] to-[#155DFC] bg-clip-text text-2xl font-bold text-transparent">{personalInfo.name}</a>
        <div className="flex items-center gap-2 md:hidden"><ThemeToggle /><button className="rounded-lg p-2 text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="site-navigation">{menuOpen ? <X /> : <Menu />}</button></div>
        <div id="site-navigation" className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-2 border-t border-[var(--border)] bg-[var(--header)] p-5 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
          {links.map((item) => <a key={item} href={`#${item}`} onClick={closeMenu} className="capitalize text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[#4F39F6]">{item}</a>)}
          <Button asChild size="sm"><a href="#contact" onClick={closeMenu}>Contact</a></Button>
          <div className="hidden md:block"><ThemeToggle /></div>
        </div>
      </nav>
    </header>
  );
}
