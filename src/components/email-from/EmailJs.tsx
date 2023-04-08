import React from 'react';
import './EmailJs.scss'
import emailjs from 'emailjs-com';

const EmailJs = () => {

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
                    <label>Phone</label>
                    <input type="text" name="person_phone" />
                    <label>Name</label>
                    <input type="text" name="from_name" />
                    <label>Email</label>
                    <input type="email" name="from_email" />
                    <label>Message</label>
                    <textarea name="html_message" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </section>
    );
};

export default EmailJs;