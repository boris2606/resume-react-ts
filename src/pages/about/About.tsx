import React, {useEffect} from 'react';
import myPhoto from '../../img/my_photo.png'
import aboutHr from '../../img/hr_image.svg'
import './About.scss'
import { useSelector } from 'react-redux';
import { Offers } from '../../modelsTypes';
import { motion } from "framer-motion"
import ButtonLink from '../../components/button-link/ButtonLink';
import AOS from 'aos';
import Footer from '../../components/footer/Footer';
import ModalElement from '../../components/modal/ModalElement';


const About = () => {
    const offers = useSelector((state: any) => state.toolkit.offers)
    const educations = useSelector((state: any) => state.toolkit.educations)
    const experience = useSelector((state: any) => state.toolkit.experience)

    useEffect(()=>{
        AOS.init()
    })

    return (
        <main className='wrapper_about'>
            <div className='about_content'>
                <p className='about_me_tit' data-aos="zoom-in" data-aos-duration="1300">About me</p>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                    <img className='about_hr' src={aboutHr} alt='About line'/>
                    <div className='about_introduce_block'>
                        <div className='about_photo_wrapper'>
                            <img className='about_photo' src={myPhoto} alt='Me'/>
                        </div>
                        <div className='about_text'>
                            <p className='about_tit_text' >Hi, i am Borys Shahiiev</p>
                            <p className='about_me_text'>
                                I work on website development for 1.5 years and have some experience in freelancing, but I always strive for more experience, practice, and knowledge. I am decisive, stress-resistant, and always aim to deliver work at the highest level, putting in all efforts to achieve it. And also have an FOP own that facility work with customers
                            </p>
                            <div className='wrapper_modal_btn'>
                                <ModalElement name='Education' data={educations}/>
                                <ModalElement name='Experience' data={experience}/>
                                <a className='github_link' href='https://github.com/boris2606' target='_blank' rel='noreferrer'>GitHub</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <img className='about_hr' src={aboutHr} alt='About line' data-aos="zoom-in" data-aos-duration="1300"/>
                <div className='about_offer' data-aos="zoom-in" data-aos-duration="1300">
                    <p className='about_offer_tit'>I suggest you</p>
                </div>
                <div className='about_offer_content' data-aos="zoom-in" data-aos-duration="1300">
                    {offers.map((offer:Offers , index:number) =>{
                        return  <div className='offer_box' key={index}>
                                    <img className='offer_image' src={offer.img} alt='Offer'/>
                                    <p className='offer_tit_txt'>{offer.title}</p>
                                    <p className='offer_sec_txt'>{offer.descr}</p>
                                </div>
                    })}
                </div>
                <div className='wrapper_skills_btn' data-aos="zoom-in" data-aos-duration="1300">
                    <ButtonLink name='watch skills' path='/skills'/>
                </div>
            </div>
            <Footer/>
        </main>
    );
};

export default About;