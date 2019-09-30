import axios from "axios";

//creating instant axios client
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 9ed1e1eab266670d232a515cf6c01f3df388c2f4c1a76d47c6259ebd2bd543fc"
      }
});
