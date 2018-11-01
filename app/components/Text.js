import styled from "styled-components";

const Text = styled.h1`
  font-family: "Bowlby One SC", cursive;
  color: ${props => props.colour};
  font-size: ${props => props.size};
  text-align: center;
`;

export default Text;
