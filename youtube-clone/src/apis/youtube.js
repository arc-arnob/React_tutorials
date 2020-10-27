import axios from 'axios';

const KEY = 'AIzaSyAko3zIAHeVqjTWeaS5Rx9Nqcb_Okg7Z9A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
