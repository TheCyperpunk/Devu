'use client';

import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Thank you ${form.name}! Your message has been received.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={submitForm} className="space-y-5">
      <Field label="Your Name"><input required value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} className="field" placeholder="Enter your name" /></Field>
      <Field label="Your Email"><input required type="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} className="field" placeholder="Enter your email" /></Field>
      <Field label="Message"><textarea required rows={5} value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} className="field resize-y" placeholder="Enter your message" /></Field>
      <Button type="submit"><Send className="h-4 w-4" /> Send Message</Button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="mono-label block text-[var(--foreground)]">{label}<span className="mt-2 block">{children}</span></label>;
}
