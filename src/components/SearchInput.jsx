
// eslint-disable-next-line react/prop-types
const SearchInput = ({ search, setSearch, handelSearch }) => {
  return (
    <div className="search-input">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="type here city name..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handelSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
