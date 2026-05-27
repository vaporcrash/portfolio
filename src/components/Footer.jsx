import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



function Footer(){
    return <footer className='Landing-text' style={{textAlign:'center'}}>
        <SocialIcon url='https://www.linkedin.com/in/sharvan-kumaran/' target='_blank'/> <SocialIcon url='https://github.com/vaporcrash' bgColor='gray' target='_blank'/> <SocialIcon url='https://open.spotify.com/user/22yr72sc5gczjie2dvves53ji?si=gCEPKSsrSMiQ_vtAVgZ49A' target='_blank' /> <SocialIcon url='https://stackoverflow.com/users/21475533/sharvan-kumaran/' target='_blank' /> <p style={{paddingLeft:'0.5vh'}}><a className='jumps' href="https://docs.google.com/document/d/1ypLFsRvVHxacImpN3G2T5UMNq3UXXQiCq-Ax6Lfq_oU/edit?usp=sharing" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} size="xl" />-Resume</a></p>
    </footer>
}

export default Footer;