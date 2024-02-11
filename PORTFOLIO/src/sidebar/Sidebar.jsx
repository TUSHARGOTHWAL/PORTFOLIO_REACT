import './Sidebar.scss';
import ToggleButton from './toggleButton/toggleButton';
import Links from './Links/Links';
import { useState } from 'react';
import { motion } from 'framer-motion';


const variantts = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition:{
      type:"spring",
      stiffness:20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition:{
      type:"spring",
      stiffness:400,
      delay:0.5,
      damping:40,
    },
  },
};


const Sidebar = () => {

  const [open, setOpen] = useState(false);

 

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variantts}>
        <Links></Links>
      </motion.div>

      <ToggleButton setOpen={setOpen}></ToggleButton>
    </motion.div>
  );
}

export default Sidebar;
