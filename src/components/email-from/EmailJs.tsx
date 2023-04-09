import React, {useState, useEffect} from 'react';
import AOS from 'aos';
import './EmailJs.scss'
import emailjs from 'emailjs-com';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const EmailJs = () => {
    const [number, setNumber] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    
    useEffect(() => {
        AOS.init() 
    })

    function validation(e:any){
        if(e.target.name === 'from_name'){
            setName(e.target.value)
        } else if (e.target.name === 'from_email'){
            setEmail(e.target.value)
        } else if (e.target.name === 'person_phone'){
            setNumber(e.target.value)
        } else if (e.target.name === 'html_message'){
            setMessage(e.target.value)
        } else {
            e.target.classList.add('unchecked')
        }
    }

    function sendEmail(e:any) {
        e.preventDefault(); 
        setNumber(' ')
        setName('')
        setEmail('')
        setMessage('')
    
        emailjs.sendForm('service_szrljzo', 'template_zimfhwg', e.target, '5hkDIu5tpw1iOeVR_')
            .then((result) => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Message sent, expect a response soon',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section className='email_form_wrapper'>
            <div className='email_form_content'>
                <form className="contact_form" onSubmit={sendEmail}>
                    <div className='field_box' data-aos="zoom-in" data-aos-duration="1000">
                        <input className='form_inputs' 
                                type="text" 
                                name="from_name" 
                                value={name}
                                onChange={(e)=> validation(e)}
                                placeholder='Enter your name*' required/>
                        <p className='descr_field_text'>Please enter a name</p>
                    </div>
                    <div className='field_box' data-aos="zoom-in" data-aos-duration="1300">
                        <input className='form_inputs'
                                type="email" 
                                name="from_email" 
                                value={email}
                                onChange={(e)=> validation(e)}
                                placeholder='Enter your email*' required/>
                        <p className='descr_field_text'>Email "...@.. . .."</p>
                    </div>
                    <div className='phone_box' data-aos="zoom-in" data-aos-duration="1600">
                        <PhoneInput
                            international={true}
                            placeholder="Phone number"
                            name="person_phone"
                            value={number}
                            onChange={()=> setNumber}/>
                        <p className='descr_field_text'>Enter the phone using the country code in the format 380(UA) or 1(USA) or select a country</p>
                    </div>
                    <div className='field_box' data-aos="zoom-in" data-aos-duration="1900">
                        <textarea className='form_text'
                                    name="html_message"
                                    value={message}
                                    onChange={(e)=> validation(e)}
                                    placeholder='YOUR MESSAGE*' required/>      
                        <p className='descr_field_text'>Please enter a message and briefly describe what you are interested in</p>
                    </div>
                    <button className='submit_form_btn' type="submit">submit</button>
                </form>
            </div>
        </section>
    );
};

export default EmailJs;