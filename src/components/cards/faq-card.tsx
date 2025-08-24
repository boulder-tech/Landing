'use client';

import { useId, useState, ReactNode } from 'react';

type FaqItemProps = {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

export default function FaqItem({ question, children, defaultOpen = false, className = '' }: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={`border-b border-neutral-200 dark:border-neutral-800 ${className}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="group w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base md:text-lg font-medium text-foreground group-hover:opacity-90">
          {question}
        </span>
        <Chevron
          className={`shrink-0 transition-transform duration-400 ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      <div
        id={panelId}
        role="region"
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="pb-6 text-sm md:text-base text-muted-foreground leading-6">
          {children}
        </div>
      </div>
    </div>
  );
}

function Chevron({ className = '' }: { className?: string }) {
  return (
    <svg
      width="20" height="20" viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}