import './AboutMe.scss'

import { motion } from 'framer-motion';

const staggerTextVariants = {
  animate: {
    transition: {
      staggerChildren: 0.005, 
    },
  },
};

const letterVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
};


const AnimatedText = ({ text }) => {
    return (
      <motion.span variants={staggerTextVariants} initial="initial" whileInView="animate">
        {text.split('').map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.span>
    );
  };
  

const AboutMe = () => {
return(

    <div className="textContainerAbout">
        

        <div className="abtMe"><h1>A BIT ABOUT ME</h1></div>

        <div className="abtContainer">
        <div className="gap" />
        <div className="aboutMe"> <h2>
        <AnimatedText text="Enthusiastic Computer Science Engineering student with a keen understanding of web development, data structures, algorithms, and computer hardware. Excited about backend development and its potential for innovation. Proactively founded DevSource Community, actively engaging in open-source projects, and dedicated to collaborative growth within the tech community. Seeking opportunities to apply and expand technical skills in the field of software development" />
      </h2>

      </div>
        </div>
    </div>




);


  
}
export default AboutMe
