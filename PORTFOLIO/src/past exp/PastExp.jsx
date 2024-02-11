import './PastExp.scss';
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



const experiences = [
    {
      title: 'GDSC OUTREACH TEAM',
      company: 'Google Developer Students Club- MSIT',
      date: '2022- 2023',
      description: 'Handled the outreach position',
    },
    
    {
      title: 'Founder',
      company: 'DevSource Community',
      date: '2022- Current',
      description: 'Proactively founded the Devsource Community currently with more than 1400+ family',
    },
    {
      title: 'Web Developer',
      company: 'MITZ Computer Institute',
      date: 'Aug 2023 - Sep 2023' ,
      description: 'Created the whole website solely from scratch including desiging',
    },
    {
      title: 'Campus Ambassador',
      company: 'GSSoC 2023',
      date: 'May 2023 - Oct 2023',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Lead Advisor',
      company: 'Microsoft Students Club - MSIT',
      date: 'Oct 2023 - Present ',
      description: 'Advisor for the local Students Club',
    },
    
    {
      title: 'Activity Team',
      company: 'IIC MSIT',
      date: 'Oct 2023 - Present',
      description: 'Handles the events of the club',
    },
  ];
  
  const ExperienceBox = ({ title, company, date, description, isLeft }) => {
    return (
      <div className={`experience-box ${isLeft ? 'left' : 'right'}`}>
        <h3>{title}</h3>
        <p>{company}</p>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    );
  };
  
  
const PastExp = () => {
    return (
        <div className="expmastercontainer">
            <h1>MY TIMELINE</h1>
        <div className="experience-container">
            
          <div className="experience-line">
            {experiences.map((experience, index) => (
              <div key={index} className={`experience-dot ${index % 2 === 0 ? 'left' : 'right'}`} />
            ))}
          </div>
          <motion.div className="experience-boxes" variants={variants} initial="initial" whileInView="animate">
            {experiences.map((experience, index) => (
              <ExperienceBox
                key={index}
                {...experience}
                isLeft={index % 2 === 0}
                style={{ marginTop: `${index * 50}px` }} // Adjust height difference here
              />
            ))}
          </motion.div>
        </div>
    </div>
      );
}

export default PastExp;