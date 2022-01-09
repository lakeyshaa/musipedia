import { useEffect, useState } from 'react';
import Artist from './Artist';


const Artists = ({ artists }) => {

  const artistsList = artists.map(artist => <Artist artist={artist} />);

  return (
    <div>
      <p>Search Results</p>
      <ul>{artistsList}</ul>
    </div> 
  )
};

export default Artists;