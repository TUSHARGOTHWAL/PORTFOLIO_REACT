import './Test.scss';
import {motion} from 'framer-motion'



const variants ={
    visible: {opacity:1 , transition:{duration:3, delay:2}},
    hidden: {opacity:0}
}

const Test = () => {
  return (
    <div className='crash-course'>
        <motion.div className="box"  /*initial={{ opacity:0.1, scale: 0 }}
  animate={{ rotate: 180, scale: 1, opacity:1 }}
  transition={{type: "spring",
    stiffness: 126,
    damping: 20,
  }}*/
  
  
  variants={variants}

initial="hidden"
animate="visible"


  
>


  </motion.div>

  </div>

);
}



export default Test

