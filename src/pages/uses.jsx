import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Oase</title>
        <meta
          name="description"
          content="Software we use to build Oase."
        />
      </Head>
      <SimpleLayout
        title="Software we use to build Oase."
        intro="We use a lot of different software to build Oase. Here are some of them."
      >
        <div className="space-y-20">
          <ToolsSection title="Server">
            <Tool title="Phoenix Framework">
              As Oase has real-time at heart, we choose Phoenix Framework as our backend framework. Phoenix is a web framework for the Elixir programming language that are especially good at real-time.
            </Tool>
            <Tool title="Elixir">
              Worth mentioning is that we use Elixir as our programming language. Elixir is a dynamic, functional language designed for building scalable and maintainable applications. It runs on the Erlang VM, which is famous for being reliable.
            </Tool>
            <Tool title="PostgreSQL">
              All data are stored in PostgreSQL. PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.
            </Tool>
          </ToolsSection>
          <ToolsSection title="App and web">
            <Tool title="Solito">
              Solito is the missing piece for using React Native with Next.js to build powerful cross-platform apps.
            </Tool>
            <Tool title="React Native">
              Being only one developer, and wanting to support both web and native, React Native was the obvious choice for us. React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities.
            </Tool>
            <Tool title="Next.js">
              Next.js serves our React Native app on the web. Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.
            </Tool>
            <Tool title="Phoenix Framework">
              Phoenix provides Javascript clients for their web sockets, which makes it easy to build real-time apps. We use this to build our real-time chat.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
