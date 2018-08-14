import React from "react";

// LeftCard
class LeftCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      name: "",
      priority: 0,
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

  // Checks if both name and priority are selected then passes the LeftCard state as an arguement to the App stateHandler function to be save in App.state.
  addComponent() {
    if (this.state.name !== "" && this.state.priority !== 0) {
      let obj = this.state;
      this.props.stateHandler(obj);
      this.setState({
        name: "",
        priority: "",
        index: this.state.index + 1,
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
            <div className="card-body title">I want too...</div>
            <textarea className="form-control create-todo-text" value={this.state.name} onChange={this.updateName}></textarea>
          
          {/* Select */}
            <div className="card-body title">How much of a priority is this</div>
              <select className="form-control create-todo-priority" value={this.state.priority} onChange={this.updatePriority}>
                  <option>Select a Priority</option>
                  <option value="1">Low Priority</option>
                  <option value="2">Medium Priority</option>
                  <option value="3">High Priority</option>
              </select>
              
          <div className="card-footer"><button onClick={this.addComponent} className="btn btn-success form-control create-todo" value="1">Add</button></div>
        </div>
      </div>
    );
  }
}

export default LeftCard;