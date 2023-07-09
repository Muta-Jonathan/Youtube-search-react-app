import axios from "axios";

const KEY = "AIzaSyC46COuwYrtK5w2K8aFPqUJPf5Wigj1Mmw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    type: "video",
    maxResults: 5,
  },
});
