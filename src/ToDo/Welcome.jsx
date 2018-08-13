import React from "react";

// Welcome
class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-body">
        <p>Welcome to Very Simple Todo App!</p>
        <p>Get started now by adding a new todo on the left</p>
      </div>
    );
  }
}

export default Welcome;