function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">
      <span>🔍</span>

      <input
        type="text"
        placeholder="Search clubs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;