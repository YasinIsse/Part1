import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button =(props) => {
    return <button onClick = {props.onClick}>{props.text}</button>
}

const Statistic = (props) => {
        return <td>{props.text} {props.value} </td>
}

const Statistics = ({bad, good, neutral}) => {
    if (good === 0 && bad === 0 && neutral === 0){
        return  <div> No statistics given </div>
     }
     else{
        return (
        
        <table>
            <tbody>
                <tr>
                <Statistic value = {good} text ="good"/>
                </tr>
                <tr>
                <Statistic value = {neutral} text ="neutral"/>
                </tr>
                <tr>
                <Statistic value = {bad} text ="bad" />
                </tr>
                <tr>
                <Statistic value = {bad+good +neutral} text ="all" />
                </tr>
                <tr>
                <Statistic value = {(good - bad)/(bad+good +neutral)} text ="average" />
                </tr>
                <tr>
                <Statistic value = {(good)/(bad+good +neutral)*100 + " %"} text ="positive" />
                </tr>
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