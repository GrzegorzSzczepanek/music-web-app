const API_URL = 'http://localhost:5000/api';

export const fetchItems = async () => {
  const response = await fetch(`${API_URL}/items`);
  return response.json();
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
