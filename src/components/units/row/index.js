import React, { useCallback, useEffect, useState } from "react"
import styled from "styled-components"
import axios from "../../../api/axios"
import MovieModal from "../movieModal"
import "./Row.css"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/scrollbar"
import "swiper/css/pagination"

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  const [modal, setModal] = useState(false)
  const [movieInfo, setMovieInfo] = useState({})

  const handleClick = (el) => {
    setModal(true)
    setMovieInfo(el)
  }

  const fetchMovieData = useCallback(async () => {
    const request = await axios.get(fetchUrl)
    setMovies(request.data.results)
  }, [fetchUrl])

  useEffect(() => {
    fetchMovieData()
  }, [fetchMovieData])
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3
          }
        }}
      >
        <Content id={id}>
          {movies.map((el) => (
            <SwiperSlide key={el.id}>
              <Wrap>
                <img
                  key={el.id}
                  src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}
                  alt={el.name}
                  onClick={() => handleClick(el)}
                />
              </Wrap>
            </SwiperSlide>
          ))}
        </Content>
      </Swiper>

      {modal && <MovieModal {...movieInfo} setModal={setModal} />}
    </Container>
  )
}

export default Row

const Container = styled.div`
  padding: 0 0 26px;
`

const Content = styled.div``

const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out;
    z-index: 1;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`
