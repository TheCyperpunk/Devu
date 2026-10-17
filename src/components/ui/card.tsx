import * as React from 'react';
import { cn } from '@/lib/utils';
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (<div ref={ref} className={cn('border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--border-strong)]', className)} {...props} />));
Card.displayName = 'Card';
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (<div ref={ref} className={cn('p-6', className)} {...props} />));
CardContent.displayName = 'CardContent';
export { Card, CardContent };
