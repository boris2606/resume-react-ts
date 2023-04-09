import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Error.scss'

const Error = () => {
    return (
        <main className='wrapper_error'>
            <Header/>
            <div className='error_content'>
                <p className='error_number'>404</p>
                <p className='error_text'>Page not found</p>
            </div>
            <Footer/>
        </main>
    );
};

export default Error;