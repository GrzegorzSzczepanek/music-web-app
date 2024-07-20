import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import Home from '../components/specific/Home/Home';

const HomePage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [currentSong, setCurrentSong] = React.useState<{}>({});

  return (
    <div>
      <MainLayout>
        <Home searchResults={searchResults} setCurrentSong={setCurrentSong}  />
      </MainLayout>
    </div>
  );
};

export default HomePage;
