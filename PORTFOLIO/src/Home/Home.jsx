import './Home.scss';
import { motion } from 'framer-motion';

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
          <h2>HI, <br />MY NAME IS TUSHAR GOTHWAL</h2>
          <h1 className='whiteText'>WEB DEVELOPER | DESIGNER | ENGINEER</h1>
          <div className="buttons">
            <button>SEE LATEST WORK</button>
            <button>GET IN TOUCH</button>
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
        <img src='tushar.png' alt="Tushar PNG" className='pfpImg'/>
      </motion.div>
    </div>
  );
};

export default Home;
