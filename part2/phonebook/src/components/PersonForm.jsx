const PersonForm = ({ addPerson, newName, handlePersonChange, newNumber, handleNumberChange }) => {
  return (
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
  )
}

export default PersonForm