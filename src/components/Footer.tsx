import LogoMark from './LogoMark'

const links = [
  { label: 'GitHub', href: 'https://github.com/cooperdunkin/agent-secrets-vault', external: true },
  { label: 'Issues', href: 'https://github.com/cooperdunkin/agent-secrets-vault/issues', external: true },
  { label: 'npm', href: 'https://www.npmjs.com/package/agent-secrets-vault', external: true },
  { label: 'Contact', href: 'mailto:cooperdunkin228@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[--color-border] py-10 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2 text-xs text-[--color-muted]">
          <LogoMark size={16} className="text-[--color-text] opacity-40" />
          <span>© 2026 Aegis. Agent Secrets Vault is MIT licensed.</span>
        </div>
        <nav className="flex items-center gap-5">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-xs text-[--color-muted] hover:text-[--color-text] transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
