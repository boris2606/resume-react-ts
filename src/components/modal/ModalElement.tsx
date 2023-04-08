import React from 'react';
import './ModalElement.scss'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { EducationType, ExperienceType } from '../../modelsTypes';

const ModalElement = ({name, data}:any) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div className='wrapper_modal'>
            <button className='modal_btn' onClick={onOpen}>{name}</button>

            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>My {name}</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody pb={6}>
                        <main className='modal_content'>
                            {name.toLowerCase() === 'education' ? 
                                data.map( (elem:EducationType, index:number) => {
                                    return <div className='modal_element' key={index}>
                                                <div className='modal_date'>
                                                    <p className='modat_date_text'>{elem.date}</p>
                                                    <p className='modat_location_text'>Location: {elem.location}</p>
                                                </div>
                                                <div className='modal_main_content'>
                                                    <p className='titmodal_text'>{elem.title}</p>
                                                    <p className='titmodal_spec'>Specialty: {elem.specialty}</p>
                                                    {elem.sertificate ? <a href={elem.sertificate} target="_blank" className='certificate_btn' rel='noreferrer'>Certificate</a> : false}
                                                </div>
                                            </div>
                                }) 
                            :
                                data.map( (elem:ExperienceType, index:number) => {
                                    return <div className='modal_element' key={index}>
                                                <div className='modal_date'>
                                                    <p className='modat_date_text'>{elem.date}</p>
                                                    <p className='titmodal_text'>{elem.position}</p>
                                                </div>
                                                <div className='modal_main_content'>
                                                    <p className='titmodal_text'>{elem.title}</p>
                                                    <p className='titmodal_spec'>Specialty: {elem.specialty}</p>
                                                </div>
                                                <p className='titmodal_spec'> {elem.descr}</p>
                                            </div>
                                } )     
                            }
                        </main>
                    </ModalBody>

                    <ModalFooter>
                        
                        <button className='modal_close_btn' onClick={onClose}>close</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
};

export default ModalElement;