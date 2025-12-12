const Course = ({course}) => {
  return (
    <>
      <h2 key={course.id}>{course.name}</h2>
      <ol key={course.id}>
        {course.parts.map((part, i) => {
          return (
            <>
              <li key={part.id + i}>{part.name} - ({part.exercises} exercises)</li>
            </>
          )
        })}
      </ol>
      <b key={course.id}>Exercises in total for the "{course.name}" course: {course.parts.reduce((sum, order) => sum + order.exercises, 0)}</b>  
    </>
  )
};

export default Course;