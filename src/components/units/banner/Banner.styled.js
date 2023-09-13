import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 688px;
`

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const Button = styled.button`
  width: 60px;
  height: 24px;
  border: none;
  font-weight: bold;
`
