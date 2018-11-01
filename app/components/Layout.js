import { Fragment } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC');
`;

const Stage = styled.div`
  background-color: ${props => props.colour};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 1fr;
  grid-gap: 10px;
  width: 100vw;
  height: 100vh;
`;

const Layout = props => (
  <Fragment>
    <GlobalStyle />
    <Stage>{props.children}</Stage>
  </Fragment>
);

export default Layout;
