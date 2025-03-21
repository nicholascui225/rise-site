import Head from 'next/head';
import About from './components/about';
import Hero from './components/hero';
import Prizes from './components/prizes';
import Rounds from './components/rounds';
import Team from './components/team';
import Schedule from './components/schedule';
import Faq from './components/faq';
import Sponsors from './components/sponsors';

export default function Home() {
  return (
    <>
      {/* Add Primary Meta Tags Here */}
      <Head>
        <title>CHS RISE Conference</title>
        <meta
          name="description"
          content="Join Centennial High School's RISE conference, a premier event for STEM learning and development. Explore exciting events, workshops, and opportunities."
        />
        <meta
          name="keywords"
          content="CHS RISE, conference, RISE, Centennial, Centennial High, Centennial High School"
        />
        <meta name="author" content="CHS RISE Team" />
      </Head>

      {/* Your Page Content */}
      <main className="flex min-h-screen flex-col bg-black">
        <Hero></Hero>
        <About></About>
        <Faq></Faq>
        {/* <Prizes></Prizes> */}
        <Schedule></Schedule>
        <Team></Team>
        <Sponsors></Sponsors>
      </main>
    </>
  );
}