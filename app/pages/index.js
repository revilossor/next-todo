import Layout from "../components/Layout";
import SVGText from "../components/SVGText";
import Input from "../components/Input";

const Index = props => (
  <Layout colour="#b1b1b1" columns="1fr" rows="10vh 1fr 10vh">
    <SVGText width="100%" height="100%" size="5rem" value="todos" />
    <h1>something</h1>
    <Input placeholder="add a todo" />
  </Layout>
);

export default Index;
