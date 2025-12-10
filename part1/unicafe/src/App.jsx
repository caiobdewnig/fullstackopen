import { useState } from 'react'

const Statistics = ({gooD, neutraL, baD}) => {
  if (!gooD && !neutraL && !baD) {
    return (<p>No feedback given.</p>)
  } else {
    return (
      <>
        <p>Total number of "Good" responses: {gooD} - ({Math.round((gooD*100)/(gooD + neutraL + baD))}% of total responses)</p>
        <p>Total number of "Neutral" responses: {neutraL} - ({Math.round((neutraL*100)/(gooD + neutraL + baD))}% of total responses)</p>
        <p>Total number of "Bad" responses: {baD} - ({Math.round((baD*100)/(gooD + neutraL + baD))}% of total responses)</p>
        <p>Total number of responses: {(gooD + neutraL + baD)}</p>
        <p>Average of responses: {((gooD + neutraL + baD)/3).toFixed(2)}</p>
      </>
    )
  }
}

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
      <Statistics gooD={good} baD={bad} neutraL={neutral}/>
    </>
  )
}

export default App