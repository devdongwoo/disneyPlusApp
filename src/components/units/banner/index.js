import React, { useEffect, useState } from "react"
import axios from "../../../api/axios"
import { truncate } from "../../common/utilities"
import "./Banner.css"
import * as B from "./Banner.styled"
import { request } from "../../../api/request"

export const Banner = () => {
  const [movie, setMovie] = useState([])
  const [show, setShow] = useState(false)

  const fetchData = async () => {
    const response = await axios.get(request.fetchNowPlaying)

    const movieId =
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ].id

    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" }
    })
    setMovie(movieDetail)
  }

  const onClickModal = () => {
    setShow((prev) => !prev)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {show ? (
        <>
          <B.Container>
            <B.HomeContainer>
              <B.Iframe
                width="640"
                height="360"
                frameborder="0"
                allow="autoplay; fullscreen"
                src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&playlist=${movie.videos.results[0].key}`}
              ></B.Iframe>
            </B.HomeContainer>
          </B.Container>
          <B.Button onClick={onClickModal}>X</B.Button>
        </>
      ) : (
        <header
          className="banner"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundPosition: "top center",
            backgroundSize: "cover"
          }}
        >
          <div className="banner_cover" />
          <div className="banner_contents">
            <h1 className="banner_title">
              {movie.title ?? movie.name ?? movie.original_name}
            </h1>

            <div className="banner_buttons">
              {movie?.videos?.results[0]?.key && (
                <button className="banner_button play" onClick={onClickModal}>
                  Play
                </button>
              )}
            </div>
            <p className="banner_description">{truncate(movie.overview, 50)}</p>
          </div>
          <div className="banner_fadeBottom" />
        </header>
      )}
    </>
  )
}
