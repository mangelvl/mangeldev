import { Error } from './components/error/Error'
import { Footer } from './components/navigation/Footer'
import { NavBar } from './components/navigation/NavBar'
import { Home } from './components/pages/home/Home'

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
