function Header(p) {
    return <h1>{p.course}</h1>
}

function Total(p) {
  return <p>Number of exercises {p.value1 + p.value2 + p.value3}</p>
}

function Part(p) {
  return <p>{p.part} {p.exercises}</p>
}

function Content(p) {
  return (
    <>
      <Part part={p.part1.name} exercises={p.part1.exercises} />
      <Part part={p.part2.name} exercises={p.part2.exercises} />
      <Part part={p.part3.name} exercises={p.part3.exercises} />
      <Total value1={p.part1.exercises} value2={p.part2.exercises} value3={p.part3.exercises} />
    </>
  )
}

const App = () => {
  const courseChoice = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={courseChoice} />
      <Content part1={part1} part2={part2} part3={part3} />
    </>
  )
}

export default App