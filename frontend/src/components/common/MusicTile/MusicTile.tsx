import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsisH, faHeart } from '@fortawesome/free-solid-svg-icons';
import './MusicTile.css';
import { likeSong } from '../../../services/api';
import PopUpMenu from '../OptionPopup/OptionPopup';
import { Session } from 'inspector';

interface MusicTileProps {
  song: {
    title: string;
    artist: string;
    artist_id: number;
    image: string;
    url: string;
    release_date: string;
    id: number;
  };
  setCurrentSong: any;
}

const MusicTile: React.FC<MusicTileProps> = ({ song, setCurrentSong }) => {
  const [showPopup, setShowPopup] = useState(false);

  const playSong = () => {
    setCurrentSong(song);
  };


  const handleFavorite = async () => {
    try {
      await likeSong(song.id);
      // console.log('Song liked successfully!');
    } catch (error) {
      console.error('Error performing user action:', error);
    }
  };

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
            {showPopup && <PopUpMenu />}
            <button id="favorite" onClick={handleFavorite} className="song-option-button hover-show">
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
