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
      <p>Total number of "Good" responses: {good} ({Math.round((good*100)/(good + neutral + bad))}% of total responses)</p>
      <p>Total number of "Neutral" responses: {neutral} ({Math.round((neutral*100)/(good + neutral + bad))}% of total responses)</p>
      <p>Total number of "Bad" responses: {bad} ({Math.round((bad*100)/(good + neutral + bad))}% of total responses)</p>
      <p>Total number of responses: {(good + neutral + bad)}</p>
      <p>Average of responses: {((good + neutral + bad)/3).toFixed(2)}</p>
    </>
  )
}

export default App