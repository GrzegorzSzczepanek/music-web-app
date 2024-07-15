// src/components/specific/Home/Home.tsx
import React from 'react';
import styles from './Home.module.css';
import MusicTile from '../../common/MusicTile/MusicTile';
import PlaylistSideBar from '../../common/PlaylistSideBar/PlaylistSideBar';
import OptionPopup from '../../common/OptionPopup/OptionPopup';

const Home: React.FC = () => {

  const musicItems = [
    { title: 'Song Title 1', artist: 'Artist Name 1', imageSrc: 'https://picsum.photos/200' },
    { title: 'Song Title 2', artist: 'Artist Name 2', imageSrc: 'https://picsum.photos/200' },
    { title: 'Song Title 3', artist: 'Artist Name 3', imageSrc: 'https://picsum.photos/200' },
    // Add more items as needed
  ];

  return (
    <div className={styles.container}>
    <div className={styles.tiles}>
        {musicItems.map((item, index) => (
          
            <MusicTile
              key={index}
              title={item.title}
              artist={item.artist}
              imageSrc={item.imageSrc}
            />
          
          
        ))}
    </div>

    
  </div>
  );
};

export default Home;
