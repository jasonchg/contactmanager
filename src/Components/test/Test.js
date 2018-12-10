import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  // Life Cycle Method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // componentWillMount() {
  //   console.log("ComponentWillMount...");
  // }

  // // run only state change
  // componentDidUpdate() {
  //   console.log("ComponentDidUpdate...");
  // }
  // componentWillUpdate() {
  //   console.log("ComponentWillUpdate...");
  // }
  // // run when component receive new property
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log(" componentWillReceiveProps...");
  // }

  // static getDerivedStateFromProps(nextProps, nextState) {
  //   return {
  //     test: "something.."
  //   };
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(" getSnapshotBeforeUpdate...");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
