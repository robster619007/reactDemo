import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 44 },
      { id: 3, value: 2 },
      { id: 4, value: 0 }
    ]
  };
  handleReset = () => {
    this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
  };
  handleDelete = counterId => {
    // console.log("Event handler called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
            // value={counter.value}
            // id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
