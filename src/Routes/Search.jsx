import React, { useState } from "react";
import Artists from "../components/Artists";

const Search = (props) => {
  const [artists, setArtists] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`https://api.napster.com/v2.2/search?query=${searchValue}&type=artist&apikey=OTNhNGE5ZmUtNzRlMC00OTMyLTgxODEtMDc2NGVkYmRjMzMy`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.search) {
          setArtists(jsonResponse.search.data.artists);
        } else {
          setErrorMessage(jsonResponse.Error);
        }
        setLoading(false);
    });
  }

  return (
    <>
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={handleSearch} type="submit" value="SEARCH" />
      </form>
      {artists && (
        <Artists artists={artists} />
      )}
    </>
  );
}

  

export default Search