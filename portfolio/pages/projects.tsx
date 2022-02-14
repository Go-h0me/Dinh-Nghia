import { motion } from 'framer-motion'
import Head  from 'next/head'
import React, { useState } from 'react'
import { fadeInup, routeAnimation, stagger } from '../animations'
import ProjectCard from '../components/ProjectCard'
import ProjectsNavbar from '../components/ProjectsNavbar'
import { projects as projectsData } from '../data'
import { Category } from '../type'

const Projects = () => {

  const [projects, setProjects] = useState(projectsData)

  const [active, setActive] = useState("all")
  
  const [showDetail,setShowDedail]= useState<number | null>(null)

  const handlerFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData)
      setActive(category)
      return
    }
    const newArray = projectsData.filter(project => project.category.includes(category))
    setProjects(newArray)
    setActive(category)
  }

  return (
    <motion.div
      className='px-5 py-2 overflow-y-scroll'
      style={{ height: "65vh" }}
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Head>
        <title> WEb Developer | Projects | Sumit Dey</title>
      </Head>

      <ProjectsNavbar handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div className='relative grid-cols-12 gap-4 my-3' variants={stagger}>

        {projects.map((project) => (
          <motion.div className='col-span-12 p-2 text-black bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 gap-x-12 dark:text-white dark:bg-dark-200'
            variants={fadeInup}
            key={project.name}
          >
            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDedail} />
          </motion.div>
        ))}

      </motion.div>
    </motion.div>
  )
}

export default Projects