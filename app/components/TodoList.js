import { Fragment, Component } from "react";
import ReactList from "react-list";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

import Input from "./Input";

const ListContainer = styled.div`
  overflow: auto;
  border: 4px solid #363732;
  margin: 4px;

  @media (min-width: 1200px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }
`;

export default class TodoList extends Component {
  state = {
    todos: this.props.todos
  };

  renderTodo(index, key) {
    const todo = this.state.todos[index];
    return (
      <div key={key}>
        <h1>{`< body: ${todo.body}, status: ${todo.status} >`}</h1>
      </div>
    );
  }

  post(uri, body) {
    return fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => res.json());
  }

  handleInput(e) {
    e.preventDefault();
    const input = e.target.elements[0].value;
    e.target.reset();
    this.post("http://localhost:3000/api/todo/" + this.props.user, {
      todo: input
    }).then(todo => {
      this.setState({ todos: [...this.state.todos, todo] });
    });
  }

  render() {
    const {
      state: { todos }
    } = this;
    return (
      <Fragment>
        <ListContainer>
          <ReactList
            itemRenderer={this.renderTodo.bind(this)}
            length={this.state.todos.length}
            type="uniform"
          />
        </ListContainer>
        <Input
          name="input"
          onSubmit={this.handleInput.bind(this)}
          placeholder="add new todo"
        />
      </Fragment>
    );
  }
}
