import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Diplay = (props) => {
  return anecdotes[props.index]
}

const Button =(props) => {
    return (<button onClick = {props.onClick}> {props.text}</button>)
}

const Votes = (props) => {
    return <div>has {props.value} votes </div>
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints]  = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
  
  const handleRandomClick = () => {
      setSelected(Math.floor((Math.random() * 6) ))
    }
  const handleVotelick = () => {
    const newArray = [...points]
    newArray[selected]+=1
    setPoints(newArray)
  }

  const maxiumVotes = () => {
    let maximum = points[0]
    let maximumIndex = 0
    for (let i = 1; i < points.length; i++) {
        if (points[i] > maximum) {
          maximum = points[i]  
          maximumIndex = i
        }
    }
    return maximumIndex;
  }

  return (
    <div>
        <h1>Anecdote of the day</h1>
        <Diplay index = {selected}/>
        <Votes value={points[selected]}/>
        <div>
        <Button onClick= {handleVotelick} text="vote"/>
        <Button onClick= {handleRandomClick} text="next anecdote"/>
        </div>
        <h1>Anecdote with most votes</h1>
        <Diplay index = {maxiumVotes()}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App />,
  document.getElementById('root')
)