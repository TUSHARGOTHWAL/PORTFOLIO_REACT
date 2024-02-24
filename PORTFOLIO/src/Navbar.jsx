// Navbar.jsx
import './Navbar.scss';
import { motion } from 'framer-motion';
// import Sidebar from './sidebar/Sidebar';

const variants = {
  visible: { opacity: 1, transition: { duration: 0.7, delay: 0.5 }, scale: 1.6, x: 30 },
  hidden: { opacity: 0 }
};

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* <Sidebar /> */}
      <div className="nav-wrapper">
        <motion.span className='myname' variants={variants} initial="hidden" animate="visible">
        &#123; TUSHAR GOTHWAL &#125;
        </motion.span>
      </div>
      <div className="logocontainer">
        <a href="https://www.linkedin.com/in/tushar-gothwal-here/" className='logoss'><img src="linkedin.png" alt="LinkedIn" /></a>
        <a href="https://www.instagram.com/gothwaltushar03" className='logoss'><img src="instagram.png" alt="Instagram" /></a>
        <a href="https://twitter.com/TusharGothwal03"className='logoss' ><img src="twitter.png" alt="Twitter" /></a>
        <a href="https://www.youtube.com/channel/UCXqmG7vOZG3XdlsAvzG-YDQ" className='logoss'><img src="youtube.png" alt="YouTube" /></a>
        <a href="https://discord.com" className='logoss'><img src="discord.png" alt="Discord" /></a>
      </div>
    </div>
  );
};

export default Navbar;
