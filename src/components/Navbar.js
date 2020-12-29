import React, { useState } from 'react';

import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Navbar.constant';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {

    return (
        <>
            <nav className='nav-menu active'>
                <ul className='nav-menu-items'>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className='nav-text'>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
