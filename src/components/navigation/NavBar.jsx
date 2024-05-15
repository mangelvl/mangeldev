export function NavBar () {
  return (
    <nav className='nav-bar'>
      <div className='logo'>
        <h1>MangelDev</h1>
      </div>
      <div>
        <ul className='nav-links'>
          <li>
            <a href='#header'>inicio</a>
          </li>
          <li>
            <a href='#about'>sobre mi</a>
          </li>
          <li>
            <a href='#projects'>proyectos</a>
          </li>
          <li>
            <a href='#skills'>habilidades</a>
          </li>
          <li>
            <a href='#education'>educación</a>
          </li>
        </ul>
      </div>
      <button type='button'>Click Me!</button>
    </nav>
  )
}
