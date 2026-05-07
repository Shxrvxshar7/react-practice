import { useState } from 'react'
import Student from './Student.jsx'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      { <Student name = "Spongebob" age = {30} isStudent ={true} />   /* this key value pair will be sent to the props object in Student.jsx */}
      {<Student name = "Patrick" age = {32} isStudent ={false}/>}
      {<Student name = "Sandy" age = {25} isStudent ={true}/>}
    </>
  )
}

export default App
