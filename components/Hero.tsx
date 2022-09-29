import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hello! My name is Colin Hwang",
            "I am a Student at The Cooper Union",
            "I am a Programmer",
            "I am an Electrical Engineer"
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className = "h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor="#228C22" />
        </h1>
    </div>
  )
}

export default Hero