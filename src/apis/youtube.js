import axios from 'axios'
const KEY='AIzaSyAnrcJkCbgEFbXaopEPMzQcRLmRVw84s3s'; 

export default axios.create(
    {
        baseURL:'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            maxResulst: 5,
            key: KEY,
        }
    }
);