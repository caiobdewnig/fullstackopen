import { useState } from 'react'
import './main.css'

const App = () => {
   const [persons, setPersons] = useState([
     { name: 'Arto Hellas', number: '040-123456', id: 1 },
     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
     { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
     { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
   ]) 
   const [newName, setNewName] = useState('')
   const [newNumber, setNewNumber] = useState('')
   const [searchName, setSearchName] = useState('')

   const addPerson = (event) => {
     event.preventDefault();
     const personObject = {
        name: newName,
        number: newNumber
     }
     
     if (persons.find(person => person.name === newName)) {
       alert(`${newName} is already in the phonebook!`)
     } else {
       setPersons(persons.concat(personObject))
     }

     setNewName('')
     setNewNumber('')
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

   return (
     <div>
        <h2>Phonebook</h2>
        Searchbar <input type="text" onChange={handleSearchChange} value={searchName} />
        <br/>
        <br/>
        <form onSubmit={addPerson}>
          <div>
             Name: <input 
               value={newName}
               onChange={handlePersonChange}
               type="text"
             />
             <br/>
             <br/>
             Number: <input 
               value={newNumber}
               onChange={handleNumberChange}
               type="text"
             />
          </div>
          <div>
             <button type="submit">Add Person</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <table>
          <tbody>
             {personsToShow.map(person => 
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