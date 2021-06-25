import axios from 'axios'

const KEY = 'AIzaSyDHQoYVdkATVeSmAbYqnc2WcKohx1z8eqc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }

});

