import React, { useState, useRef, useEffect } from 'react';
import './Player.css';

interface PlayerProps {
  currentSongLink: string;
}

const Player: React.FC<PlayerProps> = ({ currentSongLink }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && currentSongLink) {
      audioRef.current.src = currentSongLink;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSongLink]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="audio-player">
      <audio controls ref={audioRef}>        
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>
      <button className='controls' onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Player;
