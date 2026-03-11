import CodeBlock from '../components/CodeBlock'

const steps = [
  {
    num: '01',
    title: 'Agent requests a credential',
    body: (
      <>
        The agent calls{' '}
        <code className="font-mono text-xs bg-[--color-bg-3] px-1.5 py-0.5 rounded text-[--color-text]">
          request_credential(service, action, justification)
        </code>{' '}
        via the ASV MCP tool. No key is passed. No key is visible in context.
      </>
    ),
  },
  {
    num: '02',
    title: 'Vault validates against your policy',
    body: 'ASV checks your YAML policy file: Is this agent allowed to call this service? Is this action permitted? Is the rate limit exceeded? If not — denied and logged.',
  },
  {
    num: '03',
    title: 'Vault proxies the API call',
    body: "ASV injects the real key server-side and makes the API call on the agent's behalf. The agent receives the API response — not the key. Nothing to leak. Everything logged.",
  },
]

const stripeExample = `<span style="color:#52596b">// What the agent calls (no key in scope)</span>
<span style="color:#c084fc">const</span> result = <span style="color:#c084fc">await</span> <span style="color:#fbbf24">request_credential</span>({
  <span style="color:#93c5fd">service</span>:       <span style="color:#86efac">"stripe"</span>,
  <span style="color:#93c5fd">action</span>:        <span style="color:#86efac">"create_payment_intent"</span>,
  <span style="color:#93c5fd">justification</span>: <span style="color:#86efac">"processing order #4821"</span>,
  <span style="color:#93c5fd">params</span>: { <span style="color:#93c5fd">amount</span>: 4900, <span style="color:#93c5fd">currency</span>: <span style="color:#86efac">"usd"</span> }
}<span style="color:#52596b">)</span>;

<span style="color:#52596b">// What ASV does internally (key never touches agent context)</span>
<span style="color:#52596b">// → policy check ✓  → audit log ✓  → proxied Stripe call ✓</span>

<span style="color:#52596b">// What the agent receives</span>
<span style="color:#52596b">// → { id: "pi_3abc...", status: "requires_payment_method", ... }</span>
<span style="color:#52596b">// → No key string. Nothing to leak.</span>`

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-6 py-20 border-t border-[--color-border]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-[--color-accent] mb-3">
          How It Works
        </p>
        <h2
          className="font-bold tracking-[-0.025em] text-[--color-text] mb-4"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
        >
          The key never leaves the vault.
        </h2>
        <p className="text-[--color-muted] max-w-[540px] leading-relaxed mb-14" style={{ fontSize: '1.05rem' }}>
          ASV sits between your agent and the outside world. Think AWS IAM roles — but for LLM tool calls. The agent gets scoped, time-limited access. Not raw credentials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
          {/* Steps */}
          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5 items-start">
                <span className="font-mono text-[11px] font-semibold text-[--color-accent] bg-[--color-accent]/8 border border-[--color-accent]/15 px-2 py-1 rounded flex-shrink-0 mt-0.5">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-[--color-text] mb-1.5">{step.title}</h3>
                  <p className="text-sm text-[--color-muted] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual diagram */}
          <div className="hidden md:flex flex-col gap-3 justify-center">
            {[
              { label: 'Agent', detail: 'calls request_credential()', color: 'text-[--color-text]', bg: 'bg-[--color-bg-3]' },
              { label: 'ASV Vault', detail: 'validates policy + rate limits', color: 'text-[--color-accent]', bg: 'bg-[--color-accent]/8 border-[--color-accent]/20' },
              { label: 'External API', detail: 'proxied call with real key', color: 'text-[--color-text]', bg: 'bg-[--color-bg-3]' },
            ].map((item, i) => (
              <div key={item.label}>
                <div className={`border border-[--color-border] ${item.bg} rounded-lg px-4 py-3`}>
                  <div className={`text-sm font-semibold ${item.color} mb-0.5`}>{item.label}</div>
                  <div className="text-xs text-[--color-muted] font-mono">{item.detail}</div>
                </div>
                {i < 2 && (
                  <div className="flex items-center gap-2 pl-4 py-1.5">
                    <div className="w-px h-4 bg-[--color-border]" />
                    <span className="text-[10px] font-mono text-[--color-muted]">
                      {i === 0 ? 'no key in payload →' : 'key injected server-side →'}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <CodeBlock
          title="Example · Agent calls Stripe via ASV"
          code={stripeExample}
          html
        />
      </div>
    </section>
  )
}
