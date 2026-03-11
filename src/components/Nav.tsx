import { useEffect, useRef, useState } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import { animate, scroll } from 'motion'
import LogoMark from './LogoMark'
import { cn } from '../lib/utils'

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'GitHub', href: 'https://github.com/cooperdunkin/agent-secrets-vault', external: true },
]

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!navRef.current) return
    const nav = navRef.current
    scroll(
      animate(nav, { borderBottomColor: ['rgba(26,31,46,0)', 'rgba(26,31,46,1)'] }),
      { target: document.documentElement, offset: [0, 0.04] }
    )
  }, [])

  return (
    <nav
      ref={navRef}
      id="nav"
      className="sticky top-0 z-50 border-b border-transparent bg-[--color-bg]/90 backdrop-blur-md"
    >
      <div className="max-w-5xl mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <LogoMark size={24} className="text-[--color-text]" />
          <span className="text-[15px] font-semibold text-[--color-text] tracking-tight">Aegis</span>
          <span className="font-mono text-xs text-[--color-muted]">/ ASV</span>
        </a>

        {/* Desktop nav */}
        <NavigationMenu.Root className="hidden md:flex items-center gap-6">
          <NavigationMenu.List className="flex items-center gap-6 list-none m-0 p-0">
            {links.map(link => (
              <NavigationMenu.Item key={link.label}>
                <NavigationMenu.Link
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="text-sm font-medium text-[--color-muted] hover:text-[--color-text] transition-colors no-underline"
                >
                  {link.label}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>

          <a
            href="#waitlist"
            className={cn(
              'inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold no-underline',
              'border border-[--color-border] text-[--color-text] bg-[--color-bg-3]',
              'hover:border-[--color-accent]/25 hover:bg-[--color-bg-2] transition-colors'
            )}
          >
            Get Early Access
          </a>
        </NavigationMenu.Root>

        {/* Mobile menu */}
        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Trigger asChild>
            <button className="md:hidden text-[--color-muted] hover:text-[--color-text] transition-colors p-1">
              <Menu size={20} />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-72 bg-[--color-bg-2] border-l border-[--color-border] flex flex-col p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="font-semibold text-[--color-text]">Menu</span>
                <Dialog.Close asChild>
                  <button className="text-[--color-muted] hover:text-[--color-text] transition-colors">
                    <X size={18} />
                  </button>
                </Dialog.Close>
              </div>
              <nav className="flex flex-col gap-4">
                {links.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-[--color-muted] hover:text-[--color-text] transition-colors no-underline text-sm font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#waitlist"
                  className={cn(
                    'mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold no-underline',
                    'border border-[--color-border] text-[--color-text] bg-[--color-bg-3]',
                    'hover:border-[--color-accent]/25 transition-colors'
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  Get Early Access
                </a>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </nav>
  )
}
