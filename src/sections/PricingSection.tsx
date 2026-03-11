import { Check } from 'lucide-react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { cn } from '../lib/utils'

const freeTier = [
  'Up to 3 services',
  '7-day audit log',
  'Single agent policy',
  'Full MCP integration',
  'Local encrypted keystore',
]

const proTier = [
  'Unlimited services',
  '90-day audit log with search',
  'Multiple agent policies',
  'Email alerts on violations',
  'Everything in Free',
]

const teamTier = [
  'Shared vault',
  'Role-based access control',
  'Centralized policy management',
  'Team audit log with attribution',
  'SSO (SAML)',
]

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5 mb-7 flex-1">
      {items.map(item => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-[--color-muted]">
          <Check size={14} className="text-[--color-green] flex-shrink-0 mt-[3px]" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[--color-bg-2] border-t border-[--color-border] px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-[--color-accent] mb-3">
          Pricing
        </p>
        <h2
          className="font-bold tracking-[-0.025em] text-[--color-text] mb-4"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
        >
          Free to start. Pro when you need more.
        </h2>
        <p className="text-[--color-muted] max-w-[520px] leading-relaxed mb-12" style={{ fontSize: '1.05rem' }}>
          The core vault is free forever. Pro adds unlimited services, longer audit logs, and multiple policies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {/* Free */}
          <div className="bg-[--color-bg] border border-[--color-border] rounded-xl p-7 flex flex-col">
            <div className="font-mono text-[11px] font-semibold text-[--color-muted] uppercase tracking-widest mb-4">
              Free
            </div>
            <div className="text-[2.2rem] font-bold text-[--color-text] tracking-[-0.04em] leading-none mb-1">$0</div>
            <div className="text-xs text-[--color-muted] mb-6">Forever free. No credit card needed.</div>
            <FeatureList items={freeTier} />
            <a
              href="https://github.com/cooperdunkin/agent-secrets-vault"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center justify-center w-full px-4 py-2.5 rounded-lg text-sm font-semibold no-underline mt-auto',
                'border border-[--color-border] text-[--color-text] bg-[--color-bg-3]',
                'hover:border-[--color-accent]/25 transition-colors'
              )}
            >
              Install Now →
            </a>
          </div>

          {/* Pro — visually elevated */}
          <div
            className="pricing-pro-shimmer md:-mt-3 md:-mb-3 rounded-xl"
            style={{ borderTop: '2px solid var(--color-accent)' }}
          >
            <div className="bg-[--color-bg] rounded-[11px] p-7 flex flex-col h-full">
              <div className="font-mono text-[11px] font-semibold text-[--color-accent] uppercase tracking-widest mb-4">
                Pro — Early Access
              </div>
              <div className="flex items-baseline gap-2 leading-none mb-1">
                <span className="text-[2.2rem] font-bold text-[--color-text] tracking-[-0.04em]">$10.50</span>
                <span className="text-xs text-[--color-muted]">/ month</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-[--color-muted] line-through">$15</span>
                <span className="font-mono text-[10px] text-[--color-accent] bg-[--color-accent]/10 border border-[--color-accent]/20 px-2 py-0.5 rounded">
                  30% OFF — LOCKED
                </span>
              </div>
              <div className="text-xs text-[--color-muted] mb-6">
                Early supporters lock in $10.50/mo forever.
              </div>
              <FeatureList items={proTier} />
              <a
                href="#waitlist"
                className={cn(
                  'mt-auto flex items-center justify-center w-full px-4 py-2.5 rounded-lg text-sm font-semibold no-underline',
                  'bg-[--color-text] text-[--color-bg] hover:bg-white transition-colors'
                )}
              >
                Join Waitlist — 30% Off →
              </a>
            </div>
          </div>

          {/* Team */}
          <div className="bg-[--color-bg] border border-[--color-border] rounded-xl p-7 opacity-75 flex flex-col">
            <div className="font-mono text-[11px] font-semibold text-[--color-muted] uppercase tracking-widest mb-4">
              Team
            </div>
            <div className="text-[2.2rem] font-bold text-[--color-text] tracking-[-0.04em] leading-none mb-1">$49</div>
            <div className="text-xs text-[--color-muted] mb-2">/ seat / month</div>
            <div className="text-xs text-[--color-muted] mb-6">For engineering teams deploying agents at scale.</div>
            <FeatureList items={teamTier} />
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <span className="font-mono text-[11px] text-[--color-muted] bg-[--color-bg-3] border border-[--color-border] rounded-full px-3 py-1.5 cursor-default inline-block text-center mt-auto">
                  Coming soon — join waitlist
                </span>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-[--color-bg-3] border border-[--color-border] text-[--color-muted] text-xs px-3 py-2 rounded-lg max-w-xs text-center leading-relaxed"
                  sideOffset={8}
                >
                  Join the waitlist to get notified when Team launches
                  <Tooltip.Arrow className="fill-[--color-border]" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </div>
        </div>
      </div>
    </section>
  )
}
