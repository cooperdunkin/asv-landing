import { useState, useRef } from 'react'
import { Copy, Check } from 'lucide-react'
import { animate } from 'motion'
import { cn } from '../lib/utils'

const INSTALL_CMD = 'npm install -g agent-secrets-vault'

interface InstallCommandProps {
  className?: string
}

export default function InstallCommand({ className }: InstallCommandProps) {
  const [copied, setCopied] = useState(false)
  const checkRef = useRef<HTMLSpanElement>(null)

  async function handleCopy() {
    await navigator.clipboard.writeText(INSTALL_CMD)
    setCopied(true)
    if (checkRef.current) {
      animate(checkRef.current as Element, { scale: [0.5, 1], opacity: [0, 1] }, { duration: 0.2 })
    }
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'group inline-flex items-center gap-3 px-4 py-2.5',
        'bg-[--color-bg-3] border border-[--color-border] rounded-lg',
        'font-mono text-[13px] text-[--color-muted] cursor-pointer',
        'transition-colors hover:border-[--color-accent]/40 max-w-full overflow-hidden',
        className
      )}
      title="Click to copy"
    >
      <span className="text-[--color-green] select-none">$</span>
      <span className="text-[--color-text] truncate">{INSTALL_CMD}</span>
      <span
        className="ml-1 text-[--color-muted] group-hover:text-[--color-text] transition-colors"
        aria-label={copied ? 'Copied' : 'Copy'}
      >
        {copied ? (
          <span ref={checkRef}>
            <Check size={14} className="text-[--color-green]" />
          </span>
        ) : (
          <Copy size={14} />
        )}
      </span>
    </button>
  )
}
