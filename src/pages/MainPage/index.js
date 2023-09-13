import React from "react"
import { Category } from "../../components/units/category"
import { Banner } from "../../components/units/banner"
import Row from "../../components/units/row"
import { styled } from "styled-components"
import { request } from "../../api/request"

const MainPage = () => {
  const rowArr = [
    { title: "Trending Now", id: "TN", fetchUrl: request.fetchTrending },
    { title: "Top Rated", id: "TR", fetchUrl: request.fetchTopRated },
    { title: "Action Movies", id: "AM", fetchUrl: request.fetchActionMovies },
    { title: "Comedy Movies", id: "CM", fetchUrl: request.fetchComedyMovies }
  ]

  return (
    <Container>
      <Banner />
      <Category />
      {rowArr.map((el) => {
        return (
          <Row key={el.id} title={el.title} id={el.id} fetchUrl={el.fetchUrl} />
        )
      })}
    </Container>
  )
}

export default MainPage

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`
