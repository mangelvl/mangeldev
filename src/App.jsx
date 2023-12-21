import { Error } from './components/error/error'
import { Footer } from './components/navigation/Footer'
import { NavBar } from './components/navigation/NavBar'
import { Home } from './components/pages/home/home'

export function App () {
  return (
    <>
      <NavBar />
      <Home />
      <Error />
      <Footer />
    </>
  )
}
