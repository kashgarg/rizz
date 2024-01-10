"use client"

import { useState } from "react"
import Form from "./Form"
import Score from "./Score"

export default function Home() {
  const [score, setScore] = useState(0);

  function handleClick() {
    setScore(score + 1);
  }

  function handleCalculate(name, major) {
    alert('im calculating')
  }

  return (
    <main style={{
      padding: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }}>
      <img 
        src="/images/teddy.png" 
        alt="Insanely built teddy hauling an inordinately large domino (not the pizza)"
        style={{ width: 100 }} />
      <h1>Hello 👋</h1>
      <p onClick={handleClick}>
        We're so glad you're here :)
      </p>
      <Form 
        handleCalculate={handleCalculate}/>
      <Score score={score} />
    </main>
  )
}
