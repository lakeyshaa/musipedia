
const Artists = ({ artists }) => {

  const artistsList = artists.map((artist, index) => (
    <li key={`${index}-${artist.Title}`}>{artist.name}</li>
  ));

  return ( 
<div>
      <p>Search Results</p>
      <ul>{artistsList}</ul>
    </div> 
  )
};

export default Artists;