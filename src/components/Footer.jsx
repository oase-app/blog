import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="https://oase.app">App</NavLink>
                <NavLink href="/feedback">Feedback</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="https://changelog.oase.app">Changelog</NavLink>
                <NavLink href="/uses">Uses</NavLink>
                <NavLink href="/terms">Terms</NavLink>
                <NavLink href="/privacy">Privacy</NavLink>
                <NavLink href="/sales-terms">Sales terms</NavLink>
              </div>
              <div className="flex flex-col items-center gap-1 text-sm text-zinc-400 dark:text-zinc-500 sm:items-end">
                <p>
                  &copy; {new Date().getFullYear()} Our Oase ApS. All rights
                  reserved.
                </p>
                <p>CVR-nr. DK43969161 &middot; Præstegårds Allé 50, 2700 Brønshøj</p>
                <p>
                  <a
                    href="tel:+4520442127"
                    className="transition hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    +45 20 44 21 27
                  </a>
                  {' · '}
                  <a
                    href="mailto:info@oase.app"
                    className="transition hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    info@oase.app
                  </a>
                </p>
              </div>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
