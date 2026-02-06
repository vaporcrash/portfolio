import React from 'react';
import {ScrollPage,Animator, Sticky } from 'react-scroll-motion';


function TopSection({secOne}){
  
    return <ScrollPage>
    <div className='Top-section'>
    <Animator animation={Sticky(50,50)}>
      <p>Hey! It's nice to meet you!</p>
      <p>I'm Sharvan, a Software Engineer with a passion for neat design and clean code.</p>
    </Animator>
    <Animator animation={Sticky(50,90)}>
      <p>Scroll to learn more!</p>
    </Animator>
    </div>
    
  </ScrollPage>
}

export default TopSection;