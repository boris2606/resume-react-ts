import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import email from '../../img/email.svg'
import linkedin from '../../img/in.svg'
import git from '../../img/git.svg'
import mainBg from '../../img/main_bg.png'
import ButtonLink from '../../components/button-link/ButtonLink';
import './Main.scss'

const Main = () => {
    return (
        <section className='wrapper_main'>
            <main className='main_content'>
                <div className='wrapper_main_block'>
                    <motion.div className='main_block' 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}>
                        <p className='main_tit'>Hi, I am</p>
                        <p className='main_name'>Borys Shahiiev</p>
                        <p className='main_position'>Front-end Developer</p>
                        <div className='main_block_social'>
                            <Link to='mailto:shahiievborys.work@gmail.com' target='_blank'><img src={email} alt="" /></Link>
                            <Link to='https://github.com/boris2606' target='_blank'><img src={git} alt="" /></Link>
                            <Link to='https://www.linkedin.com/in/boris-shagiev' target='_blank'><img src={linkedin} alt="" /></Link>
                        </div>
                        <div className='about_btn_wrapper'>
                            <ButtonLink name='About me' path='/about'/>
                        </div>
                    </motion.div>
                </div>
                <div className='main_image_block'><img className='main_img' src={mainBg} alt="" /></div>
            </main>
        </section>
    );
};

export default Main;