const API_URL = 'http://localhost:5000/api';

export const fetchSongs = async () => {
  const response = await fetch(`${API_URL}/music`);
  return response.json();
}

export const fetchNewReleases = async () => {
  const response = await fetch(`${API_URL}/new-releases`);
  return response.json();
}

export const likeSong = async (songId: number) => {
  const token = localStorage.getItem('access_token');
  console.log('token:', token);
  try {
    const response = await fetch(`${API_URL}/like_song`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Include the JWT token
      },
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


