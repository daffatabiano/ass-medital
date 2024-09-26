import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">
      <i>
        <FaMapMarkerAlt />
      </i>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search some place"
      />
      <button type="button">
        <FaSearch />
      </button>
    </div>
  );
}
