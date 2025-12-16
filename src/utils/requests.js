import axios from 'axios';

// Placeholder function for fetching movie data
export const getMovie = async (id) => {
  try {
    const response = await axios.get(`/api/movies/${id}`);
    return response;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error;
  }
};
