import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Display =({counter}) => <div>The Count is: {counter}</div> 

const Button = ({onClick,text}) => ( <button onClick={onClick}> {text} </button> )

const App = (props) => {
  const [ counter,setCounter ] = useState(0)

//  const increaseByOne = () => setCounter (counter +1 )
//  const setToZero = () => setCounter(0)
  const setToValue = (value) => () => {setCounter(value)}

  return (
    <div>
      <Display counter= {counter} />
      <Button onClick=  {setToValue(counter + 1)} text ="Add"  />
      <Button onClick=  {setToValue(0)} text ="Zero"  />
    </div>
  )
}
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
