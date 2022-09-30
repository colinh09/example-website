import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'

const Home: NextPage = () => {
  return (
    <div className = "bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#228C22]/80">
      <Head>
        <title>Create Next App</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero  */}
      <section className="snap-start" id="hero">
        <Hero />
      </section>

      {/* About  */}
      <section id = 'about' className = "snap-center">
        <About />
      </section>

      {/* Experience  */}
      <section id= 'experience' className = "snap-center">
        <WorkExperience />
      </section>

      {/* Skills  */}
      <section id="skills" className = "snap-start">
        <Skills />
      </section>

      {/* Projects  */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me  */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      
    </div>
  )
}

export default Home
