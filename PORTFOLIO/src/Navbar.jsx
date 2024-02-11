import './Navbar.scss'
import { motion } from 'framer-motion';
import Sidebar from './sidebar/Sidebar';


const variants={

        visible: {opacity:1 , transition:{duration:0.7, delay:0.5} , scale:1.6, x:30  },
        hidden: {opacity:0} 
  
    
}

const Navbar = () => {
    return(
<div className="navbar-container">
   <Sidebar></Sidebar>
    <div className="nav-wrapper">
        <motion.span className='myname'
        variants={variants} 
        initial="hidden"
        animate="visible">TUSHAR GOTHWAL</motion.span>
        <motion.button className="nav-button" 
        initial={{opacity:0}}
        animate={{opacity:1, scale:1.2, x:-20}}
        transition={{duration:0.7, delay:0.5}}>Reach Me Out</motion.button>
    </div>
</div>
         
    );

}

export default Navbar