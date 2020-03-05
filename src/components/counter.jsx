import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    names: ["Tom", "Dick", "Harry", "Robee"]
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
    console.log("increment clicked");
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  renderTags() {
    if (this.state.names.length === 0) return "No names available";
    return (
      <ul>
        {this.state.names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    );
  }
  render() {
    console.log("props", this.props);
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt=""></img> */}
        <br></br>
        <span style={this.styles} className={this.getBadgeMethod()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          style={{ fontSize: 15 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={{ fontSize: 15 }}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <div>
          {this.state.names.length === 0 && "Add new names"}
          {this.renderTags()}
        </div>
      </div>
    );
  }

  getBadgeMethod() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
