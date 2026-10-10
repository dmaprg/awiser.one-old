import { About } from '../components/About'
import { Faq } from '../components/Faq'
import { Hero } from '../components/Hero'
import { ModelGrid } from '../components/ModelGrid'
import { Stores } from '../components/Stores'
import { usePageMeta } from '../hooks/usePageMeta'

const title = 'AWiser.One, make you A Wiser One with thinking, behavior and speech models'
const description =
  'Transform Your Life with this creativeness Website Providing Thinking, Behavior, and Speech Models. These Models help you gain deep insight into things and behave, speak in an efficient and welcome way to gain career advantages, success and friends.'

export function Home() {
  usePageMeta(title, description)

  return (
    <main>
      <Hero />
      <Stores />
      <About />
      <Faq />
      <ModelGrid />
    </main>
  )
}
