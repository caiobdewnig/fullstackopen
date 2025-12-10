function Header(p) {
    console.log(p)
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
      {p.arr.map(e => (
        <Part part={e.name} exercises={e.exercises}/>
      ))}
      <Total value1={p.arr[0].exercises} value2={p.arr[1].exercises} value3={p.arr[2].exercises} />
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content arr={course.parts} />
    </div>
  )
}
export default App