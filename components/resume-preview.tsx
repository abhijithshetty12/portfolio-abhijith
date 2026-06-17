'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function ResumePreviewFab() {
  const [open, setOpen] = useState(false);

  const resumeHref = useMemo(() => '/resume.pdf', []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      {/* Trigger Button:
        Mobile: Micro-sized, text-only ("Resume"), safely placed in the bottom right corner
        Desktop: Full signature layout ("Resume | Preview"), placed in top right corner
      */}
      <div className="fixed bottom-6 right-6 md:top-5 md:right-5 md:bottom-auto z-[110]">
        <button
          type="button"
          aria-label="Preview resume"
          onClick={() => setOpen(true)}
          className={
            'group flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-3.5 md:py-2 rounded-full ' +
            'bg-zinc-950/80 md:bg-white/[0.03] backdrop-blur-md border border-white/[0.1] md:border-white/[0.08] ' +
            'shadow-[0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_0px_rgba(255,255,255,0.1)] md:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0px_rgba(255,255,255,0.05)] ' +
            'hover:bg-white/[0.08] hover:border-white/[0.15] active:scale-[0.94] md:active:scale-[0.96] transition-all duration-200'
          }
        >
          {/* Main "Resume" copy remains visible across all screens */}
          <span className="text-[11px] font-medium tracking-wide text-zinc-200 group-hover:text-white transition-colors">
            Resume
          </span>
          
          {/* Hidden on mobile, shown on desktop (md:) */}
          <div className="hidden md:block h-2.5 w-[1px] bg-white/[0.12]" />
          <span className="hidden md:block text-[10px] font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors">
            Preview
          </span>
          
          {/* Status glow dot scales down beautifully for mobile view */}
          <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
        </button>
      </div>

      {/* Main Preview Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-0 md:p-4"
          >
            {/* Premium Translucent Backdrop */}
            <button
              type="button"
              aria-label="Close resume preview"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-zinc-950/45 backdrop-blur-2xl transition-all duration-300"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ 
                opacity: 0, 
                y: window.innerWidth < 768 ? '100%' : 20, 
                scale: window.innerWidth < 768 ? 1 : 0.97 
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ 
                opacity: 0, 
                y: window.innerWidth < 768 ? '100%' : 20, 
                scale: window.innerWidth < 768 ? 1 : 0.97 
              }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-[1100px] z-10 max-h-[92vh] md:max-h-none"
            >
              {/* Premium Frosted Card Container */}
              <div className="rounded-t-2xl md:rounded-2xl bg-zinc-950/60 md:bg-zinc-950/40 backdrop-blur-3xl border-t border-x border-white/[0.08] md:border border-white/[0.06] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col max-h-[92vh] md:max-h-none">
                
                {/* Header inside modal */}
                <div className="flex items-center justify-between px-5 py-4 md:px-6 border-b border-white/[0.04] shrink-0 bg-white/[0.01]">
                  <div>
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
                      Resume Preview
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={resumeHref}
                      download
                      className="inline-flex items-center justify-center px-3.5 py-2 rounded-full text-[11px] md:text-xs font-semibold tracking-wide text-zinc-900 bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:brightness-105 transition-all duration-200 active:scale-[0.98]"
                    >
                      Download PDF
                    </a>
                    
                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-300 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.15] active:scale-[0.96] transition-all duration-200 flex items-center justify-center"
                      aria-label="Close"
                    >
                      <svg width="12" height="12" className="md:w-3.5 md:h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M1 1L13 13M13 1L1 13" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 md:p-5 overflow-y-auto flex-1 subpixel-antialiased">
                  <div className="relative rounded-xl overflow-hidden border border-white/[0.05] bg-black/40 h-[60vh] md:h-[70vh]">
                    <iframe
                      title="Resume PDF preview"
                      src={`${resumeHref}#view=FitH`} 
                      className="relative w-full h-full border-0 bg-white"
                    />
                  </div>

                  <div className="mt-4 text-[11px] text-zinc-500 leading-relaxed">
                    Tip: If your browser blocks embedded PDF previews, tap <span className="text-zinc-300 font-medium">Download PDF</span> to view directly.
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}