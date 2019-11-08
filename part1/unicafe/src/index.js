import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button =(props) => {
    return <button onClick = {props.onClick}>{props.text}</button>
}

const Statistic = (props) => {
        return (
        <tr>
        <td> {props.text}  </td>
        <td> {props.value} </td>
        </tr>
        )
}

const Statistics = ({bad, good, neutral}) => {
    if (good === 0 && bad === 0 && neutral === 0){
        return  <div> No statistics given </div>
     }
     else{
        return (
        <table>
            <tbody>
                <Statistic value = {good} text ="good"/>
                <Statistic value = {neutral} text ="neutral"/>
                <Statistic value = {bad} text ="bad" />
                <Statistic value = {bad+good +neutral} text ="all" />
                <Statistic value = {(good - bad)/(bad+good +neutral)} text ="average" />
                <Statistic value = {(good)/(bad+good +neutral)*100 + " %"} text ="positive" />
            </tbody>
        </table>
        )
    }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => { setGood(good +1 )}
  const handleNeutralClick = () => { setNeutral(neutral +1 ) }
  const handleBadClick = () => { setBad(bad +1 ) }

  return (
      
      <div>
          <h1>give feedback</h1>
          <Button onClick ={handleGoodClick} text="good"/>
          <Button onClick ={handleNeutralClick} text="neutral"/>
          <Button onClick ={handleBadClick} text="bad"/>
          <h1>statistics</h1>
          <Statistics good={good} bad={bad} neutral ={neutral}/>
      </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)