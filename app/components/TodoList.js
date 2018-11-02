import { Fragment, Component } from "react";
import styled from "styled-components";

import Input from "./Input";

export default class TodoList extends Component {
  state = {
    todos: this.props.todos
  };

  render() {
    const {
      state: { todos }
    } = this;
    return (
      <Fragment>
        <h1>{todos}</h1>
        <Input placeholder="add new todo" />
      </Fragment>
    );
  }
}
