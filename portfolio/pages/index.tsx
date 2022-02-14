import { services } from "../data";

import React from "react";
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInup, routeAnimation, stagger } from "../animations";
import Head from "next/head";


const About = ({endpoint}) => {
  // console.log("CLIENT", services);
console.log(endpoint);

  return (
    <div
      className="flex flex-col px-6 pt-1-grow"
     
    >
      <Head>
        <title>
          Web Developer | portfolio | Sumit
        </title>
      </Head>
      <h6 className="my-3 font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development

      </h6>
      <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{ marginLeft: '-1.5rem' }}>
        <h4 className="my-3 text-xl font-bold tracking-wide">What I am doing</h4>
        <motion.div className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial='initial'
          animate='animate'
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInup}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;

export const getServerSideProps:GetServerSideProps = async (context: GetServerSidePropsContext) => {
  //calculation
  console.log(process.env.VERCEL_URL);
  
  const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
  const data = await res.json()
  console.log(data);

  return {
    props: {
      services: { endponit: process.env.VERCEL_URL}
    }
  }

}

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   //calculation
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log("SERVER", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
