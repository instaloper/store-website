import React from "react"
import styled from "styled-components"
import Emoji from "./Emoji"

// TODO merge with InfoBanner.js
const InfoContainer = styled.div`
  width: 100%;
  max-width: 876px;
  color: ${(props) => props.theme.colors.black300};
  padding: 16px 24px;
  background: ${(props) => props.theme.colors.warning};
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

const Warning = ({ children, emoji }) => {
  return (
    <InfoContainer>
      {emoji && <Emoji text={emoji} />}
      {children}
    </InfoContainer>
  )
}

export default Warning
