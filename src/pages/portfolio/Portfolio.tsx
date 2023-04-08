import React, {useEffect} from 'react';
import './Portfolio.scss'
import portfolioHr from '../../img/hr_image.svg'
import { Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator } from '@chakra-ui/react'
import AOS from 'aos';
import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import { PortfolioTypes } from '../../modelsTypes';
import ButtonLink from '../../components/button-link/ButtonLink';

const Portfolio = () => {

    const portfolio = useSelector((state:any) => state.toolkit.portfolio)   

    useEffect(() => {
        AOS.init() 
    })

    return (
        <main className='wrapper_portfolio'>
            <section className='portfolio_content'>
            <p className='portfolio_tit' data-aos="zoom-in" data-aos-duration="1300">Portfolio</p>
            <img className='portfolio_hr' src={portfolioHr} alt='Line' data-aos="zoom-in" data-aos-duration="1300"/>
            <Tabs isFitted position="relative" data-aos="zoom-in" data-aos-duration="1300">
                <TabList className='portfolio_tab_list'>
                    <Tab _selected={{ color: 'black', bg: '#cccccc47' }}>HTML/CSS/JS</Tab>
                    <Tab _selected={{ color: 'black', bg: '#cccccc47' }}>React JS</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="black"
                    borderRadius="1px"
                    borderColor='red'
                />

                <TabPanels className='portfolio_panels'>
                    <TabPanel>
                        <div className='poryfolio_projects_wrapper'>
                            {portfolio.map((project:PortfolioTypes,index:number) => {
                                if (!project.react){
                                    return <div className='portfolio_box' key={index}>
                                                <div className='project_img_box'>
                                                    <img src={project.image} alt={project.title}/>
                                                </div>
                                                <div className='project_text_box'>
                                                    <p className='project_title'>{project.title}</p>
                                                    <p className='project_descr'>{project.descr}</p>
                                                    <div className='project_buttons'>
                                                        <a className='portfolio_link' href={project.path} target='_blank' rel='noreferrer'>VIEW PROJECT</a>
                                                        <a className='portfolio_link' href={project.github} target='_blank' rel='noreferrer'>GITHUB</a>
                                                    </div>
                                                </div>
                                            </div>
                                }
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='poryfolio_projects_wrapper'>
                            {portfolio.map((project:PortfolioTypes,index:number) => {
                                if (project.react){
                                    return <div className='portfolio_box' key={index}>
                                                <div className='project_img_box'>
                                                    <img src={project.image} alt={project.title}/>
                                                </div>
                                                <div className='project_text_box'>
                                                    <p className='project_title'>{project.title}</p>
                                                    <p className='project_descr'>{project.descr}</p>
                                                    <div className='project_buttons'>
                                                        <a className='portfolio_link' href={project.path} target='_blank' rel='noreferrer'>VIEW PROJECT</a>
                                                        <a className='portfolio_link' href={project.github} target='_blank' rel='noreferrer'>GITHUB</a>
                                                    </div>
                                                </div>
                                            </div>
                                }
                            })}
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <img className='portfolio_hr' src={portfolioHr} alt='Line' data-aos="zoom-in" data-aos-duration="1300"/>
            <div className='wrapper_contacts_btn' data-aos="zoom-in" data-aos-duration="1300">
                <ButtonLink name='CONTACT' path='/contacts'/>
            </div>
            </section>
            <Footer/>
        </main>
    );
};

export default Portfolio;