
//import './style.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Artist from '../../components/Artist';
import Search from '../../components/Search';

// const ARTIST_API_URL = "https://api.napster.com/v2.2/?apikey=OTNhNGE5ZmUtNzRlMC00OTMyLTgxODEtMDc2NGVkYmRjMzMy"

// function Main() {
//   const [loading, setLoading] = useState(true);
//   const [artists, setArtists] = useState([]);
//   const [errorMessage, setErrorMessage] = useState(null);
// }

const search = searchValue => {
  setLoading(true)
  setErrorMessage(null);
  fetch(`https://api.napster.com/v2.2/search?query=${searchValue}&type=artist&apikey=OTNhNGE5ZmUtNzRlMC00OTMyLTgxODEtMDc2NGVkYmRjMzMy`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.search) {
        setArtists(jsonResponse.search.data.artists);
        setLoading(false);
      } else {
        setErrorMessage(jsonResponse.Error);
        setLoading(false);
      }
    });
    return (
      <div className="App">
        <p className="App-intro">Here is a list of your favorite artists</p>
        <div className="artists">
          {loading && !errorMessage ? (
            <span>loading...</span>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            artists.map((artist, index) => (
              <Artist key={`${index}-${artist.Title}`} artist={artist} />
            ))
          )}
        </div>
      </div>
    );
}



export default Main;