const API_URL = 'http://localhost:5000/api';

export const fetchItems = async () => {
  const response = await fetch(`${API_URL}/items`);
  return response.json();
};

export const fetchSongs = async () => {
  const response = await fetch(`${API_URL}/music`);
  return response.json();
}

export const fetchNewReleases = async () => {
  const response = await fetch(`${API_URL}/new-releases`);
  return response.json();
}

export const addFavorite = async (userId: number, songId: number) => {
  const response  = await fetch(`${API_URL}/add_favorite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
       userId,
       songId
       }),
    });

    return response.json();
}


export const likeSong = async (songId: number) => {
  try {
    const response = await fetch('http://localhost:5000/api/like_song', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ song_id: songId }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data.success) {
      console.log('Song liked successfully!');
    } else {
      console.error('Failed to like song:', data.message);
    }
  } catch (error) {
    console.error('Error liking song:', error);
  }
};

// export const fetchWithAuth = async (url: string, options = {}) => {
//   const token = localStorage.getItem('token');
//   const headers = {
//       'Content-Type': 'application/json',
//       ...options.headers,
//   };
//   if (token) {
//       headers['Authorization'] = `Bearer ${token}`;
//   }
//   const response = await fetch(url, {
//       ...options,
//       headers,
//   });
//   return response;
// };

// Ensure this file is treated as a module
export {};
