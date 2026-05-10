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

 

// conditional redering 
import UserGreeting from "./UserGreeting.jsx"

function App() {
  return(
    <>
      <UserGreeting isLoggedIn = {false} username="Sharvesh"/>
    </>
  )
}

export default App

*/

// Redndering lists

import List from "./List.jsx"
function App(){

  const fruits = [{name:"apple", calories: 95},
        {name:"orange",calories: 115}, // Use id for keeping track in real systems
        {name:"banana",calories: 190},
        {name:"coconut",calories: 90}]

  const vegetables = [{name:"potato", calories: 115},
        {name:"cuumvber",calories: 25}, // Use id for keeping track in real systems
        {name:"carot",calories: 60},
        {name:"brocolli",calories: 90}]
  return(
    <> 
    <List items={fruits} category="Fruits"/>
    <List items={vegetables} category="Vegetables"/>
    </>
  );
}
export default App
