import React, { useEffect, useState } from "react";

const Artist = ({ artist }) => {

  const PLACEHOLDER = "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png";

  const [image, setImage] = useState("")
  useEffect(() => {
    fetch(`https://api.napster.com/v2.2/artists/${artist.id}/images?apikey=OTNhNGE5ZmUtNzRlMC00OTMyLTgxODEtMDc2NGVkYmRjMzMy`)
    .then(response => response.json())
    .then(data => setImage(data.images[0]?.url || PLACEHOLDER))
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