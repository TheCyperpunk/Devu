import Image from 'next/image';
import { Award, BriefcaseBusiness, Code2, Database, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import profileImage from '@/image/photo_2026-10-15_01-00-44.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from '@/components/contact-form';
import SiteHeader from '@/components/site-header';
import { education, internships, personalInfo, projects, skills } from '@/data/portfolio';

const skillIcons = { HTML: Code2, CSS: Code2, Python: Code2, SQL: Database, Django: Code2 };

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[#4F39F6] selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden" aria-hidden="true">
        <div className="animate-float absolute -left-48 -top-48 h-[30rem] w-[30rem] rounded-full bg-[var(--ambient-indigo)] blur-[90px]" />
        <div className="animate-float absolute -bottom-48 -right-48 h-[26rem] w-[26rem] rounded-full bg-[var(--ambient-blue)] blur-[90px]" />
      </div>

      <SiteHeader />

      <main>
        <section id="home" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:pt-24">
          <div className="animate-fade-up text-center lg:text-left">
            <p className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[.25em] text-[#4F39F6] lg:justify-start"><Sparkles className="h-4 w-4" /> Welcome to my portfolio</p>
            <h1 className="text-5xl font-bold leading-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">Hi, I&apos;m <span className="bg-gradient-to-r from-[#4F39F6] via-[#625FFF] to-[#155DFC] bg-clip-text text-transparent">{personalInfo.name}</span></h1>
            <h2 className="mt-5 text-xl font-semibold text-[#4F39F6] sm:text-2xl">{personalInfo.title}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] lg:mx-0">{personalInfo.tagline}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"><Button asChild size="lg"><a href="#projects"><Code2 className="h-5 w-5" /> View Projects</a></Button><Button asChild variant="outline" size="lg"><a href="#contact"><Mail className="h-5 w-5" /> Contact Me</a></Button></div>
            <div className="mt-8 flex justify-center gap-3 lg:justify-start"><SocialLink href={personalInfo.linkedin} label="LinkedIn"><Linkedin /></SocialLink><SocialLink href={personalInfo.github} label="GitHub"><Github /></SocialLink><SocialLink href={`mailto:${personalInfo.email}`} label="Email"><Mail /></SocialLink></div>
          </div>
          <div className="animate-fade-up flex justify-center [animation-delay:200ms]"><div className="relative h-72 w-72 rounded-full bg-gradient-to-br from-[#4F39F6] via-[#625FFF] to-[#155DFC] p-2 shadow-2xl shadow-indigo-500/20 sm:h-96 sm:w-96"><div className="animate-pulse-ring absolute -inset-4 rounded-full border border-[#818CF8]/40" aria-hidden="true" /><Image src={profileImage} alt={`${personalInfo.name} portrait`} fill priority className="rounded-full border-8 border-[var(--background)] object-cover object-top" sizes="(max-width: 640px) 18rem, 24rem" /></div></div>
        </section>

        <Section id="about" title="About Me"><Card><CardContent className="grid gap-8 md:grid-cols-[1fr_auto]"><div className="space-y-4 text-[var(--muted)]"><p>Computer Science and Engineering graduate with a strong foundation in Python and SQL. I have hands-on experience applying Python and SQL to full-stack development.</p><p>I am a motivated individual seeking opportunities to contribute my Python and SQL skills while growing as a software professional.</p></div><div className="space-y-4 text-sm text-[var(--muted)]"><Info icon={<MapPin />} text={personalInfo.location} /><Info icon={<Phone />} text={personalInfo.phone} /><Info icon={<Mail />} text={personalInfo.email} /></div></CardContent></Card></Section>

        <Section id="education" title="Education"><div className="space-y-5">{education.map((item) => <Card key={item.degree}><CardContent><div className="flex flex-col justify-between gap-2 sm:flex-row"><h3 className="text-lg font-bold text-[var(--foreground)]">{item.degree}</h3><span className="shrink-0 text-sm text-[var(--secondary)]">{item.duration}</span></div><p className="mt-2 font-medium text-[#4F39F6]">{item.institution}</p><p className="mt-1 text-sm text-[var(--muted)]">{item.detail}</p><p className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#4F39F6]/10 px-3 py-1 text-sm text-[#4F39F6]"><Award className="h-4 w-4" /> {item.score}</p></CardContent></Card>)}</div></Section>

        <Section id="skills" title="Technical Skills"><div className="grid grid-cols-2 gap-4 sm:grid-cols-5">{skills.map((skill) => { const Icon = skillIcons[skill]; return <Card key={skill} className="hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"><CardContent className="flex flex-col items-center gap-3 text-center"><Icon className="h-8 w-8 text-[#4F39F6]" /><h3 className="font-semibold">{skill}</h3></CardContent></Card>; })}</div></Section>

        <Section id="projects" title="Featured Projects"><div className="grid gap-6 lg:grid-cols-3">{projects.map((project) => <Card key={project.title} className="flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"><CardContent className="flex h-full flex-col"><div className="flex items-start justify-between gap-3"><h3 className="text-xl font-bold text-[var(--foreground)]">{project.title}</h3>{project.liveLink && <a href={project.liveLink} aria-label={`Open ${project.title}`} className="text-[#4F39F6] hover:text-[#155DFC]"><ExternalLink className="h-5 w-5" /></a>}</div><p className="mt-4 flex-1 leading-7 text-[var(--muted)]">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full bg-[#4F39F6]/10 px-3 py-1 text-xs text-[#4F39F6]">{technology}</span>)}</div></CardContent></Card>)}</div></Section>

        <Section id="experience" title="Internship Experience"><div className="grid gap-6 lg:grid-cols-3">{internships.map((item) => <Card key={item.title}><CardContent><div className="flex items-start justify-between gap-3"><div><h3 className="font-bold text-[var(--foreground)]">{item.title}</h3><p className="mt-1 text-[#4F39F6]">{item.company}</p></div><span className={`rounded-full px-3 py-1 text-xs ${item.current ? 'bg-[#00BB7F]/10 text-[#00BB7F]' : 'bg-[#4F39F6]/10 text-[#4F39F6]'}`}>{item.duration}</span></div><p className="mt-5 leading-7 text-[var(--muted)]">{item.description}</p></CardContent></Card>)}</div><Card className="mt-6"><CardContent className="flex items-center gap-3"><BriefcaseBusiness className="text-[#4F39F6]" /><span>Devtown Internship Completion Certificate</span></CardContent></Card></Section>

        <Section id="contact" title="Get In Touch"><div className="grid gap-8 lg:grid-cols-2"><div className="grid gap-4 sm:grid-cols-2"><ContactCard icon={<Mail />} title="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} /><ContactCard icon={<Phone />} title="Phone" value={personalInfo.phone} href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} /><ContactCard icon={<Linkedin />} title="LinkedIn" value="linkedin.com/in/devika-td" href={personalInfo.linkedin} /><ContactCard icon={<Github />} title="GitHub" value="github.com/devikatd" href={personalInfo.github} /></div><Card><CardContent><ContactForm /></CardContent></Card></div></Section>
      </main>

      <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--secondary)]"><div className="flex justify-center gap-3 pb-3"><SocialLink href={personalInfo.linkedin} label="LinkedIn"><Linkedin /></SocialLink><SocialLink href={personalInfo.github} label="GitHub"><Github /></SocialLink><SocialLink href={`mailto:${personalInfo.email}`} label="Email"><Mail /></SocialLink></div><p>Designed &amp; built by {personalInfo.name} · © 2026</p></footer>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) { return <section id={id} className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-10"><h2 className="mb-10 text-center text-4xl font-bold sm:text-5xl"><span className="bg-gradient-to-r from-[#4F39F6] via-[#625FFF] to-[#155DFC] bg-clip-text text-transparent">{title}</span></h2>{children}</section>; }
function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) { return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:border-[#4F39F6] hover:bg-[#4F39F6]/10 hover:text-[#4F39F6]">{children}</a>; }
function Info({ icon, text }: { icon: React.ReactNode; text: string }) { return <div className="flex items-center gap-3"><span className="text-[#4F39F6]">{icon}</span><span>{text}</span></div>; }
function ContactCard({ icon, title, value, href }: { icon: React.ReactNode; title: string; value: string; href: string }) { return <Card><CardContent className="text-center"><div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4F39F6] to-[#155DFC] text-white">{icon}</div><h3 className="font-bold text-[var(--foreground)]">{title}</h3><a href={href} className="mt-2 block break-all text-sm text-[#4F39F6] hover:text-[#155DFC]">{value}</a></CardContent></Card>; }
