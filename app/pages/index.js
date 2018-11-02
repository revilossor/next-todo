import Layout from "../components/Layout";
import Text from "../components/Text";
import TodoList from "../components/TodoList";

import fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout colour="#b1b1b1" columns="1fr" rows="10vh 1fr">
    <Text size="5rem" colour="#4f4f4f">
      todos
    </Text>
    <TodoList user={props.user} todos={props.todos} />
  </Layout>
);

Index.getInitialProps = async function({ query: { user } }) {
  const res = await fetch("http://localhost:3000/api/todo/" + user);
  const todos = await res.json();

  return { todos, user };
};

export default Index;
