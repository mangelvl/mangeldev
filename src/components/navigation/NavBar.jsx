export function NavBar () {
  return (
    <nav className='nav-bar'>
      <div className='nav-logo'>
        <a href='#'>Logo</a>
      </div>
      <ul className='nav-links'>
        <li>
          <a href='#header'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#education'>Education</a>
        </li>
      </ul>
    </nav>
  )
}
