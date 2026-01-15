import React from 'react'
import Header from '../components/navbar/Header'
const About = () => {
  return (
    <div className='w-full h-screen p-10 text-white'>
      <h1 className='text-3xl font-bold'>About <span className='text-gray-400'>CodeEditor</span></h1>
      <p className='max-w-3xl text-justify  lg:text-lg'>This web-based code editor is built for practicing HTML, CSS, and JavaScript in a fast and interactive environment. It provides real-time output, a clean interface, and useful keyboard shortcuts to improve productivity and workflow. The editor is designed to help developers experiment, learn, and build efficiently directly in the browser.</p>
      <div className='mt-8'>
        <h1 className='text-3xl font-bold'>About <span className='text-gray-400'>Me</span></h1>
        <p className='max-w-3xl text-justify  lg:text-lg'>Hi, I’m Ansar, a passionate full-stack developer with a strong interest in web development. I enjoy building practical tools and projects for learning and real-world practice, including developer-focused utilities like this code editor. I’m continuously improving my skills by creating meaningful projects and exploring modern web technologies.</p>
      </div>
    </div>

  )
}

export default About