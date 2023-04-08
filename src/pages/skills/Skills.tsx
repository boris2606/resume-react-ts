import React, { useEffect } from 'react';
import './Skills.scss'
import skillsHr from '../../img/hr_image.svg'
import AOS from 'aos';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { SkillsType,CertificatesType } from '../../modelsTypes';
import ButtonLink from '../../components/button-link/ButtonLink';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

const Skills = () => {

    const skills = useSelector((state:any) => state.toolkit.skills)
    const certificates = useSelector((state:any) => state.toolkit.certificates)

    useEffect(() => {
        AOS.init() 
    })
    
    return (
        <main className='wrapper_skills'>
            <section className='skills_content'>
                <p className='skills_tit' data-aos="zoom-in" data-aos-duration="1300">Skills</p>
                <img className='skills_hr' src={skillsHr} alt='About line' data-aos="zoom-in" data-aos-duration="1300"/>
                <div className='skills_tabs_wrapper'>
                    <Tabs position="relative" className='tabs_wrapper' variant='unstyled'>
                        <TabList className='tabs_list'>
                            <Tab className='tabs_btn' _selected={{ border: '2px solid black'}}>using now</Tab>
                            <Tab className='tabs_btn' _selected={{ border: '2px solid black'}}>learning</Tab>
                            <Tab className='tabs_btn' _selected={{ border: '2px solid black'}}>languages</Tab>
                            <Tab className='tabs_btn' _selected={{ border: '2px solid black'}}>certificates</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel className='tab_content'>
                                {skills.map( (skill:SkillsType, index:number) => {
                                    if (!skill.learning && !skill.lang){
                                        return <div className='skill_box' key={index} data-aos="zoom-in" data-aos-duration="1300">
                                            <img src={skill.img} alt={skill.name}/>
                                            <p className='skill_tit'>{skill.name}</p>
                                        </div>
                                    }
                                })}
                            </TabPanel>
                            <TabPanel className='tab_content'>
                                {skills.map( (skill:SkillsType, index:number) => {
                                    if (skill.learning && !skill.lang){
                                        return <div className='skill_box' key={index} data-aos="zoom-in" data-aos-duration="1300">
                                            <img src={skill.img} alt={skill.name}/>
                                            <p className='skill_tit'>{skill.name}</p>
                                        </div>
                                    }
                                })}
                            </TabPanel>
                            <TabPanel className='tab_content'>
                                {skills.map( (skill:SkillsType, index:number) => {
                                    if (skill.lang){
                                        return <div className='skill_box' key={index} data-aos="zoom-in" data-aos-duration="1300">
                                            <img className='skill_lang_img' src={skill.img} alt={skill.name}/>
                                            <p className='skill_tit'>{skill.name}</p>
                                            <p className='skill_descr'>{skill.descr}</p>
                                        </div>
                                    }
                                })}
                            </TabPanel>
                            <TabPanel className='tab_content'>
                                {certificates.map( (certificate:CertificatesType, index:number) => {
                                        return <div className='certificate_box' key={index} >
                                                    <p className='certificate_tit'>{certificate.title}</p>
                                                    <button>
                                                        <Link className='certificate_link' to={certificate.path} target='_blank' rel='noreferrer'>Watch certificate</Link>
                                                    </button>
                                                </div>
                                    }
                                )}
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <img className='skills_hr' src={skillsHr} alt='About line' data-aos="zoom-in" data-aos-duration="1300"/>
                    <div className='wrapper_btn_portfolio'>
                        <ButtonLink name='Portfolio' path='/portfolio'/>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
};

export default Skills;