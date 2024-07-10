import React from 'react';

interface MusicTileProps {
  title: string;
  artist: string;
}

const MusicTile: React.FC<MusicTileProps> = ({ title, artist }) => {
  const tileStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '16px',
    textAlign: 'center',
    width: '300px',
    overflow: 'hidden',
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    transition: 'filter 0.3s, opacity 0.3s',
  };

  const bottomText: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    flexDirection: 'column',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#000',
    padding: '16px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.5em',
    margin: '0px',
    transition: 'ease 0.3s',
  };

  const artistStyle: React.CSSProperties = {
    fontSize: '1.2em',
    margin: '0px',
  };

  const hoverEffect: React.CSSProperties = {
    filter: 'blur(5px)',
    opacity: 0.7,
  };

  return (
    <div style={tileStyle}>
      <div style={imageContainerStyle}>
        <img
          src="https://picsum.photos/300"
          alt={title}
          style={imageStyle}
          className="hover-effect"
        />
      </div>
      <div style={bottomText}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={artistStyle}>{artist}</p>
      </div>
      <style>
        {`
          .hover-effect:hover {
            filter: blur(1px);
            opacity: 0.9;
          }
        `}
      </style>
    </div>
  );
};

export default MusicTile;
