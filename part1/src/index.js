import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [ counter,setCounter ] = useState(0)

 const increaseByOne = () => setCounter (counter +1 )
 const setToZero = () => setCounter(0)

  return (
    <div>
      <div>The Count is: {counter}</div>
      <button onClick={increaseByOne}>
        Add
      </button>

      <button onClick={setToZero}>
        Zero
      </button>
    </div>
  )
}
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
