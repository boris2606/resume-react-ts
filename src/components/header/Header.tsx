import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.webp'
import { Navigation } from '../../modelsTypes';
import { motion } from "framer-motion"

const Header = () => {

    const navigation = useSelector((state: any) => state.toolkit.navigation)

    return (
        <header className='wrapper_header'>
            <motion.img src={Logo} alt='Logo' initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
            }} />
            <nav className='header_nav'>
                {navigation.map( (link:Navigation) =><Link to={link.path}>{link.name}</Link>)}
            </nav>
        </header>
    );
};

export default Header;