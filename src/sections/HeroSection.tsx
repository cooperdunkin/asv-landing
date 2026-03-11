import { useEffect, useRef } from 'react'
import { animate, inView, stagger } from 'motion'
import { Download, Github, ShieldCheck } from 'lucide-react'
import InstallCommand from '../components/InstallCommand'
import { cn } from '../lib/utils'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (dotRef.current) {
      animate(
        dotRef.current as Element,
        { opacity: [1, 0.2, 1] },
        { duration: 2, repeat: Infinity, ease: 'easeInOut' }
      )
    }
    if (containerRef.current) {
      const children = Array.from(
        containerRef.current.querySelectorAll('[data-hero-item]')
      )
      inView(containerRef.current, () => {
        animate(
          children as Element[],
          { opacity: [0, 1], y: [12, 0] },
          { duration: 0.5, delay: stagger(0.07), ease: 'easeOut' }
        )
      })
    }
  }, [])

  return (
    <section className="relative min-h-[88vh] flex items-center px-6 py-24 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 18% 45%, rgba(232,213,176,0.055) 0%, transparent 65%)',
        }}
      />
      {/* Faint grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div ref={containerRef} className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <div
          data-hero-item
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 sm:mb-10 border border-[--color-border] rounded-full font-mono text-xs text-[--color-muted] bg-[--color-bg-2] opacity-0"
        >
          <span ref={dotRef} className="w-1.5 h-1.5 rounded-full bg-[--color-green] inline-block flex-shrink-0" />
          v0.1.3 — now live on npm
        </div>

        {/* Headline */}
        <h1
          data-hero-item
          className="opacity-0 font-bold tracking-[-0.03em] leading-[1.06] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}
        >
          Your AI agent is<br />
          <span className="text-[--color-accent]">leaking your API keys.</span>
        </h1>

        {/* Subhead */}
        <p
          data-hero-item
          className="opacity-0 text-[--color-muted] max-w-[580px] leading-relaxed mb-10"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.125rem)' }}
        >
          Agent Secrets Vault is a local, MCP-native credential broker. Your agents
          request access — ASV validates policy, makes the API call, returns the response.{' '}
          <span className="text-[--color-text] font-medium">The raw key never leaves the vault.</span>
        </p>

        {/* CTAs */}
        <div data-hero-item className="opacity-0 flex flex-wrap items-center gap-3 mb-12">
          <InstallCommand />
          <a
            href="#waitlist"
            className={cn(
              'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold no-underline',
              'border border-[--color-border] text-[--color-text] bg-[--color-bg-3]',
              'hover:border-[--color-accent]/25 hover:bg-[--color-bg-2] transition-colors'
            )}
          >
            Join Pro Waitlist →
          </a>
        </div>

        {/* Meta stats */}
        <div data-hero-item className="opacity-0 flex flex-wrap gap-6 pt-6 border-t border-[--color-border]">
          <span className="flex items-center gap-2 text-xs text-[--color-muted]">
            <Download size={13} className="opacity-40" />
            278 weekly downloads
          </span>
          <span className="flex items-center gap-2 text-xs text-[--color-muted]">
            <Github size={13} className="opacity-40" />
            Open source — MIT
          </span>
          <span className="flex items-center gap-2 text-xs text-[--color-muted]">
            <ShieldCheck size={13} className="opacity-40" />
            MCP-native · Local-first
          </span>
        </div>
      </div>
    </section>
  )
}
