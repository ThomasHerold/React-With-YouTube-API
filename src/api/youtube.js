import axios from 'axios';

const KEY = 'AIzaSyDgZr6MP5tZVtNo6ocpimFYeTPp7wPkMPY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'videos',
        maxResults: 5,
        key: KEY
    }
});


