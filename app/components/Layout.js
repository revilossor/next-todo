import styled from "styled-components";

const Stage = styled.div`
  background-color: ${props => props.colour};
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-template-rows: ${props => props.rows};
  grid-gap: 10px;
  width: 100vw;
  height: 100vh;
`;

const Layout = props => <Stage {...props}>{props.children}</Stage>;

export default Layout;
