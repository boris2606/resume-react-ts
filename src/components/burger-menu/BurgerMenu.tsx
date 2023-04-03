import React from 'react';
import { useSelector } from 'react-redux';
import { Navigation } from '../../modelsTypes';
import menu from '../../img/menu.svg'
import close from '../../img/close.svg'
import logo from '../../img/logo.webp'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure
} from '@chakra-ui/react'
import './BurgerMenu.scss'
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
    const navigation = useSelector((state: any) => state.toolkit.navigation)

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className='wrapper_burger_menu'>
            <img src={menu} alt="Menu" onClick={onOpen}/>
            <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay onClick={onClose} className='burger_overlay'/>
                <DrawerContent className='burger_content'>
                    <DrawerHeader className='burger_header'>
                        <img src={logo} className="burger_logo" alt='Logo'/>
                        <img src={close} onClick={onClose} className="burger_close" alt='Logo'/>
                    </DrawerHeader>
                    <hr className='burger_hr'/>
                    <DrawerBody className='burger_main'>
                        {navigation.map((link:Navigation, index:number) => <Link key={index} to={link.path}>{link.name}</Link>)}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default BurgerMenu;