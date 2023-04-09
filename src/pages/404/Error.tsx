import React, {useEffect} from 'react';
import AOS from 'aos';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Error.scss'

const Error = () => {
    useEffect(()=>{
        AOS.init()
    })
    return (
        <main className='wrapper_error'>
            <Header/>
            <div className='error_content'>
                <p className='error_number' data-aos="zoom-in" data-aos-duration="1200">404</p>
                <p className='error_text' data-aos="zoom-in" data-aos-duration="1500">Page not found</p>
            </div>
            <Footer/>
        </main>
    );
};

export default Error;