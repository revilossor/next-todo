import { Fragment } from "react";
import Layout from "../components/Layout";
import Text from "../components/Text";
import fetch from "node-fetch";

import TodoList from "../components/TodoList";

const user = "testuser";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC');
`;

const Index = props => (
  <Fragment>
    <GlobalStyle />

    <Layout colour="#b1b1b1" columns="1fr" rows="10vh 1fr">
      <Text size="5rem" colour="#4f4f4f">
        todos!
      </Text>
      <TodoList todos={props.todos} />
    </Layout>
  </Fragment>
);

// Index.getInitialProps = async function(req) {
//   const todos = await fetch("http://localhost:3000/api/todo/" + user).then(
//     res => res.json()
//   );
//   return { todos };
// };

export default Index;
