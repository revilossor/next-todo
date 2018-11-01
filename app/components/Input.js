import styled from "styled-components";

const TextField = styled.input`
  font-family: "Bowlby One SC", cursive;
  color: #009999;
  background-color: #4f4f4f;
  width: 100%;
  height: 100%;
  font-size: 5rem;

  &::placeholder {
    color: #c2c2c2;
  }
`;

const Input = props => <TextField placeholder={props.placeholder} />;

export default Input;
