import CodeBlock from '../components/CodeBlock'

const installCode = `<span style="color:#4ade80">$</span> npm install -g agent-secrets-vault
<span style="color:#4ade80">$</span> asv add stripe        <span style="color:#52596b"># store your first key</span>`

const mcpJsonCode = `{
  <span style="color:#93c5fd">"mcpServers"</span>: {
    <span style="color:#93c5fd">"agent-secrets-vault"</span>: {
      <span style="color:#93c5fd">"command"</span>: <span style="color:#86efac">"asv"</span>,
      <span style="color:#93c5fd">"args"</span>: [<span style="color:#86efac">"serve"</span>]
    }
  }
}`

const steps = [
  {
    num: '01',
    title: 'Install globally via npm',
    block: <CodeBlock title="Terminal" code={installCode} html />,
  },
  {
    num: '02',
    title: 'Add to your Claude Code or Cursor config',
    block: <CodeBlock title=".mcp.json" code={mcpJsonCode} html />,
  },
  {
    num: '03',
    title: 'Your agent calls ASV — not the API directly',
    desc: (
      <>
        The MCP tool{' '}
        <code className="font-mono text-xs bg-[--color-bg-3] px-1.5 py-0.5 rounded text-[--color-text]">
          request_credential
        </code>{' '}
        is now available to your agent. No keys in context. No keys in env vars. Done.
        <br />
        <a
          href="https://github.com/cooperdunkin/agent-secrets-vault#readme"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[--color-accent-dim] hover:text-[--color-accent] transition-colors no-underline mt-3 inline-block text-sm"
        >
          Full setup guide on GitHub →
        </a>
      </>
    ),
  },
]

export default function GetStartedSection() {
  return (
    <section id="get-started" className="border-t border-[--color-border] px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-[--color-accent] mb-3">
          Get Started
        </p>
        <h2
          className="font-bold tracking-[-0.025em] text-[--color-text] mb-4"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
        >
          Up and running in 5 minutes.
        </h2>
        <p className="text-[--color-muted] max-w-[480px] leading-relaxed mb-12" style={{ fontSize: '1.05rem' }}>
          Three steps. No account required. No cloud setup.
        </p>

        <div className="max-w-2xl flex flex-col gap-10">
          {steps.map(step => (
            <div key={step.num} className="flex gap-6 items-start">
              <span className="font-mono text-[11px] font-semibold text-[--color-accent] bg-[--color-accent]/8 border border-[--color-accent]/15 px-2.5 py-1.5 rounded flex-shrink-0 mt-0.5">
                {step.num}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-semibold text-[--color-text] mb-4">{step.title}</h3>
                {step.block}
                {step.desc && (
                  <p className="text-sm text-[--color-muted] leading-relaxed mt-4">{step.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
