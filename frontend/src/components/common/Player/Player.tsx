import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import './Player.css';

interface PlayerProps {
  currentSong: {
    title: string;
    artist: string;
    url: string;
    image: string;
    release_date: string;
    target: number;
    id: number;
  };
}

const Player: React.FC<PlayerProps> = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (audioRef.current && currentSong.url) {
      audioRef.current.src = currentSong.url;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
      audioRef.current.addEventListener('timeupdate', () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      });
      audioRef.current.addEventListener('loadedmetadata', () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
        }
      });
    }
  }, [currentSong]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseFloat(e.target.value);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const mute = () => {
    if (audioRef.current) {
      if (volume > 0) {
        audioRef.current.volume = 0;
        setVolume(0);
      } else {
        audioRef.current.volume = 1;
        setVolume(1);
      }
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="audio-player">
      <div className="pic">
        <img src={currentSong.image} alt={currentSong.title} />
      </div>
      <div className="songInfo">
        <p className="title">{currentSong.title}</p>
        <p className="artist">by {currentSong.artist}</p>
      </div>
      <div className="controls">
        <button className="play-pause" onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <input
          type="range"
          min="0"
          max={duration.toString()}
          value={currentTime.toString()}
          onChange={handleTimeChange}
        />
        <div className="time">
          <span>{formatTime(currentTime)}</span>/<span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="volume-control">
        <button onClick={mute}>
          {volume > 0 ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume.toString()}
          onChange={handleVolumeChange}
        />
      </div>
      <audio ref={audioRef} src={currentSong.url} />
    </div>
  );
};

export default Player;
