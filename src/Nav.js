import { useState, useEffect } from "react"

const Nav = () => {
  const [isHamburger, setIsHamburger] = useState(false)
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsHamburger(true);
      } else {
        setIsHamburger(false);
      }
      
    }
    window.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }

  }, [])

  console.log(isHamburger)
  if (!isHamburger){
    return (
        <nav className='navbar'>
        <div className='logo'>
          <img id='logo-img' src='./logo.png'/>
        </div>
        <a className='nav-item' href=''>Home</a>
        <a className='nav-item' href=''>About</a>
        <a href='#projects' className='nav-item' >Projects</a>
        <a href="#contact"  className='nav-cta-btn'>
          Say Hi!
        </a>
      </nav>
    )}else {
      return (
        <nav className="navbar">
        <div className="logo">
        <img id='logo-img' src='./logo.png'/>
        </div>

        <button onClick={()=> {setIsActive(true)}} className='menu-icon'><ion-icon  name="menu-outline"></ion-icon></button>
        { isActive && <div id="nav-model" onClick={()=> {setIsActive(false)}}>
        <div id='nav-model-container' onClick={(e)=> {e.stopPropagation()}}>
        <a className='nav-item' onClick={()=> {setIsActive(false)}} href=''>Home</a>
        <a className='nav-item' onClick={()=> {setIsActive(false)}} href=''>About</a>
        <a href='#projects' onClick={()=> {setIsActive(false)}} className='nav-item' >Projects</a>
        <a href="#contact" onClick={()=> {setIsActive(false)}}  className='nav-cta-btn model-btn'>Say Hi!</a>
        </div>
        </div>}
        </nav>
      )
    }
}

export default Nav