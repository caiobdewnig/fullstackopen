import { useState, useEffect } from 'react'
import './main.css'
import httpService from './services/httpmodule.js'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }
    
    if (persons.find(person => person.name === newName || person.number === newNumber)) {
      alert(`${newName} or ${newNumber} is already in the phonebook!`)
    } else {
      httpService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(searchName.toLowerCase())
  )

  useEffect(() => {
  console.log('effect')
  httpService
    .getAll()
    .then(initialPerson => {setPersons(initialPerson)})
  }, [])
  console.log('render', persons.length, 'persons')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        searchName={searchName} 
        handleSearchChange={handleSearchChange} 
      />

      <h3>Add a new person</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App