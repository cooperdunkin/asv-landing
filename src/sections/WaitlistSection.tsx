import { useState } from 'react'
import { Spotlight } from '../components/aceternity/Spotlight'

export default function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(false)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      await fetch('https://buttondown.com/api/emails/embed-subscribe/cooperdunkin', {
        method: 'POST',
        body: data,
        mode: 'no-cors',
      })
      setSubmitted(true)
    } catch {
      setError(true)
    }
  }

  return (
    <section id="waitlist" className="relative border-t border-[--color-border] px-6 py-24 overflow-hidden bg-[--color-bg-2]">
      {/* Spotlight */}
      <Spotlight
        className="-top-60 left-1/2 -translate-x-1/2"
        fill="rgba(232, 213, 176, 0.1)"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-[--color-accent] mb-3">
            Early Access
          </p>
          <h2
            className="font-bold tracking-[-0.025em] text-[--color-text] mb-4"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
          >
            Get early access to Pro.
          </h2>
          <p className="text-[--color-muted] leading-relaxed mb-8" style={{ fontSize: '1.05rem' }}>
            Join the waitlist and lock in 30% off forever when Pro launches. First 50 signups only.
          </p>

          {submitted ? (
            <p className="font-mono text-sm text-[--color-accent] py-2 mb-4">
              You're on the list.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 mb-4"
            >
              <input type="hidden" name="embed" value="1" />
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                required
                className="flex-1 bg-[--color-bg-3] border border-[--color-border] rounded-lg px-4 py-2.5 font-mono text-sm text-[--color-text] placeholder:text-[--color-muted] outline-none focus:border-[--color-accent]/50 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-[--color-text] text-[--color-bg] hover:bg-white transition-colors whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>
          )}

          {error && (
            <p className="font-mono text-xs text-red-400 mb-3">
              Something went wrong. Try again or email us directly.
            </p>
          )}
          <p className="text-xs text-[--color-muted]">
            No spam. Unsubscribe anytime. Early access invite when Pro ships.
          </p>
        </div>
      </div>
    </section>
  )
}
