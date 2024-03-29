import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button.js'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Canine Hero
                    </Link>
                    <div className='menu-icon' onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    
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
                            <Link to='/Sign-Up' className='nav-links' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Log-In' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Log In 
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Log In</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
