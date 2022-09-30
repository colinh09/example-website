import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className = "flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img 
        initial = {{ y: -100, opacity: 0,}}
        transition = {{ duration: 1.2 }}
        viewport = {{ once: true }}
        className = "w-32 h-32 rounded-full xl:w-[200px] object-cover object-center" 
        alt="" 
        src="" 
        />

        <div className = "px-0 md:px-10">
            <h4 className="text-4xl font-light"> Some Job Title </h4>
            <p className = "font-bold text-2xl mt-1"> Company </p>
            <div className = "flex space-x-2 my-2">

            </div>
            <p className = "upperace py-5 text-gray-300"> Started work... - Ended ... </p>
            <ul className = "list-disc space-y-4 ml-5 text-lg">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
                 
    </article>
  )
}

export default ExperienceCard