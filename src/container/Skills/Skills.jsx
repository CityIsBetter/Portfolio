import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';

const Skills = () => {

  document.title = "Mahesh Paul | Skills";

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setSkills(data);
    })
  }, [])

  return (
    <>
    <h2 className='head-text'>Skills & Experience</h2>
    <div className='app__skills-container'>
      <motion.div className='app__skills-list'>
        {skills.map((skill) => (
          <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 0.5}}
            className='app__skills-item app__flex'
            key={skill.name}
          >
            <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
              <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className='p-text'>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
    <img src='https://github-readme-activity-graph.vercel.app/graph?username=CityIsBetter&bg_color=313bac&color=ffffff&line=000000&point=ea5757&area=true&hide_border=true' alt="Mahesh Paul's Github Contribution" className='github-info'/>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__primarybg',
);