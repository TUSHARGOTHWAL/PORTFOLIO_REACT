import './Home.scss';
import { motion, px } from 'framer-motion';

const variants = {
  visible: { opacity: 1, transition: { duration: 1, delay: 0.5 }, scale: 1 },
  hidden: { opacity: 0 },
};

const textVariants = {
  animate: {
    x: ['-10%', '-1%', '-10%'], 
    transition: {
      x: {
        duration: 5,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  },
};




const staggerTextVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2, 
      
      
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
  


  const openExternalLink = () => {
  
    const externalLink = 'https://drive.google.com/file/d/1kgKQR89eFLDJfZF7JUIEBzJ_Qqa604wo/view?usp=drive_link';


    window.open(externalLink, '_blank');
  };


  
    const scrollToBottom = () => {
      // Scroll to the bottom of the document body
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
  


const Home = () => {
  return (
    <div className='home'>
      <div className="leftWrapper">
        <motion.div
          className="textContaihner"
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <h2>HI, <br/> <AnimatedText text="MY NAME IS TUSHAR GOTHWAL" /></h2>
          <h1 className='whiteText'>WEB DEVELOPER | DESIGNER | ENGINEER</h1>
          <div className="buttons">
            <button onClick={openExternalLink}>MY RESUME</button>
            <button onClick={scrollToBottom}>GET IN TOUCH</button>
          </div>
          <div className="scrlPng" >
            <img src="scroll.png" alt="Scroll" />
          </div>
        </motion.div>
        <motion.div className="slidingText" variants={textVariants} initial="initial" animate="animate">
        DEVELOPER | ADVISOR | DESIGNER | FOUNDER | ENGINEER
</motion.div>

      </div>

      <motion.div className="imgContainer" variants={variants} initial="hidden" animate="visible">
        <img src='tushar.png' alt="Tushar PNG" className='pfpImg' />
      </motion.div>
    </div>
  );
};

export default Home;
