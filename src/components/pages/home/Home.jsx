import { About } from './About'
import { Education } from './Education'
import { Header } from './Header'
import { Projects } from './Projects'
import { Skills } from './Skills'

export function Home () {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Education />
      </main>
    </>
  )
}
