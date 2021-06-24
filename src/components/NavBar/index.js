import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiBot, BiArrowFromBottom, BiArrowToBottom } from 'react-icons/bi'

function NavBar() {

    const [ click, setClick ] = useState( false );

    const handleClick = () => setClick( !click );

    return (
        <>
            {/* <div className="navbar">
                <div className="navbar-continer container">
                    <Link to="/" className="navbar-logo">
                        <BiBot className="navbar-icon" />
                        VELOCITY BOT
                    </Link>

                    <div className="menu-icon" onClick={ handleClick }>
                        { click ? <BiArrowFromBottom size={128} /> : <BiArrowToBottom size={128} /> }
                    </div>
                    
                </div>
                
            </div> */}
            
        </>
        
    )
}

export default NavBar
