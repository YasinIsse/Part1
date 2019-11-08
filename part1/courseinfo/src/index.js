import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.course}</h1>
    )
  }

  const Part = (props) => {
    return (
        <p> {props.name}  {props.exercise}</p>
    )
  }

  const Content = (props) => {
    console.log(props.parts)
    return (  
          <div>
              {props.parts.map( (value, i) => 
                 <Part  key= {i}  name= {value.name} exercise = {value.exercise}/>)
              }
              
          </div>
    )
  }

  const Total = (props) => {
    let totalValue = 0
    props.parts.map( (value) => totalValue+= value.exercise )
    return (     
        <p>Number of exercises {totalValue} </p>
    )
  }

const App = () => {

    const course = {
      name: 'Half Stack Application Development',
    
      parts:  [ {
                name: 'Fundamentals of React',
                exercise: 10 
                },
                {
                name: 'Using props to pass data',
                exercise: 7
                },
                {
                name:  'State of a component',
                exercise: 14
                }
              ]
    }

  return (
      <div>
          <Header course={course.name}/>
          <Content parts= {course.parts} />
          <Total  parts= {course.parts} />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))