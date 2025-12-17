import { useState, useEffect } from 'react'
import './main.css'
import httpService from './services/httpmodule.js'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Note from './components/Note.jsx'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [errorNote, setErrorNote] = useState('asdasd')

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(p => p.name.toLowerCase() === newName.toLowerCase());

    if (existingPerson) {
      updatePersonOf(existingPerson.id, existingPerson.name);
      setErrorNote(`${newName} number altered!!!`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      httpService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
          setErrorNote(`${newName} created!!!`)
        })
        .catch(() => {
          setErrorNote(`Error: couldn't add ${newName}`)
        })
    }
  };

  const deletePersonOf = (id, name) => {
    if (window.confirm(`Do you want to delete ${name}?`)) {
      httpService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
          setErrorNote(`${name} deleted.`)
        })
        .catch(() => {
          setErrorNote(`Error: the person '${name}' was already deleted from server.`)
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  const updatePersonOf = (id, name) => {
  if (window.confirm(`${name} is already in the phonebook, replace the old number with a new one?`)) {
    const updatedPerson = { name, number: newNumber };

    httpService
      .updateNumber(id, updatedPerson)
      .then((returnedPerson) => {
        setPersons(persons.map(p => p.id !== id ? p : returnedPerson));
        setNewName('');
        setNewNumber('');
        setErrorNote(`${name}'s number updated!`)
      })
      .catch(() => {
        setErrorNote(`Error: ${name} was probably already deleted from the server`);
        setPersons(persons.filter(p => p.id !== id));
      });
  }
};

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
      <h1 className="title">Phonebook</h1>
      <Note message={errorNote} className={errorNote.toLowerCase().includes("error") ? 'error' : 'good'}/>
      <Filter 
        searchName={searchName} 
        handleSearchChange={handleSearchChange} 
      />

      <h3 className="subtitle">Add a new person</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleUpdatePerson={updatePersonOf}
      />

      <h2 className="title">Numbers</h2>
      <Persons personsToShow={personsToShow} deletePerson={deletePersonOf} className="persons"/>
    </div>
  )
}

export default App