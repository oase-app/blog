import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const people = [
  {
    name: 'Edmonia Baker',
    description:
      'Edmonia contributes with her deep knowledge and understanding of complexity, diversity and storytelling.',
    link: { href: 'https://www.linkedin.com/in/edmoniabaker/', label: 'LinkedIn' },
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEhvrIqE17pUw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516322822712?e=1745452800&v=beta&t=U40jOgQaAOpjsul0wA-79tTrsA9sH-wwqGPeqpRxhb8"
  },
  {
    name: 'Mie Oehlenschläger',
    description:
      'With her deep understanding and huge network within the political space, Mie knows what is up and down, and which tendencies to keep up with especially within child protection.',
    link: { href: 'https://www.linkedin.com/in/mie-oehlenschl%C3%A4ger-78b26321/', label: 'LinkedIn' },
    image: "https://media.licdn.com/dms/image/v2/C5603AQE9ruaqYxk_Ow/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1520006070710?e=1745452800&v=beta&t=o6W6T9OACwoDdeTcoSqjtdvLZ9lqxPoFx6wrGVfr0sE"
  },
  {
    name: 'Pernille Tranberg',
    description: 'Data ethicist at heart, Pernille can help us making the right decision ensuring strong privacy and security.',
    link: { href: 'https://www.linkedin.com/in/pernilletranberg/', label: 'LinkedIn' },
    image: "https://media.licdn.com/dms/image/v2/C4E03AQE0w-fhFqlbCg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1644512300331?e=1745452800&v=beta&t=qL-pPijBPE2OtYW3Y1SKeH73Ahgzhuf2dic7xwfFDWE"
  },
  {
    name: 'Mette Wiinblad Andersen',
    description: 'With her experience driving the marketing, communications and business forward for several successfull and respectable brands, Mette shares her insight about go-to-market strategies and business development.',
    link: { href: 'https://www.linkedin.com/in/metteandersen/', label: 'LinkedIn' },
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHxPJ31LmN7cg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730366365125?e=1745452800&v=beta&t=PhjtjEsnPixG2hmcsHaJ7M7zrsk9_mvJLHpw21elFoU"
  },
  {
    name: 'Anne Kroijer',
    description: 'With her unrelenting energy, Anne provides clear guidance within market analysis, business development and governance.',
    link: { href: 'https://www.linkedin.com/in/annekroijer/', label: 'LinkedIn' },
    image: "https://media.licdn.com/dms/image/v2/C4E03AQGMHufYaiO2ww/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1637787016782?e=1745452800&v=beta&t=AKc6dqrUm20RW5VC0JTOdv3-VdUkmMWyOKTdQ-WZjfo"
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
  description: "Meet our brilliant advisors. We feel genuinely humbled and thankfull that these people are willing to share their knowledge with us. Thank you!"
}

export default function People() {
  return (
    <>
      <Head>
        <title>{metadata.title} - Oase</title>
        <meta
          name="description"
          content={metadata.description}
        />
      </Head>
      <SimpleLayout
        title={metadata.title}
        intro={metadata.description}
      >
        {
          // Included to make sure OG image is oase
        }
        <Image
          src={"https://oase.app/favicon.png"}
          width={64}
          height={64}
          alt=""
          sizes="(min-width: 1024px) 32rem, 20rem"
          className="aspect-square hidden object-cover"
        />
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

