import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { FaBars, FaTimes} from 'react-icons/fa'

import './Navbar.scss'
import url from '../../img/Códigohábil.svg';

const Navbar = ()=>{
    const [click, setClick] = useState(false);

    
    return(
    <nav class="navbar">
        <div className="menu" onClick={()=>setClick((el)=>!el)}>
            {!click ? <FaBars/> : <FaTimes/>}
        </div>

        <Link to="/">
            <img src={url} alt="logo"/>
        </Link>
        
    </nav>)
}

export default Navbar;