import React, {useState} from 'react';
import './EmailJs.scss'
import emailjs from 'emailjs-com';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const EmailJs = () => {
    const [number, setNumber] = useState()

    function sendEmail(e:any) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_szrljzo', 'template_zimfhwg', e.target, '5hkDIu5tpw1iOeVR_')
            .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section className='email_form_wrapper'>
            <div className='email_form_content'>
                <form className="contact_form" onSubmit={sendEmail}>
                    <div className='field_box'>
                        <input className='form_inputs' type="text" name="from_name" placeholder='Enter your name*' required/>
                        <p className='descr_field_text'>Please enter a name</p>
                    </div>
                    <div className='field_box'>
                        <input className='form_inputs' type="email" name="from_email" placeholder='Enter your email*' required/>
                        <p className='descr_field_text'>Email</p>
                    </div>
                    <div className='phone_box'>
                        <PhoneInput
                            international={true}
                            placeholder="Phone number"
                            name="person_phone"
                            value={number}
                            onChange={() => setNumber}/>
                        <p className='descr_field_text'>Enter the phone using the country code in the format 380(UA) or 1(USA) or select a country</p>
                    </div>
                    <div className='field_box'>
                        <textarea className='form_text' name="html_message" placeholder='YOUR MESSAGE*' required/>      
                        <p className='descr_field_text'>Please enter a message and briefly describe what you are interested in</p>
                    </div>
                    <button className='submit_form_btn' type="submit">submit</button>
                </form>
            </div>
        </section>
    );
};

export default EmailJs;