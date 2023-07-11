import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Oase</title>
        <meta
          name="description"
          content="We're Oase. We live in Copenhagen, Denmark, where we build a platform for communities."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={"https://oase.app/favicon.png"}
                width={64}
                height={64}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square object-cover"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-b-medium tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              We&apos;re Oase. We live in Copenhagen, Denmark, where we build a platform for communities.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                The team, for now, is actually just Anders Lemke-Holstein.
              </p>
              <p>
                Anders has been building software for startups in Copenhagen since 2008 where he graduated from DTU with a degree in Computer Science.
              </p>
              <p>
                Most recently he was the architect and lead engineer laying the groundwork for the distribution platform for Zetland, a Danish media startup.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://www.twitter.com/anderslemke" icon={TwitterIcon}>
                Follow Anders on Twitter
              </SocialLink>
              <SocialLink href="https://www.github.com/anderslemke" icon={GitHubIcon} className="mt-4">
                Follow Anders on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/anderslemke/" icon={LinkedInIcon} className="mt-4">
                Follow Anders on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:anders@oase.app"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                anders@oase.app
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
