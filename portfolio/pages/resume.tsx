import Bar from "../components/Bar";
import { languages } from "../data";
import { motion } from 'framer-motion'
import { fadeInup, routeAnimation } from "../animations";

const Resume = () => {

  return (
    <motion.div className='px-6 py-2'
      variants={routeAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {/* //! Education & Experience */}
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fadeInup} initial='initial' animate='animate' >
          <h5 className='my-3 text-2xl font-bold'>Education</h5>
          <div className=''>
            <h5 className='my-2 text-xl font-bold'>
              Computer Science Engineering
            </h5>
            <p className='font-semibold'>Academy of Technology (2017-2021)</p>
            <p className='my-3'>
              I am currently pursuing B.tech in Computer Science Engineering
              from Academy of Technology
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInup} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Experience</h5>
          <div className=''>
            <h5 className='my-2 text-xl font-bold'>Software Developer Jr.</h5>
            <p className='font-semibold'>Tata Consultancy Services</p>
            <p className='my-3'>I dont know why I am doing this job</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className='gird gap-6:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'> Tools & Softwares</h5>
          <div className='my-2'>
            {languages.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
