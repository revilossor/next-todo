import { Fragment, Component } from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";

import Input from "./Input";

export default class TodoList extends Component {
  state = {
    todos: this.props.todos
  };

  handleInput(e) {
    e.preventDefault();
    const input = e.target.elements[0].value;
    e.target.reset();
    fetch("http://localhost:3000/api/todo/" + this.props.user, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ todo: input })
    })
      .then(res => res.json())
      .then(todo => {
        const todos = [...this.state.todos, todo];
        this.setState({ todos });
      });
  }

  render() {
    const {
      state: { todos }
    } = this;
    return (
      <Fragment>
        <h1>
          {todos.map(todo => `< body: ${todo.body}, status: ${todo.status} >`)}
        </h1>
        <Input
          name="input"
          onSubmit={this.handleInput.bind(this)}
          placeholder="add new todo"
        />
      </Fragment>
    );
  }
}
