import About from './components/about'
import Hero from './components/hero'
import Prizes from './components/prizes'
import Rounds from './components/rounds'
import Team from './components/team'
import Schedule from './components/schedule'
import Faq from './components/faq'
import Sponsors from './components/sponsors'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero></Hero>
      <About></About>
      <Faq></Faq>
      {/* <Prizes></Prizes> */}
      <Schedule></Schedule>
      <Team></Team>
      <Sponsors></Sponsors>
    </main>
  )
}
