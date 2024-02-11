// Knowledge.jsx
import './Knowledge.scss';
import React from 'react';
import {motion} from 'framer-motion'
const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.5,
        },
    },
}



const techLogos = [
  { id: 1, name: "HTML", logoUrl: "html-5.png" },
  { id: 2, name: "JAVA SCRIPT", logoUrl: "/js.png" },
  { id: 3, name: "CSS", logoUrl: "css-3.png" },
  { id: 3, name: "REACT", logoUrl: "react.png" },
  { id: 3, name: "FIGMA", logoUrl: "figma.png" },
  { id: 3, name: "NODE", logoUrl: "node-js.png" },
  { id: 3, name: "FIREBASE", logoUrl: "firebase.png" },
  { id: 3, name: "Google Cloud", logoUrl: "GoogleCloud.png" },
//   { id: 3, name: "FRAMER", logoUrl: "framer.png" },
  { id: 3, name: "MOTION", logoUrl: "motion.png" },
  { id: 3, name: "WORDPRESS", logoUrl: "wordpress.png" },
  { id: 3, name: "C++", logoUrl: "c-.png" },
  { id: 3, name: "Github", logoUrl: "github-sign.png" },
  { id: 3, name: "Express-JS", logoUrl: "express-js.png" },
  { id: 3, name: "Mongo DB", logoUrl: "mongo.png" },
  { id: 3, name: "NextJS", logoUrl: "nextjs.png" },
  { id: 3, name: "SaSS", logoUrl: "sass.png" },

];

function TechLogo({ id, name, logoUrl }) {
  return (
    <motion.div key={id} className="tech-logo" variants={variants} initial="initial" whileInView="animate">
      <img src={logoUrl} alt={name} />
      <p>{name}</p>
    </motion.div>
  );
}

const Knowledge = () => {
  return (
    <motion.div className="know-wrapper" variants={variants} initial="initial" animate="animate" >
      <motion.div className="tech-logos-container" variants={variants} initial="initial" whileInView="animate">
        {techLogos.map((tech) => (
            <TechLogo key={tech.id} {...tech} />
            ))}
      </motion.div>
      <motion.h1 variants={variants} initial="initial" whileInView="animate">
        WHAT I KNOW ? </motion.h1>
    </motion.div>
  );
}

export default Knowledge;
