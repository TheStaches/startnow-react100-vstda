import React from "react";

// LeftCard
class LeftCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      name: "",
      priority: "",
      isEditing: false
    }

    this.updateName = this.updateName.bind(this);
    this.updatePriority = this.updatePriority.bind(this);
    this.addComponent = this.addComponent.bind(this);
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  updatePriority(e) {
    this.setState({
      priority: e.target.value
    });
  }

  addComponent() {
    if (this.state.name !== "" && this.state.priority !== "") {
      let obj = this.state;
      this.props.stateHandler(obj)
      this.setState({
        name: "",
        priority: "",
        key: this.state.index + 1,
        isEditing: false
      });
    }
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">Add New Todo</div>

          {/* Text Input */}
            <div className="card-body">I want too...</div>
            <textarea className="form-control update-todo-text" value={this.state.name} onChange={this.updateName}></textarea>
          
          {/* Select */}
            <div className="card-body">How much of a priority is this</div>
              <select className="form-control update-todo-priority" value={this.state.priority} onChange={this.updatePriority}>
                  <option>Select a Priority</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
              </select>
              
          <div className="card-footer"><button onClick={this.addComponent}className="btn btn-success form-control" value="1">Add</button></div>
        </div>
      </div>
    );
  }
}

export default LeftCard;