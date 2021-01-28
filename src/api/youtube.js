import axios from 'axios'

const KEY = 'AIzaSyDj1PhWPC_5FmSDjB0LPDwTMstFG-hV78E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { 
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});