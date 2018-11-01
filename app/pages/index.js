import Layout from "../components/Layout";
import Text from "../components/Text";
import Input from "../components/Input";
import fetch from "node-fetch";

const user = "testuser";

const Index = props => (
  <Layout colour="#b1b1b1" columns="1fr" rows="10vh 1fr 10vh">
    <Text size="5rem" colour="#4f4f4f">
      todos
    </Text>
    <h1>{props.todos}</h1>
    <Input placeholder="add a todo" />
  </Layout>
);

Index.getInitialProps = async function(req) {
  const todos = await fetch("http://localhost:3000/api/todo/" + user).then(
    res => res.json()
  );
  console.dir({ todos });
  return { todos: ["2"] };
};

export default Index;
