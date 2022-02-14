import React, { FunctionComponent, useState } from "react";
import { IProject } from "../type";
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInup, stagger } from "../animations";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: null | number,
  setShowDetail:(id:null|number) => void
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
    id
  },
  showDetail,
  setShowDetail
}) => {

    return (
      <div>
        <Image
          src={image_path}
          alt={name}
          className='cursor-pointer'
          width='300'
          height='150'
          layout='responsive'
          quality='100'
          onClick={() => setShowDetail(id)}
        />
        
        <p className='my-2 text-center'>{name}</p>

        {showDetail === id && (
          <div className='absolute top-0 left-0 z-10 grid w-full h-auto text-black rounded md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 md:p-10-lg'>
            <motion.div variants={stagger} initial='initial' animate='animate'>
              <motion.div variants={fadeInup} className="border-4 border-gray-100">
                <Image src={image_path} alt={name} width='300' height='150' />
              </motion.div>

              <motion.div className='flex justify-center my-4 space-x-3'>
                <a
                  href={github_url}
                  className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
                <a
                  href={deployed_url}
                  className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
                >
                  <AiFillProject /> <span>Project</span>
                </a>
                <motion.h2 variants={fadeInup} className='font-medium md-3 texxt-xl md:text-2xl'>{name}</motion.h2>
                <motion.h3 variants={fadeInup} className='font-medium md-3'>{description}</motion.h3>
                <motion.div variants={fadeInup} className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                  {key_techs.map((tech) => (
                    <span
                      key={tech}
                      className='px-2 py-2 my-1 bg-gray-200 dark:bg-dark-200 round'
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
            <button
              onClick={() => setShowDetail(null)}
              className='absolute bg-gray-200 rounded top-3 right-3-full right-3 focus:outline-none dark:bg-dark-100'
            >
              <MdClose size={30} />
            </button>
          </div>
        )}
      </div>
    );
  };

export default ProjectCard;
