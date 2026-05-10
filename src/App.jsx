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

  
  const fruits = [{id: 1, name:"apple", calories: 95},
        {id: 2, name:"orange",calories: 115}, // Use id for keeping track in real systems
        {id: 3, name:"banana",calories: 190},
        {id: 4, name:"coconut",calories: 90}]

  const vegetables = [{id: 5, name:"potato", calories: 115},
        {id: 6, name:"cuumvber",calories: 25}, // Use id for keeping track in real systems
        {id: 7, name:"carot",calories: 60},
        {id: 8, name:"brocolli",calories: 90}]
  return(
    <> 
      {/* conditional redering if there are no elments then dont render the list category box */}
    {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
    </>
  );
}
export default App
