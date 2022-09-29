import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"

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
    <div>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
        </h1>
    </div>
  )
}

export default Hero