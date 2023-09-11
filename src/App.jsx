import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import './App.css'


function App() {
    function handleClick(){
      alert('button is clicked');
    }

  const handleClick2 = () =>{
    alert('button clicked 2')
  }

  const addFive = (num) =>{
      alert(num + 5);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me2</button>
      <button onClick={() => {alert('third button clicked')}}>third button</button>
      <button onClick={() => addFive(3)}>four clicked</button>

    </>
  )
}

export default App
