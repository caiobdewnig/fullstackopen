const Person = ({ person }) => {
  return (
    <tr>
      <td>{person.name}</td>&nbsp;&nbsp;&nbsp;&nbsp;
      <td>{person.number}</td>&nbsp;&nbsp;&nbsp;&nbsp;
    </tr>
  )
}

export default Person