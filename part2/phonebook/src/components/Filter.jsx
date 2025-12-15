const Filter = ({ searchName, handleSearchChange }) => {
  return (
    <div>
      Searchbar <input type="text" onChange={handleSearchChange} value={searchName} />
      <br/>
      <br/>
    </div>
  )
}

export default Filter