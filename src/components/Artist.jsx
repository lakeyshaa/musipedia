import React, { useEffect, useState } from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/I/61IeCixjIZL._SL1002_.jpg"

const Artist = ({ artist }) => {

  const [image, setImage] = useState("")
  useEffect(() => {
    console.log('artistid', artist.id)
    fetch(`https://api.napster.com/v2.2/artists/${artist.id}/images?apikey=OTNhNGE5ZmUtNzRlMC00OTMyLTgxODEtMDc2NGVkYmRjMzMy`)
    .then(response => response.json())
    .then(data => {
      console.log(data.images)
      setImage(data.images[0]?.url || DEFAULT_PLACEHOLDER_IMAGE)
    })
  }, [artist])


 
  return (
    <div className="artist">
      <h2>{artist.name}</h2>
      <div>
        <img
          width="200"
          alt={`The artist: ${artist.name}`}
          src={image}
        />
      </div>
    </div>
  );
};


export default Artist;