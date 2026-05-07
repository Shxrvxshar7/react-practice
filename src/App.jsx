/* 

import { useState } from 'react'
import Student from './Student.jsx'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {<Student name = "Spongebob" age = "35" isStudent ={true} /> }
      {<Student name = "Patrick" age = {32} isStudent ={false}/>}
      {<Student name = "Sandy" age = {25} isStudent ={true}/>}
      {<Student/>}
      
    </>
  )
}

export default App

*/ 


import UserGreeting from "./UserGreeting.jsx"

function App() {
  return(
    <>
      <UserGreeting isLoggedIn = {false} username="Sharvesh"/>
    </>
  )
}

export default App