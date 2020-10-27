import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

// Custom Hook 
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  //1. videos = []
  //2. videos = [data]
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]); // will only run if defaultSearchTerm Changes!

  // hooks like function.
  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items); //2.
  };

  return [videos, search];
};

export default useVideos;
