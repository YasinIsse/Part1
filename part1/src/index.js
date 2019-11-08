import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button =(props)=> {

return <button onClick={props.onClick}> {props.text } </button>

}
const History = ({allClicks}) => {

  if (allClicks.length === 0)
    {
      return  <div> The app is used by pressing the buttons. </div>
    }

    else
    {
      return <div> The History: {allClicks.join("-")} </div>
    }
  }
const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }


  return (
    <div>
      <div>
        {left}
        <Button onClick={(handleLeftClick)} text="Left"/>
        <Button onClick={handleRightClick} text="Right"/>
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
