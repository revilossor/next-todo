import { Fragment, Component } from "react";
import styled from "styled-components";
import ReactList from "react-list";
import fetch from "isomorphic-unfetch";

import Input from "./Input";
import Todo from "./Todo";

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
    return (
      <Todo
        src={this.state.todos[index]}
        key={key}
        index={index}
        onClick={this.handleTodoClick.bind(this)}
      />
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

  handleTodoClick(e) {
    e.preventDefault();
    this.post("http://localhost:3000/api/todo/bump/" + this.props.user, {
      todo: e.target.firstChild.data
    }).then(updated => {
      this.setState({
        todos:
          updated.status === "delete"
            ? this.state.todos.filter(todo => todo.body !== updated.body)
            : this.state.todos.map(
                todo =>
                  todo.body === updated.body
                    ? { ...todo, status: updated.status }
                    : todo
              )
      });
    });
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
            type="variable"
          />
        </ListContainer>
        <Input
          name="input"
          onSubmit={this.handleInput.bind(this)}
          placeholder="add"
        />
      </Fragment>
    );
  }
}
