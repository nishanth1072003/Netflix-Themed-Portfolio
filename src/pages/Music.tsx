import React from "react";
import "./Music.css";
import albumCover1 from "../images/downersatdusk.jpg"; // Hotel California by The Eagles
import albumCover2 from "../images/ac-dc.jpg"; // Back in Black by AC/DC
import albumCover3 from "../images/untitled.jpg"; // Appetite for Destruction by Guns N' Roses

const favoriteGenres = [
  "Rock",
  "Classic Rock",
  "Hard Rock",
  "Blues",
  "Alternative",
];

const favoriteAlbums = [
  { title: "Downers at Dusk", artist: "Talha Anjum", imgSrc: albumCover1 },
  { title: "Back in Black", artist: "AC/DC", imgSrc: albumCover2 },
  {
    title: "Untitled",
    artist: "KR$NA",
    imgSrc: albumCover3,
  },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>“Desi Hip-Hop & Pop isn’t a genre, it’s a way of life.” 🎸</p>
      </div>

      <div className="albums-section">
        <h3>Favorite Songs</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <div
              key={index}
              className="album-card"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <img
                src={album.imgSrc}
                alt={album.title}
                className="album-image"
              />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
