import React from 'react';
import { Lightbulb, Info, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface CalloutProps {
  type?: 'tip' | 'info' | 'warning' | 'success';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Callout({
  type = 'tip',
  title,
  children,
  className = '',
}: CalloutProps) {
  const styles = {
    tip: {
      bg: 'bg-blue-50/70 border-blue-200/80',
      icon: <Lightbulb className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />,
      titleColor: 'text-blue-900',
      textColor: 'text-blue-950/80',
      defaultTitle: 'Pro Tip',
    },
    info: {
      bg: 'bg-slate-50 border-slate-200',
      icon: <Info className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />,
      titleColor: 'text-slate-900',
      textColor: 'text-slate-700',
      defaultTitle: 'Note',
    },
    warning: {
      bg: 'bg-amber-50/70 border-amber-200/80',
      icon: <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />,
      titleColor: 'text-amber-900',
      textColor: 'text-amber-950/80',
      defaultTitle: 'Important Warning',
    },
    success: {
      bg: 'bg-emerald-50/70 border-emerald-200/80',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />,
      titleColor: 'text-emerald-900',
      textColor: 'text-emerald-950/80',
      defaultTitle: 'Recommended Best Practice',
    },
  }[type];

  return (
    <div
      role="note"
      className={`p-4 sm:p-5 rounded-2xl border my-6 space-y-1.5 ${styles.bg} ${className}`}
    >
      <div className="flex items-center gap-2">
        {styles.icon}
        <h5 className={`font-bold text-xs sm:text-sm uppercase tracking-wide ${styles.titleColor}`}>
          {title || styles.defaultTitle}
        </h5>
      </div>
      <div className={`text-xs sm:text-sm leading-relaxed pl-6 ${styles.textColor}`}>
        {children}
      </div>
    </div>
  );
}
