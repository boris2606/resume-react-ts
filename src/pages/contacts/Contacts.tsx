import React, {useEffect} from 'react';
import AOS from 'aos';
import './Contacts.scss'
import contactsHr from '../../img/hr_image.svg'
import EmailJs from '../../components/email-from/EmailJs';
import Footer from '../../components/footer/Footer';

const Contacts = () => {
    useEffect(() => {
        AOS.init() 
    })
    return (
        <main className='wrapper_contacts'>
            <div className='contacts_content'>
                <p className='contacts_tit_text' data-aos="zoom-in" data-aos-duration="1300">contact</p>
                <img className='contacts_hr' src={contactsHr} alt='About line'/>
                <EmailJs/>
            </div>
            <Footer/>
        </main>
    );
};

export default Contacts;