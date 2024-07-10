// src/components/specific/Home/Home.tsx
import React from 'react';
import styles from './Home.module.css';
import MusicTile from '../../common/MusicTile';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Home Page</h1>
      <p className={styles.content}>This is the home page content.</p>
      <MusicTile
        title='Song Title'
        artist='Artist Name'
      />
    </div>
  );
};

export default Home;
