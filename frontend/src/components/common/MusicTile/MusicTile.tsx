import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsisH, faHeart } from '@fortawesome/free-solid-svg-icons';
import './MusicTile.css';
import PopUpMenu from '../OptionPopup/OptionPopup';

interface MusicTileProps {
  title: string;
  artist: string;
  imageSrc: string;
  song_link: string;
  setCurrentSongLink: React.Dispatch<React.SetStateAction<string>>;
}

const MusicTile: React.FC<MusicTileProps> = ({ title, artist, imageSrc, song_link, setCurrentSongLink }) => {
  const [showPopup, setShowPopup] = useState(false);
  console.log(song_link);

  const playSong = () => {
    console.log(song_link);
    setCurrentSongLink(song_link);
  }

  return (
    <div className="tile">
      <div className="image-container">
        <img
          src={imageSrc}
          alt={title}
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
        <h3 className="title">{title}</h3>
        <p className="artist">{artist}</p>
      </div>
    </div>
  );
};

export default MusicTile;
