import React from 'react';
import {Animator,ScrollPage,Sticky,batch,MoveIn, Fade} from 'react-scroll-motion';

function WorkExp() {
  return <ScrollPage className='Even'>
        <Animator animation={batch(MoveIn(0,-100),Fade(0,1),Sticky(50,10))}>
            <p id='SkillPageTitle'>Work Experience</p>
            <p id='SkillPageTitle'>LTIMindtree</p>
        </Animator>
        <Animator animation={batch(MoveIn(700,0),Fade(0,1),Sticky(70,30))}>
            <div className='Web3-text'>
            <p className='Skills-title'>OneWAN Deployment</p>
            <p className='Skills'>Worked on onboarding Cisco and Arista devices to Microsoft Azure's SDWAN</p>
            <p className='Skills'>Worked extensively with Powershell scripts to automate device configuration and deployment rollout</p>
            <p className='Skills'>Worked with storage and database solutions like Kusto and Git to story and query network and device state information</p>
            </div>
        </Animator>
        <Animator animation={batch(MoveIn(-700,0),Fade(0,1),Sticky(30,45))}>
            <div className='Web3-text'>
            <p className='Skills-title'>Azure for Operators</p>
            <p className='Skills'> Worked on bringing up and maintaining Kubernetes clusters, including Hardware configurations using Airship (Cluster Lifecycle Management), and troubleshooting cluster issues with the kubectl tool</p>
            <p className='Skills'>Worked with Azure DevOps and GitHub Actions to automate CI/CD pipelines for Kubernetes deployments</p>
            <p className='Skills'>Worked on python scripts to automate the production of a profile of the network properties of a Kubernetes cluster given details like the VLAN for different ingress services</p>
            </div>
        </Animator>      
        
    </ScrollPage>
}

export default WorkExp;
