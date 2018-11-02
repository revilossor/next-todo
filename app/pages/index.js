import Layout from "../components/Layout";
import Text from "../components/Text";
import TodoList from "../components/TodoList";

import styled from "styled-components";
import fetch from "isomorphic-unfetch";

const Container = styled.div`
  margin-top: 1.5rem;
`;

const Index = props => (
  <Layout colour="#b1b1b1" columns="1fr" rows="10vh 1fr">
    <Container>
      <Text size="4rem" colour="#4f4f4f">
        todos for "{props.user}"
      </Text>
    </Container>
    <TodoList user={props.user} todos={props.todos} />
  </Layout>
);

Index.getInitialProps = async function({ query: { user } }) {
  const res = await fetch("http://localhost:3000/api/todo/" + user);
  const todos = await res.json();

  return { todos, user };
};

export default Index;
