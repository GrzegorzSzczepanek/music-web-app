const API_URL = 'http://localhost:5000/api';

export const fetchItems = async () => {
  const response = await fetch(`${API_URL}/items`);
  return response.json();
};

// Ensure this file is treated as a module
export {};
