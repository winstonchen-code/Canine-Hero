import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Pet Hero
                    </Link>
                    <div className='menu-icon' onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Find-A-Pet' className='nav-links' onClick={closeMobileMenu}>
                                Find a Pet 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Adoption-Info' className='nav-links' onClick={closeMobileMenu}>
                                Adoption Info 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Sign-Up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up 
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
