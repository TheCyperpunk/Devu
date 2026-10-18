'use client';

import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatus('Your email application should open with this message ready to send.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={submitForm} className="space-y-5">
      <Field label="Your Name"><input required value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} className="field" placeholder="Enter your name" /></Field>
      <Field label="Your Email"><input required type="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} className="field" placeholder="Enter your email" /></Field>
      <Field label="Message"><textarea required rows={5} value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} className="field resize-y" placeholder="Enter your message" /></Field>
      <Button type="submit"><Send className="h-4 w-4" /> Send Message</Button>
      {status && <p className="text-sm text-[var(--muted)]" role="status">{status}</p>}
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="mono-label block text-[var(--foreground)]">{label}<span className="mt-2 block">{children}</span></label>;
}
