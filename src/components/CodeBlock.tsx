import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { cn } from '../lib/utils'

interface CodeBlockProps {
  title?: string
  code: string
  /** Render code as raw HTML (for syntax-highlighted spans) */
  html?: boolean
  copyable?: boolean
  className?: string
}

export default function CodeBlock({ title, code, html = false, copyable = true, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    // Strip HTML tags for plain text copy
    const plain = html ? code.replace(/<[^>]+>/g, '') : code
    await navigator.clipboard.writeText(plain)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn('rounded-lg border border-[--color-border] overflow-hidden', className)}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-[--color-bg-3] border-b border-[--color-border]">
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <span className="font-mono text-xs text-[--color-muted] cursor-default select-none">
                {title}
              </span>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-[--color-bg-3] border border-[--color-border] text-[--color-muted] text-xs px-3 py-1.5 rounded-md"
                sideOffset={5}
              >
                Click to copy full snippet
                <Tooltip.Arrow className="fill-[--color-border]" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>

          {copyable && (
            <button
              onClick={handleCopy}
              className="text-[--color-muted] hover:text-[--color-text] transition-colors"
              aria-label={copied ? 'Copied' : 'Copy code'}
            >
              {copied ? <Check size={13} className="text-[--color-green]" /> : <Copy size={13} />}
            </button>
          )}
        </div>
      )}
      <div className="bg-[--color-bg-3] overflow-x-auto">
        <pre className="p-5 font-mono text-[13px] leading-[1.7] text-[--color-text]">
          {html ? (
            <code dangerouslySetInnerHTML={{ __html: code }} />
          ) : (
            <code>{code}</code>
          )}
        </pre>
      </div>
    </div>
  )
}
