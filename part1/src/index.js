import React from 'react'
import ReactDOM from 'react-dom'


const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
  
  const App = () => {
      const name = 'Peter'
      const age = 8
      const Name = "George"

    return (
      <div>
        <h1>Greetings</h1>
        <Hello name='Micheal' age= {age + 2 }/>
        <Hello name='Jessica' age= {age + 9} />
        <Hello name = {Name}  age = {age +4} />
        <Hello name = {name}  age = {age} />
      </div>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById('root'))