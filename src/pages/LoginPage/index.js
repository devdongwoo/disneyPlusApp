import React from "react"
import * as L from "./LoginPagestyled"

const LoginPage = () => {
  return (
    <L.Container>
      <L.Content>
        <L.Center>
          <L.LogoOne src="/images/cta-logo-one.svg" />
          <L.SignUpLink>지금 가입</L.SignUpLink>
          <L.Description>
            영화에 대한 프리미어 엑세스를 얻으십시오. 디즈니 플러스 가격은 다음
            주부터 10000원 인상됩니다.
          </L.Description>
          <L.LogoTwo src="images/cta-logo-two.png" alt="logo-two" />
        </L.Center>
        <L.BgImage/>
      </L.Content>
    </L.Container>
  )
}

export default LoginPage
