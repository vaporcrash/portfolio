import React from 'react';
import {ScrollPage,Animator, Sticky } from 'react-scroll-motion';
import { TypeAnimation } from 'react-type-animation';
import TubesBackground from './TubesBackground';


function TopSection({secOne}){

    return <ScrollPage>
    <TubesBackground>
    <Animator animation={Sticky(50,50)}>
      <p>Hey! It's nice to meet you!</p>
      <TypeAnimation
        sequence={[
          "I'm Sharvan, a Software Engineer",
          2000,
          "I'm Sharvan, a Full-Stack Developer",
          2000,
          "I'm Sharvan, a Problem Solver",
          2000,
          "I'm Sharvan, a Creative Thinker",
          2000,
        ]}
        wrapper="p"
        cursor={true}
        repeat={Infinity}
        className="typing-text"
      />
      <p>with a passion for neat design and clean code.</p>
    </Animator>
    <Animator animation={Sticky(50,90)}>
      <p>Scroll to learn more!</p>
    </Animator>
    </TubesBackground>

  </ScrollPage>
}

export default TopSection;