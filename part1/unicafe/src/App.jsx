import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give a Feedback!</h1>
      <button onClick={()=> setGood(good + 1)}>Good</button>
      <button onClick={()=> setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={()=> setBad(bad + 1)}>Bad</button>
      <h2>Statistics</h2>
      <p>Total number of "Good" responses: {good}</p>
      <p>Total number of "Neutral" responses: {neutral}</p>
      <p>Total number of "Bad" responses: {bad}</p>
    </>
  )
}

export default App