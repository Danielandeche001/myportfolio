function SearchBar({ searchQuery, onSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search Projects"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
