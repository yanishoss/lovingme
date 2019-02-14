import React, { Fragment } from "react";
import {Global, css} from "@emotion/core"; 
import styled from "@emotion/styled";

const globalStyles = css`
html,
body {
  width: 100vw;
  min-height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  font-size: 2.75rem;
  font-family: "Roboto Slab", serif;
  color: #4a4a4a;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
`;

const Container = styled.main`
display: flex;
flex-flow: column;
width: 100vw;
min-height: 100vh;
position: relative;
justify-content: center;
align-items: center;
padding: 1.875rem 0.625rem 1.875rem 0.625rem;
`;

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <Container>
        {children}
      </Container>
    </Fragment>
  )
};