import { useState } from 'react'
import './main.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0000' },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }
    persons.find(person => person.name === newName) ? alert(`${newName} is already in the phonebook!`) : setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handlePersonChange}
            type="text"
          />
          <br/>
          <br/>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
            type="text"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {persons.map(person => 
            <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.number}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default App