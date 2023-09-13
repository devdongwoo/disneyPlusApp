import React from "react"
import * as C from "./Category.styled"

export const Category = () => {
  const categoryArr = [
    { name: "viewers-disney.png", alt: "disney", viedoName: "disney" },
    { name: "viewers-marvel.png", alt: "marvel", viedoName: "marvel" },
    {
      name: "viewers-national.png",
      alt: "national",
      viedoName: "national-geographic"
    },
    { name: "viewers-pixar.png", alt: "pixar", viedoName: "pixar" },
    { name: "viewers-starwars.png", alt: "starwars", viedoName: "star-wars" }
  ]
  return (
    <C.Container>
      {categoryArr.map((el) => {
        return (
          <C.Wrap>
            <img src={`/images/${el.name}`} alt={el.alt} />
            <video autoPlay loop muted>
              <source src={`/videos/${el.viedoName}.mp4`} type="video/mp4" />
            </video>
          </C.Wrap>
        )
      })}
    </C.Container>
  )
}
