import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200"
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClass()}>{this.formatingCount()}</span>
        <button className="btn btn-secondary btm-s">Increment</button>
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let classs = "badge m-2 badge-";
    classs += this.state.count === 0 ? "warning" : "primary";
    return classs;
  }

  formatingCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
