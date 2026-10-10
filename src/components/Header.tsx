import { useState } from 'react'
import { Link } from 'react-router-dom'
import { forumUrl } from '../data/site'

const links = [
  { label: 'Forum', href: forumUrl, external: true },
  { label: 'Contact', href: '/#contact', external: false },
  { label: 'About', href: '/#about', external: false },
  { label: 'Home', href: '/#intro', external: false },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/#intro" className="brand" onClick={() => setOpen(false)}>
          <img src="/LogoAwiser1.svg" alt="AWISER" />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
        <nav id="site-nav" className={open ? 'site-nav open' : 'site-nav'}>
          {links.map((link) =>
            link.external ? (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}
