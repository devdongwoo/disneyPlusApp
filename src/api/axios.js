import axios from "axios"

// axios instance creation
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "e64814528e2154d1e16df0ff526f7a5f",
    language: "ko-KR"
  }
})

export default instance
