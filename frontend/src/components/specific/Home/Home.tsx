// src/components/specific/Home/Home.tsx
import React from 'react';
import styles from './Home.module.css';
import MusicTile from '../../common/MusicTile/MusicTile';
import PlaylistSideBar from '../../common/PlaylistSideBar/PlaylistSideBar';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>Welcome to the Home Page</h1>
        <p className={styles.content}>This is the home page content.</p>
        <MusicTile
          title='Song Title'
          artist='Artist Name'
          imageSrc='https://picsum.photos/200'
        />
      </div>
      <div className={styles.rightSide}>
        <PlaylistSideBar playlistId={1} />
      </div>
    
  </div>
  );
};

export default Home;
