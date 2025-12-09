function Header(p) {
    return <h1>{p.course}</h1>
}

function Total(p) {
  return <p>Number of exercises {p.value1 + p.value2 + p.value3}</p>
}

function Content() {
  const curriculum = [
    {part1: 'Fundamentals of React', exercises1: 10},
    {part2: 'Using props to pass data', exercises2: 7},
    {part3: 'State of a component', exercises3: 14}
  ];
  return (
    <>
    {
      curriculum.map((item, index) => (
        <p key={index}>
          {Object.values(item)[0]} {Object.values(item)[1]}
        </p>
      ))
    }
    <Total 
      value1={curriculum[0].exercises1} 
      value2={curriculum[1].exercises2} 
      value3={curriculum[2].exercises3} 
    />
    </>
  )
    
}

const App = () => {

  return (
    <div>
      <Header course='Half Stack application development' />
      <Content />
    </div>
  )
}

export default App