import React, { useRef } from 'react';
import './Projects.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: 'Mitz Computer Institute Website',
        img: "mitz.png",
        description: "Created a comprehensive website for Mitz Institute showcasing proficiency in web development and design"
    },

    {
        id: 2,
        title: 'DevSource Community Portal',
        img: "dscportal.png",
        description: "Currently developing the DevSource Community portal/website, aimed at fostering collaboration and knowledge sharing within the tech community"
    },

    {
        id: 3,
        title: 'Farmate',
        img: "farmate.png",
        description: "Built a Google Solution Challenge project utilizing HTML, Bootstrap, CSS, JS, Firebase, Web3, and crypto payments"
    },

    {
        id: 4,
        title: 'Previous Portfolio',
        img: " htmlpf.png",
        description: "Just My previous Portfolio shocasing my profiency in HTML , CSS & JS"
    },
    
];

const Single = ({ item }) => {

const ref = useRef();

const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start" , "end start"]
});

const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

return(
    <section ref={ref}>
        <div className="conatiner">
            <div className="wrapper">
<div className="imgcontainer">
<img src={item.img} />
</div>
            <motion.div className="textContainer" style={{y}} >
                <h2 >{item.title}</h2>
                <p>{item.description}</p>
                <button>SEE MORE</button>
            </motion.div>
            </div>
        </div>
    </section>
   );
};

const Projects = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, initial: 0, threshold: 0.1 });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="projects" ref={ref}>

            <div className="progress">
                <h1>MY WORKS</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressbar"></motion.div>
            </div>
            {items.map(item => (
                <Single key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Projects;
