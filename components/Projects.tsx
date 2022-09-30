import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
    <motion.div 
    initial = {{ opacity: 0}}
    whileInView = {{ opacity : 1}}
    transition = {{duration: 1.5}}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className = "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"> 
            Projects 
        </h3>

        <div className = "relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#228C22]/80">
            {projects.map((project, i) => (
                // eslint-disable-next-line react/jsx-key
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img 
                    initial = {{ opacity: 0, y: -300 }}
                    transition = {{ duration: 1.2}}
                    whileInView = {{ opacity:1 , y: 0 }}
                    viewport = {{ once: true}}
                    className = "h-60 w-90" src = "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png" alt = "" />

                    <div className = "space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className = "text-4xl font-semibold text-center">
                            Case Study {i+1} of {projects.length} Something
                        </h4>

                        <p className = "text-lg text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec magna consectetur lacus mollis suscipit nec a orci. Nulla nec dignissim nunc. Donec malesuada id leo imperdiet aliquam. Curabitur finibus porttitor nulla, non sodales urna pretium vitae. Pellentesque accumsan arcu et malesuada fermentum. Aenean tempus mi pharetra ex accumsan aliquam. Mauris finibus dolor sit amet tincidunt vulputate. Quisque magna est, lobortis vel nibh quis, consequat aliquet tellus. Morbi ac arcu ut orci ultrices ultricies. Curabitur accumsan iaculis est, eu faucibus elit hendrerit eu. Sed euismod non nisi eu volutpat. Mauris placerat tortor ex, vitae dapibus mauris imperdiet sit amet. Praesent suscipit nunc sed dui commodo tincidunt.</p>
                    </div>
                </div>
            ))}
        </div>

        <div className = "w-full absolute top-[30%] bg-[#228C22]/10 left-0 h-[500px] -skew-y-12">

        </div>
    </motion.div>
  )
}

export default Projects