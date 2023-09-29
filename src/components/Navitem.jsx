import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navitem = (props) => {
    const [click, setClick] = useState(false);

    const closeMobileMenu = () => setClick(false);

    return (
        <li className='nav-item'>
            <Link to={props.item === 'Home' ? '/' : '/' + props.item} className='nav-links' onClick={closeMobileMenu}>
                {props.item}
            </Link>
        </li>
    )
}

export default Navitem