import React from 'react';

import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Works.scss';

const Works = () => {

  const [animateCard, setAnimateCard] = useState({y: 0,opacity: 1});
  const [activeFilter, setActiveFilter] = useState('All');
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    })
  }, [])


  const handleWorkFilter = (item) => {

    document.title = "Mahesh Paul | Works";

    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);
      if(item === 'All') {
        setFilterWork(works)
      } else{
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  };  
  return (
    <>
    <h2 className='head-text'>
        My Creative
        <span> Works</span>
    </h2>
    <div className='app__work-filter'>
      {["Web App", 'Others', 'All'].map((item, index) => (
        <div
        key={index}
        onClick={() => handleWorkFilter(item)}
        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
        >
          {item}
        </div>
      ))}
    </div>
    <motion.div
      animate={animateCard}
      transition={{duration: 0.5, delayChildren: 1}}
      className='app__work-portfolio'
    >
      {filterWork.map((work, index) => (
        <div className='app__work-item app__flex' key={index}>
          <div className='app__work-img app__flex'>
            <img src={urlFor(work.imgUrl)} alt={work.name} />
          </div>

          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>{work.title}</h4>
            <p className='p-text' style={{marginTop: 10}}>{work.description}</p>
            <div className='w-icon'>
              <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <AiFillEye />
              </a>
              <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <AiFillGithub />
              </a>
            </div>
            
            <div className='app__work-tag app__flex'>
              <p className='p-text'>{work.tags[0]}</p>
            </div>
          </div>
        </div>
        
      ))}
    </motion.div>
    <div>
      To see my 3D works <a href='https://cityisbetter.github.io/assests/html/3dmodeling.html' target='_blank' rel="noreferrer"><button>Click here</button></a> 
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Works, 'app__works'),
  'works',
  'app__primarybg',
);