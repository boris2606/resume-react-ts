import React from 'react';
import { Link } from 'react-router-dom';
import email from '../../img/email.svg'
import linkedin from '../../img/in.svg'
import git from '../../img/git.svg'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='wrapper_footer'>
            <div className='footer_content'>
                <div className='footer_social'>
                    <Link to='mailto:shahiievborys.work@gmail.com' target='_blank'><img src={email} alt="" /></Link>
                    <Link to='https://github.com/boris2606' target='_blank'><img src={git} alt="" /></Link>
                    <Link to='https://www.linkedin.com/in/boris-shagiev' target='_blank'><img src={linkedin} alt="" /></Link>
                </div>
            </div>
            <p className='c_text'>@2023 Borys Shahiiev, all Rights Reserved.</p>
        </footer>
    );
};

export default Footer;