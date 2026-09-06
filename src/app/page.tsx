import SectionMotion from '@/components/SectionMotion'
import Contact from '@/components/Contact'
import Expertise from '@/components/Expertise'
import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import Introduction from '@/components/Introduction'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Service from '@/components/Service'

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="fixed left-4 top-4 z-50 -translate-y-24 rounded bg-accent px-5 py-3 text-accent-foreground focus:translate-y-0">Skip to content</a>
      <Header />
      <SectionMotion />
      <main id="main-content">
        <Main />
        <Projects />
        <Introduction />
        <Expertise />
        <Service />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
