import { Component } from "react"
import PropTypes from "prop-types"

// Props = read-only properties that are shared between components
    //    A parent component can send data to a child component. 
    //    <Component key = value />

function Student(props) {
    return(

        <div className="student"> 
            <p> Name: {props.name}</p>
            <p> Age: {props.age}</p>
            <p> Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
//propTypes = checks if the passed  value is the correct datatype, age:PropTypes.number
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool

}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student





