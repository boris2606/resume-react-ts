import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navigation } from '../../modelsTypes';
import { motion } from "framer-motion"
import Logo from '../../img/logo.webp'
import BurgerMenu from '../../components/burger-menu/BurgerMenu';
import './Header.scss'

const Header = () => {

    const navigation = useSelector((state: any) => state.toolkit.navigation)

    return (
        <header className='wrapper_header'>
            <section className='wrapper_content'>
                <div className='wrapper_logo_box'>
                    <Link to='/'>
                        <motion.img className='wrapper_logo' src={Logo} alt='Logo'
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: [0, 0.71, 0.2, 1.01],
                                scale: {
                                    type: "spring",
                                    damping: 5,
                                    stiffness: 100,
                                    restDelta: 0.001
                                }
                            }} />
                    </Link>
                </div>
                <nav className='header_nav'>
                    {navigation.map( (link:Navigation,index:number) =><Link key={index} to={link.path}>{link.name}</Link>)}
                </nav>
                <BurgerMenu/>
            </section>
        </header>
    );
};

export default Header;