import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const people = [
  {
    name: 'Peter Michael Oxholm Ziegler',
    description: 'With a keen strategic mind and a deep understanding of business development, Peter helps us navigate growth, partnerships, and sustainable scaling. His experience in building and leading successful ventures ensures we stay on the right track.',
    link: { href: 'https://www.linkedin.com/in/peter-michael-oxholm-zigler-9373603/', label: 'LinkedIn' },
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEy1TW4exLUfg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695283518508?e=1745452800&v=beta&t=Bsq5TqdeeGNAhCU6xwXFagzhdO6bDWKjrjEuYw6BYBQ"
  },
  {
    name: 'Mie Oehlenschläger',
    description:
      'With a vast network and deep insight into the political landscape, Mie understands the shifting dynamics—especially in child protection—and helps us stay ahead of key developments.',
    link: { href: 'https://www.linkedin.com/in/mie-oehlenschl%C3%A4ger-78b26321/', label: 'LinkedIn' },
    image: "https://media.licdn.com/dms/image/v2/C5603AQE9ruaqYxk_Ow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1520006070710?e=1745452800&v=beta&t=o6W6T9OACwoDdeTcoSqjtdvLZ9lqxPoFx6wrGVfr0sE"
  },
  {
    name: 'Pernille Tranberg',
    description: 'A true data ethicist, Pernille ensures we make the right choices when it comes to privacy and security, helping us uphold the highest standards.',
    link: { href: 'https://www.linkedin.com/in/pernilletranberg/', label: 'LinkedIn' },
    image: "https://media.licdn.com/dms/image/v2/C4E03AQE0w-fhFqlbCg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1644512300331?e=1745452800&v=beta&t=qL-pPijBPE2OtYW3Y1SKeH73Ahgzhuf2dic7xwfFDWE"
  },
  {
    name: 'Tav Klitgaard',
    description: 'An experienced leader in tech and digital transformation, Tav brings valuable insights into scaling organizations, strategy, and product development. His expertise helps us bridge the gap between vision and execution.',
    link: { href: 'https://www.linkedin.com/in/tavklitgaard/', label: 'LinkedIn' },
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGaogd3usHsbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726129683421?e=1746057600&v=beta&t=VxFa4hnLiVlqKC6iwABrU0kcqBjoa--D9ZUKri5CNWQ"
  },
  {
    name: 'Edmonia Baker',
    description:
      'With deep expertise in complexity, diversity, and storytelling, Edmonia helps us navigate and communicate the nuances of our mission.',
    link: { href: 'https://www.linkedin.com/in/edmoniabaker/', label: 'LinkedIn' },
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEhvrIqE17pUw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516322822712?e=1745452800&v=beta&t=U40jOgQaAOpjsul0wA-79tTrsA9sH-wwqGPeqpRxhb8"
  },
  {
    name: 'Mette Wiinblad Andersen',
    description: 'With extensive experience in marketing, communications, and business growth, Mette provides invaluable guidance on go-to-market strategies and business development.',
    link: { href: 'https://www.linkedin.com/in/metteandersen/', label: 'LinkedIn' },
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHxPJ31LmN7cg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730366365125?e=1745452800&v=beta&t=PhjtjEsnPixG2hmcsHaJ7M7zrsk9_mvJLHpw21elFoU"
  },
  {
    name: 'Anne Kroijer',
    description: 'Anne brings relentless energy and sharp expertise in market analysis, business development, and governance, offering clear and actionable guidance.',
    link: { href: 'https://www.linkedin.com/in/annekroijer/', label: 'LinkedIn' },
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGMHufYaiO2ww/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1637787016782?e=1745452800&v=beta&t=AKc6dqrUm20RW5VC0JTOdv3-VdUkmMWyOKTdQ-WZjfo"
  },
  {
    name: 'Katinka Bukh',
    description: 'An award-winning creative director, Katinka has a talent for distilling complexity to its core. She helps us define and express our values and principles with clarity.',
    link: { href: 'https://www.linkedin.com/in/katinkabukh/', label: 'LinkedIn' },
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGZ56fhu7taBA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699009476360?e=1745452800&v=beta&t=yZSmGcMa8t6tSGrxsp02F-sTVo7nraxFk_L8dWQrZJw"
  },
  // {
  //   name: '',
  //   description: '',
  //   link: { href: '#', label: 'LinkedIn' },
  //   image: ""
  // },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Advisory Board',
  description: "Meet our advisors. We feel genuinely humbled and grateful for their willingness to share their knowledge with us. Thank you!"
}

export default function People() {
  return (
    <>
      <Head>
        <title>{metadata.title} - Oase</title>
        <meta name="title" property="og:title" content={metadata.title} />
        <meta
          name="description"
          property="og:description"
          content={metadata.description}
        />
        <meta name="image" property="og:image" content="https://oase.app/og-image.png" />
      </Head>
      <SimpleLayout
        title={metadata.title}
        intro={metadata.description}
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {people.map((person) => (
            <Card as="li" key={person.name}>
              <div className="relative z-10 flex h-46 w-46 items-center justify-center rounded-full overflow-hidden bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={person.image}
                  alt=""
                  width="200"
                  height="200"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={person.link.href}>{person.name}</Card.Link>
              </h2>
              <Card.Description>{person.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{person.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

