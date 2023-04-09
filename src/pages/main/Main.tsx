import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import email from '../../img/email.svg'
import linkedin from '../../img/in.svg'
import git from '../../img/git.svg'
import mainBg from '../../img/main_bg.png'
import ButtonLink from '../../components/button-link/ButtonLink';
import './Main.scss'

const Main = () => {
    useEffect(() => {
        AOS.init() 
    })
    return (
        <section className='wrapper_main'>
            <main className='main_content'>
                <div className='wrapper_main_block'>
                    <div className='main_block'>
                        <p className='main_tit' data-aos="zoom-in" data-aos-duration="1000">Hi, I am</p>
                        <p className='main_name' data-aos="zoom-in" data-aos-duration="1300">Borys Shahiiev</p>
                        <p className='main_position' data-aos="zoom-in" data-aos-duration="1600">Front-end Developer</p>
                        <div className='main_block_social' data-aos="zoom-in" data-aos-duration="1900">
                            <Link to='mailto:shahiievborys.work@gmail.com' target='_blank'><img src={email} alt="" /></Link>
                            <Link to='https://github.com/boris2606' target='_blank'><img src={git} alt="" /></Link>
                            <Link to='https://www.linkedin.com/in/boris-shagiev' target='_blank'><img src={linkedin} alt="" /></Link>
                        </div>
                        <div className='about_btn_wrapper' data-aos="zoom-in" data-aos-duration="2100">
                            <ButtonLink name='About me' path='/about'/>
                        </div>
                    </div>
                </div>
                <div className='main_image_block'><img className='main_img' src={mainBg} alt="" /></div>
            </main>
        </section>
    );
};

export default Main;