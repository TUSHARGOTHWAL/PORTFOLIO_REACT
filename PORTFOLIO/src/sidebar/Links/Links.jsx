import {motion} from 'framer-motion'


const variants = {
  open:{
    transition:{
      staggerChildren:0.1,
        }
  },
  closed:{
    transition:{
      staggerChildren:0.05,
      staggerDirection: -1,
        }
  }
}
const itemVariants = {
  open:{
    y:0,
    opacity:1,
  },
  
  closed:{
    y:50,
    opacity:0,
  }
}



const Links = () => {


  const items= [
    "HOME",
    "ABOUT ME",
    "WHAT I DO",
    "PORTFOLIO",
    "CONTACT ME",
  ]

  return (
    <motion.div className="links" variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.8}}>
      {items.map(item => (
        <a href={`#${item}`} key={item}>{item}</a>
      ))}
    </motion.div>
  );
  
}


export default Links