import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Oase</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>
      <SimpleLayout
        title="Thanks for subscribing."
        intro="We’ll send you an email any time we publish a new blog post, release a new project, or have anything interesting to share that we think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
