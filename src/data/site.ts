export const forumUrl = 'https://forum.awiser.one/'

export const samplePdf = '/Sample.pdf'

export type Model = {
  slug: string
  name: string
  lead: string
  body: string
  image: string
  imageAlt: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type StoreCard = {
  name: string
  lines: string[]
  image?: string
  imageAlt?: string
  download?: { href: string; label: string }
}

export const models: Model[] = [
  {
    slug: '9-star-gathering',
    name: '9 Star Gathering Model',
    lead: 'For Creativeness,',
    body: 'Extend your brain for creative ideas for product design/invention, find a new way out of difficulities or hanlde any challenges in a way nobody tried before. In an AI era, creativeness ability is overall a great gift for those who wants not only to survive but to thrive.',
    image: '/images/Creativity-C.png',
    imageAlt:
      '9 Star Gathering Model - For Creativeness, Extend your brain for creative ideas for product design/invention, find a new way out of difficulities or hanlde any challenges in a way nobody tried before.',
  },
  {
    slug: 'remote-control',
    name: 'Remote Control Model',
    lead: 'To Connect Things have hiden relationships,',
    body: 'Obvious relationships between things had been taken advantages by others earlier, use this model to help deeply find those relatioships hiden between things, thus gain the maxium benefits from it, like finding investment opportunities, lock a job among competitors, gain promotion in a team.',
    image: '/images/Remote-C.png',
    imageAlt:
      'Remote Control Model - To Connect Things have hiden relationships. Use this model to find relationships hidden between things.',
  },
  {
    slug: 'building-blocks',
    name: 'Building Blocks Model',
    lead: 'Identify The Key Factors of things,',
    body: 'Without the solid understanding of basic of things (someone calls this as First Principle), one cannot solve any problems raised anywhere. Identifying the factors of things, find more to extend and expand.',
    image: '/images/BuildingBlock.png',
    imageAlt:
      'Building Blocks Model - Identify The Key Factors of things. Without the solid understanding of basic of things, one cannot solve any problems raised anywhere.',
  },
  {
    slug: 'ecosystem',
    name: 'Ecosystem Model',
    lead: "Predict things' future and trend in a scientific and systematic way,",
    body: 'Nature is composed of big or small ecosystems everywhere, so should we analyze things like nature showing us in a system and dynamic mindset not static and fixed. Having this ability, one can pricisely find the trend and future of things in a system with confidence of probability.',
    image: '/Ecosystem.svg',
    imageAlt:
      'Ecosystem Model - Predict things future and trend in a scientific and systematic way.',
  },
  {
    slug: 'matrix',
    name: 'Matrix Model',
    lead: 'Make wisdom and best choice,',
    body: 'More options usually not lead to better decision but hesitation and losing of oppotunity. This modle help you choise the best options based on calculation and detailed comparing. It helps reduce of overthinking and make the best choces quickest.',
    image: '/images/Selection.png',
    imageAlt: 'Matrix Model - Make wisdom and best choice.',
  },
  {
    slug: 'barbell',
    name: 'Barbell Model',
    lead: "Meeting people's Desire, gain what you want,",
    body: "Human nature is to gain benefit for self, human's requirements are to be satisfied with basic life material till self-fulfillment. To gain what you want, the best and quikest way is to give other's what they want first.",
    image: '/BarBell.svg',
    imageAlt: 'Barbell Model - Meeting people desire, gain what you want.',
  },
  {
    slug: 'honeycomb',
    name: 'Honeycomb Model',
    lead: 'Clearly understand your problems,',
    body: 'Jumping to finding a solution is usually means jump twice or more, before taking actions, analyze your problem deeply and widely always be the first step. Completing the first step, for most problems, its solutions even become obvious, or tack any solution in a resonable way.',
    image: '/images/HoneyComb.png',
    imageAlt: 'Honeycomb Model - Clearly understand your problems.',
  },
  {
    slug: 'magnifying-glass',
    name: 'Magnifying glass Model',
    lead: 'Divide things into smaller pieces prompts understanding and handling,',
    body: 'Things are not seemed simple, divide it into parts in different angles to help us understand it and remember its components, finding machanism to gain more ideas to handle it.',
    image: '/MagnifyingGlass.svg',
    imageAlt: 'Magnifying glass Model - Divide things into smaller pieces.',
  },
  {
    slug: 'collapsible-telescope',
    name: 'Collapsible Telescope Model',
    lead: 'Detect deep root cause,',
    body: 'Huamn nature not changed for thousands years, for most complicated problems caused by human nature can be easily identified. And for a related world, we need a thinking model to help us find the root cause in a workable way.',
    image: '/Telescope.svg',
    imageAlt: 'Collapsible Telescope Model - Detect deep root cause.',
  },
  {
    slug: 'filter',
    name: 'Filter Model',
    lead: 'Verifying a Guess via Reference,',
    body: 'To make sure something is what you guessed, just using the model to setup a reference first then compare all the items between to find how much they are same to gain confidence.',
    image: '/FilterPurifier.svg',
    imageAlt: 'Filter Model - Verifying a Guess via Reference.',
  },
  {
    slug: 'coordinate-system',
    name: 'Coordinate System Model',
    lead: 'Macking Vest Decision in all Angles,',
    body: 'Everyone need to make decisons small or big. More factors messed up makes us cannot see the clear clue while less factors makes us missing something. Based on 8 directions of analysis covering all aspects, this model helps people make the best decison',
    image: '/CoordinationSystem.svg',
    imageAlt: 'Coordinate System Model - Making the best decision in all angles.',
  },
  {
    slug: 'neural-tree',
    name: 'Neural Tree Model',
    lead: 'Know How Everything Organized,',
    body: "Both human's brain and the Universe is structured in a Tree format, which is also most knowledge and material organized. To learn knowledge or some complicated things via a tree structure has been proved efficient with a deep understanding and long time memory.",
    image: '/images/NerveTree.png',
    imageAlt: 'Neural Tree Model - Know how everything is organized.',
  },
]

export const faqs: FaqItem[] = [
  {
    question: '... What does this website provide?',
    answer:
      "This is AWISER's official website, mainly and briefly about digital products instruction so there's no direct purchase purposes. For any product's details you can visit the community discussion Forum where you can find posts from AWISER staff and professionals, users about anything such as a specific thinking model. also you can read some blogs there with deep insight.",
  },
  {
    question: '... What is a thinking model?',
    answer:
      'A Thinking Model is a vidual component which act as a base object with parts for a specific type of things which could be thought of clearly or easily. People can use it to create a thinking flow (clue) by bring out all kinds of stuff in their brain and information fetched into different parts of the visual model, then get insight of things or figure out a solution. Also the thinking model can drive people to fill up information required to fulfill the analysis process.',
  },
  {
    question: '... What is a Behavior Model?',
    answer:
      'A Behavior Model is also a vidual component which helps people bahave in a decent way. Besides gaining business benefits like being accepted easily by existed and new customers but also helps gain personal reputation and friendship. Above the practical models, the base Bahavior Models shows a proved direction and practice principle for people to always keeps in the right path with beneficial mindset and an efficient practice guidance.',
  },
  {
    question: '... What is a Speech Model?',
    answer:
      'With Thinking models and Behavior models, people can be more successful and gain what they wanted in their life, but not quite enough. They also need to express themselves in a way others like and enjoy and being intersted/focused, at least gain trust. Based on thinking and bahavior models and those priciples behind of them, Speech Model can help people speak, communicate or chat with others in the best pattern while keeping their honesty and kindness.',
  },
]

export const stores: StoreCard[] = [
  {
    name: 'iBooks Store',
    lines: [
      'Thinking Models - Available soon',
      'Behavior Models - in developing',
      'Speech Models - in developing',
    ],
  },
  {
    name: 'Amazon Store',
    lines: [
      'Actionable Thinking Models:',
      'A Revolutionary Thinking Tool for Achieving Multiple-Brain Power',
    ],
    image: '/images/Cover-2-Website.jpg',
    imageAlt: 'Actionable Thinking Models book cover',
    download: { href: samplePdf, label: 'Download Sample PDF' },
  },
  {
    name: 'Google Play Books',
    lines: [
      'Thinking Models - Available soon',
      'Behavior Models - in developing',
      'Speech Models - in developing',
    ],
  },
]

export function getModel(slug: string | undefined): Model | undefined {
  return models.find((model) => model.slug === slug)
}
