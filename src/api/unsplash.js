import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID DJhPArV0HmQMqCES6PeSqpht0ej_lJRijoubmxUwUHE'
    }
});