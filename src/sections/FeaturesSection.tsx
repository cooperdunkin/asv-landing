import { Plug, Monitor, FileText, Timer, ScrollText, ShieldOff } from 'lucide-react'

const features = [
  {
    icon: Plug,
    name: 'MCP-Native',
    description: 'Works with any framework that supports MCP — Claude Code, Cursor, LangChain, CrewAI. One JSON block in .mcp.json and you\'re live.',
  },
  {
    icon: Monitor,
    name: 'Local-First',
    description: 'The vault runs as a local process. Keys are encrypted at rest (AES-256) and never leave your machine except for the proxied API call.',
  },
  {
    icon: FileText,
    name: 'Policy Engine',
    description: 'YAML config defines which agents can access which services, which actions are permitted, and per-service rate limits.',
  },
  {
    icon: Timer,
    name: 'Short-Lived Tokens',
    description: 'Every granted access has a TTL (default: 5 minutes, configurable per policy). Tokens expire. Damage is limited.',
  },
  {
    icon: ScrollText,
    name: 'Full Audit Log',
    description: 'Every request, grant, denial, and proxied call is logged locally with timestamp and agent identity. Know exactly what your agents did.',
  },
  {
    icon: ShieldOff,
    name: 'Zero-Knowledge Logs',
    description: 'Even if your audit logs are stolen, they contain API responses — not keys. The key never appears in any log, anywhere.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-[--color-bg-2] px-6 py-20 border-t border-[--color-border]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-[--color-accent] mb-3">
          Built For Security
        </p>
        <h2
          className="font-bold tracking-[-0.025em] text-[--color-text] mb-4"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
        >
          Everything a credential vault needs.
        </h2>
        <p className="text-[--color-muted] max-w-[540px] leading-relaxed mb-12" style={{ fontSize: '1.05rem' }}>
          Designed from the ground up for the agent-as-caller model. Not a CI/CD tool retrofitted for agents.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.name}
                className="bg-[--color-bg-3] border border-[--color-border] rounded-xl p-6 hover:border-[--color-muted]/25 transition-colors group cursor-default"
              >
                <Icon
                  size={18}
                  className="text-[--color-muted] mb-4"
                />
                <h3 className="text-[--color-text] font-semibold text-base mb-2 group-hover:translate-x-0.5 transition-transform duration-150">
                  {feature.name}
                </h3>
                <p className="text-[--color-muted] text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
