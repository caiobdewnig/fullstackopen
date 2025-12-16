import Person from './Person'

const Persons = ({ personsToShow, deletePerson }) => {
  return (
    <table>
      <tbody>
        {personsToShow.map(person => (
          <tr key={person.id}> 
            <td><Person person={person} /></td>
            <td>
              <button onClick={() => deletePerson(person.id, person.name)}>
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Persons