const Course = ({course}) => {
  return (
    <>
      <h1 key={course.id}>{course.name}</h1>
      <ol key={course.id}>
        {course.parts.map((part, i) => {
          return (
            <>
              <li key={part.id + i}>{part.name} ({part.exercises} exercises)</li>
            </>
          )
        })}
      </ol>  
    </>
  )
};


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course) => <Course course={course}/>)}
    </div>
  )
}

export default App;