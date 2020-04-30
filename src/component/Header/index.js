import React from 'react'
import Link from 'next/link'
import styled from "styled-components";

const Header = () => {
  return (
      <StyledHeader>
        <Link href="/guideline">
          <a>Guideline</a>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.div`
  background-color: red;
  padding: 15px;
  a {
    display: inline-block;
    margin: 10px;
    color: #fff;
  }
`