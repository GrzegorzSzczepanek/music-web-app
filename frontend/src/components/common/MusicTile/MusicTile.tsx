import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsisH, faHeart } from '@fortawesome/free-solid-svg-icons';
import './MusicTile.css';
import PopUpMenu from '../OptionPopup/OptionPopup';

interface MusicTileProps {
  song: {
    title: string;
    artist: string;
    image: string;
    url: string;
    release_date: string;
    // id: number;
  };
  setCurrentSong: React.Dispatch<React.SetStateAction<string>>;
}

const MusicTile: React.FC<MusicTileProps> = ({ song, setCurrentSong }) => {
  const [showPopup, setShowPopup] = useState(false);

  console.log(song);

  const playSong = () => {
    setCurrentSong(song);
  }

  return (
    <div className="tile">
      <div className="image-container">
        <img
          src={song.image}
          alt={song.title}
          className="image"
        />
        <div className="button-section">
          <button id="play" onClick={playSong} className="song-option-button">
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <div className="right-buttons">
            <button id="more-options" className="song-option-button hover-show" onClick={() => setShowPopup(!showPopup)}>
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
            {showPopup && PopUpMenu()}
            <button id="favorite" className="song-option-button hover-show">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-text">
        <h3 className="title">{song.title}</h3>
        <p className="artist">{song.artist}</p>
      </div>
    </div>
  );
};

export default MusicTile;
