import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './ButtonLink.scss'
import { ButtonLinkType } from '../../modelsTypes';

const ButtonLink: FC<ButtonLinkType> = ({name,path}) => {
    return (
        <Link to={path} className='link_about_text'>{name}</Link>
    );
};

export default ButtonLink;