import { useEffect, useRef } from 'react'
import { animate, inView } from 'motion'

const problems = [
  {
    label: 'ENV_VAR',
    title: 'Environment Variables',
    description: 'Readable by any shell command the agent runs. One command and the key is gone. This is the most common pattern and the most broken.',
    snippet: 'echo $STRIPE_API_KEY',
  },
  {
    label: '.env',
    title: '.env Files',
    description: 'Readable by any file-read tool. They persist on disk indefinitely — even after the project is archived.',
    snippet: 'cat .env',
  },
  {
    label: 'SYSTEM_PROMPT',
    title: 'System Prompt Injection',
    description: 'The agent sees your key in its own context window. Every tool call that logs inputs now has your key in the logs. Permanently.',
    snippet: 'tool_input.api_key',
  },
  {
    label: 'HARDCODED',
    title: 'Hardcoded Config',
    description: 'Same exposure surface as .env, plus they end up in git history. One accidental push and the key is in a commit forever.',
    snippet: 'git log --all -p',
  },
]

export default function ProblemSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return
      card.style.opacity = '0'
      inView(
        card,
        () => {
          animate(
            card as Element,
            { opacity: [0, 1], y: [16, 0] },
            { duration: 0.4, delay: i * 0.06, ease: 'easeOut' }
          )
        },
        { margin: '-5% 0px' }
      )
    })
  }, [])

  return (
    <section className="bg-[--color-bg-2] px-6 py-20 border-t border-[--color-border]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-[--color-accent] mb-3">
          The Problem
        </p>
        <h2
          className="font-bold tracking-[-0.025em] text-[--color-text] mb-4"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
        >
          Every way you're delivering keys<br className="hidden sm:block" /> to agents is broken.
        </h2>
        <p className="text-[--color-muted] max-w-[560px] leading-relaxed mb-12" style={{ fontSize: '1.05rem' }}>
          Claude Code, Cursor, and every major agentic IDE gives agents shell access. That means any method of passing API keys is a one-prompt injection away from full exposure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <div
              key={p.label}
              ref={el => { cardRefs.current[i] = el }}
              className="bg-[--color-bg-3] border border-[--color-border] rounded-xl p-6 hover:border-[--color-border] transition-colors group"
            >
              <span className="inline-block font-mono text-[11px] font-medium text-[--color-accent] bg-[--color-accent]/8 border border-[--color-accent]/15 px-2.5 py-1 rounded mb-4">
                {p.label}
              </span>
              <h3 className="text-[--color-text] font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-[--color-muted] text-sm leading-relaxed mb-4">{p.description}</p>
              <code className="font-mono text-xs text-[--color-red] bg-[--color-bg] border border-[--color-border] px-3 py-1.5 rounded inline-block">
                {p.snippet}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
