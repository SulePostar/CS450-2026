import { useState } from "react";
import youtube from "../youtube";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = e => {
    if (e.key === "Enter") {
      youtube.get("/search", {
        params: {
          maxResults: 5,
          q: query
        }
      }).then(res => {
        onSearch(res.data.items)
      });
    }
  };

  return (
    <>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onKeyUp={handleSubmit}
        onChange={e => setQuery(e.target.value)} />
      <div style={{ fontSize: "1.5rem" }}>❌</div>
    </>
  );
}

export default Search;