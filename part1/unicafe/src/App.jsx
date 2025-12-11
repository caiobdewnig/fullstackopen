import { useState } from 'react'
import './main.css'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)


const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }


  const goodPct = (good * 100) / total
  const neutralPct = (neutral * 100) / total
  const badPct = (bad * 100) / total
  const yourAverage = (total / 3) 

  return (
    <table>
      <tbody>
        <StatisticLine 
          text="Total de respostas 'Good'" 
          value={`${good} - (${goodPct.toFixed(0)}% do total)`} 
          className="line"
        />
        <StatisticLine 
          text="Total de respostas 'Neutral'" 
          value={`${neutral} - (${neutralPct.toFixed(0)}% do total)`} 
          className="line"
        />
        <StatisticLine 
          text="Total de respostas 'Bad'" 
          value={`${bad} - (${badPct.toFixed(0)}% do total)`} 
          className="line"
        />
        <StatisticLine 
          text="Total de respostas" 
          value={total} 
        />
        <StatisticLine 
          text="Média das respostas" 
          value={yourAverage.toFixed(2)} 
          className="line"
        />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give a Feedback!</h1>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App