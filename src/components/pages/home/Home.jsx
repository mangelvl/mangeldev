import { About } from './About'
import { Education } from './Education'
import { Header } from './Header'
import { Projects } from './Projects'

export function Home () {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Education />
      </main>
    </>
  )
}
