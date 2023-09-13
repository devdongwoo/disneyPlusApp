import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "../../api/axios"
import useDebounce from "../../hooks/useDebounce"
import "./SearchPage.css"

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([])

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  const navigate = useNavigate()

  let query = useQuery()
  const searchTerm = query.get("q")
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const fetchSearchMovie = async () => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      )
      setSearchResult(response.data.results)
    } catch (err) {
      if (err instanceof Error) console.log(err)
    }
  }

  useEffect(() => {
    if (debouncedSearchTerm) fetchSearchMovie(searchTerm)
  }, [debouncedSearchTerm])

  if (searchResult.length > 0) {
    return (
      <section className="search-container">
        {searchResult.map((el) => {
          if (el.backdrop_path !== null && el.media_type !== "person") {
            const movieImageUrl = `https://image.tmdb.org/t/p/w500${el.backdrop_path}`
            return (
              <div className="movie" key={el.id}>
                <div
                  className="movie_column-poster"
                  onClick={() => navigate(`/${el.id}`)}
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie_poster"
                  />
                </div>
              </div>
            )
          }
        })}
      </section>
    )
  } else {
    return (
      <section className="no-results">
        <div className="no-results_text">
          <p>찾고자하는 검색어{searchTerm}</p>
        </div>
      </section>
    )
  }
}

export default SearchPage
