import styled from "styled-components";
import Text from "./Text";

const colours = {
  light: {
    done: { bg: "#39e639", text: "#008500" },
    doing: { bg: "#ff9640", text: "#a64b00" },
    todo: { bg: "#ff4040", text: "#a60000" }
  },
  dark: {
    done: { bg: "#269926", text: "#67e667" },
    doing: { bg: "#bf7130", text: "#ffb273" },
    todo: { bg: "#bf3030", text: "#ff7373" }
  }
};

const TodoContainer = styled.div`
  background-color: ${props => {
    const statusColours = props.index % 2 === 0 ? colours.light : colours.dark;
    return statusColours[props.src.status].bg;
  }};
`;

const Todo = props => (
  <TodoContainer {...props}>
    <Text
      size="4rem"
      colour={
        colours[props.index % 2 === 0 ? "light" : "dark"][props.src.status].text
      }
    >
      {props.src.body}
    </Text>
  </TodoContainer>
);

export default Todo;
