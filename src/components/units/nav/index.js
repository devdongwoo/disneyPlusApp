import React, { useEffect, useState } from "react"
import * as N from "./Nav.styled"
import { useLocation, useNavigate } from "react-router-dom"
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth"

export const Nav = () => {
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()

  const localUserData = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {}

  const [user, setUser] = useState(localUserData)
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate()
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  const handleScroll = () => {
    if (window.scrollY > 30) setShow(true)
    else setShow(false)
  }

  const handleChange = (e) => {
    setSearchValue(e.currentTarget.value)
    navigate(`/search?q=${e.currentTarget.value}`)
  }

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("user", JSON.stringify(result.user))
        setUser(result.user)
      })
      .catch((err) => {
        if (err instanceof Error) console.log(err)
      })
  }

  const onClickLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
        navigate("/")
      })
      .catch((err) => {
        if (err instanceof Error) console.log(err)
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (pathname === "/") navigate("/main")
      } else {
        navigate("/")
      }
    })
  }, [auth, navigate, pathname])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <N.NavWrapper show={show}>
      <N.Logo>
        <img
          alt="DisneyPlusLogo"
          src="/images/logo.svg"
          onClick={() => navigate("/")}
        />
      </N.Logo>
      {pathname === "/" ? (
        <N.Login onClick={() => handleAuth()}>Login</N.Login>
      ) : (
        <>
          <N.Input
            value={searchValue}
            onChange={handleChange}
            className="nav_input"
            type="text"
            placeholder="검색해주세요."
          />
          <N.SignOut>
            <N.UserImg src={user.photoURL} alt={user.displayName} />
            <N.DropDown>
              <span onClick={onClickLogOut}>로그아웃</span>
            </N.DropDown>
          </N.SignOut>
        </>
      )}
    </N.NavWrapper>
  )
}
