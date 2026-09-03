import { motion } from 'motion/react';
import { ChevronUp, Download, Printer, FileText, CheckCircle2, Phone, Mail, Globe, Github, Linkedin, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { useState } from 'react';

interface ResumePreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumePreview({ isOpen, onClose }: ResumePreviewProps) {
  const [copied, setCopied] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kavinsivasu@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 15, 145));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 15, 75));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0, y: -20 }}
      animate={{ opacity: 1, height: 'auto', y: 0 }}
      exit={{ opacity: 0, height: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full mt-8 overflow-hidden"
    >
      {/* Container Card */}
      <div className="bg-card border-2 border-primary/30 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl relative">
        {/* Top Control Bar */}
        <div className="no-print flex flex-wrap items-center justify-between gap-4 pb-5 mb-5 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg sm:text-xl flex items-center gap-2">
                Kavin Sivasubramanian — Resume
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                  Latest Version
                </span>
              </h3>
              <p className="text-xs text-foreground/60">Georgia Institute of Technology • Computer Engineering</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center bg-background border border-border rounded-full p-1 text-xs font-medium mr-1 text-foreground/70">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 75}
                className="p-1.5 hover:text-foreground hover:bg-muted rounded-full transition-all disabled:opacity-40 cursor-pointer"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut size={14} />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                className="px-2 py-0.5 hover:text-foreground hover:bg-muted rounded-full transition-all cursor-pointer font-mono text-[11px]"
                title="Reset Zoom"
              >
                {zoomLevel}%
              </button>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 145}
                className="p-1.5 hover:text-foreground hover:bg-muted rounded-full transition-all disabled:opacity-40 cursor-pointer"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <ZoomIn size={14} />
              </button>
            </div>

            {/* Primary Download Button */}
            <a
              href="/Kavin_Sivasubramanian_Resume.pdf"
              download="Kavin_Sivasubramanian_Resume.pdf"
              className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
              title="Download official PDF resume"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-full bg-background border border-border hover:bg-muted text-foreground/80 hover:text-foreground text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 cursor-pointer"
              title="Print document"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-full bg-muted border border-border hover:bg-border text-foreground text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
              aria-label="Bring resume back up"
            >
              <ChevronUp size={15} />
              <span>Collapse</span>
            </button>
          </div>
        </div>

        {/* Quick Links Strip */}
        <div className="no-print flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2 px-3 mb-5 bg-muted/40 rounded-xl border border-border/60 text-xs text-foreground/80">
          <a
            href="tel:4708921812"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-card hover:text-foreground transition-all"
          >
            <Phone size={13} className="text-primary" />
            <span>(470) 892-1812</span>
          </a>
          <span className="text-border">|</span>
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-card hover:text-foreground transition-all cursor-pointer"
            title="Click to copy email"
          >
            <Mail size={13} className="text-primary" />
            <span>kavinsivasu@gmail.com</span>
            {copied && <CheckCircle2 size={12} className="text-emerald-500 ml-0.5" />}
          </button>
          <span className="text-border">|</span>
          <span className="px-2 py-1 text-foreground/60">US Permanent Resident</span>
          <span className="text-border">|</span>
          <a
            href="https://www.linkedin.com/in/kavin-siva/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-primary font-medium hover:bg-primary/10 transition-all"
          >
            <Linkedin size={13} />
            <span>LinkedIn</span>
          </a>
          <span className="text-border">|</span>
          <a
            href="https://kavin-siva-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-primary font-medium hover:bg-primary/10 transition-all"
          >
            <Globe size={13} />
            <span>Portfolio</span>
          </a>
          <span className="text-border">|</span>
          <a
            href="https://github.com/kavin-siva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-primary font-medium hover:bg-primary/10 transition-all"
          >
            <Github size={13} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Resume Presentation Area - Renders the exact resume sheet from screenshot */}
        <div className="flex justify-center overflow-x-auto py-2">
          <div
            id="resume-document"
            style={{
              width: `${zoomLevel}%`,
              maxWidth: zoomLevel === 100 ? '850px' : `${(850 * zoomLevel) / 100}px`,
              transition: 'width 0.2s ease-out, max-width 0.2s ease-out',
            }}
            className="relative w-full bg-white rounded-lg shadow-2xl border border-neutral-300 overflow-hidden ring-1 ring-black/5 selection:bg-neutral-200"
          >
            {/* The Document Visual */}
            <img
              src="/resume-sheet.png?v=2"
              srcSet="/resume-sheet.png?v=2 1x, /resume-sheet-2x.png?v=2 2x"
              onError={(e) => {
                // Fallbacks in case of direct path request
                if (!e.currentTarget.src.includes('Screenshot')) {
                  e.currentTarget.src = '/Screenshot_latest.png?v=2';
                }
              }}
              alt="Kavin Sivasubramanian Resume"
              className="w-full h-auto block select-text"
              loading="eager"
            />

            {/* Clickable Header Overlay Hotspots */}
            <div className="absolute top-[7.4%] left-0 right-0 h-[2.5%] flex items-center justify-center pointer-events-none">
              <div className="w-[88%] h-full flex items-center justify-center gap-2 pointer-events-auto">
                <a
                  href="tel:4708921812"
                  className="h-full px-2 rounded hover:bg-blue-500/10 transition-colors opacity-0 hover:opacity-100"
                  title="Call (470) 892-1812"
                />
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="h-full px-2 rounded hover:bg-blue-500/10 transition-colors opacity-0 hover:opacity-100 cursor-pointer"
                  title="Copy kavinsivasu@gmail.com"
                />
                <a
                  href="https://www.linkedin.com/in/kavin-siva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full px-2 rounded hover:bg-blue-500/15 transition-colors opacity-0 hover:opacity-100"
                  title="Open LinkedIn"
                />
                <a
                  href="https://kavin-siva-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full px-2 rounded hover:bg-blue-500/15 transition-colors opacity-0 hover:opacity-100"
                  title="Open Portfolio"
                />
                <a
                  href="https://github.com/kavin-siva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full px-2 rounded hover:bg-blue-500/15 transition-colors opacity-0 hover:opacity-100"
                  title="Open GitHub"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Strip */}
        <div className="no-print flex flex-wrap items-center justify-center gap-3 mt-8 pt-6 border-t border-border">
          <a
            href="/Kavin_Sivasubramanian_Resume.pdf"
            download="Kavin_Sivasubramanian_Resume.pdf"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <Download size={18} />
            <span>Download PDF</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-full bg-muted border border-border text-foreground hover:bg-border font-medium transition-all flex items-center gap-2 cursor-pointer"
          >
            <ChevronUp size={16} />
            <span>Bring Resume Back Up</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}


