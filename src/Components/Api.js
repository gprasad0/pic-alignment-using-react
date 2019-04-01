import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 508e9cf7d1a922ab482d81e96fc0dc9527db7d5920837b1ebb7372b92fcbc39f"
  } 
});
