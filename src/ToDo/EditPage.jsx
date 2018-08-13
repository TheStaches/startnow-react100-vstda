import React from "react";

// EditPage
class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.colors = {
      1: "list-group-item-success",
      2: "list-group-item-warning",
      3: "list-group-item-danger"
    }

    this.nameUpdate = this.nameUpdate.bind(this);
    this.priorityUpdate = this.priorityUpdate.bind(this);
    this.update = this.update.bind(this);
  }

  nameUpdate(e) {
    this.props.editNameState(this.props.index, e.target.value)
  }

  priorityUpdate(e) {
    this.props.editPriorityState(this.props.index, e.target.value)
  }

  update() {
    this.props.updateIsEditing(this.props.index)
  }

  render() {
    return (
      <div className={`${this.colors[this.props.priority]}`}>
        <div className="card-body title">Description</div>
        <textarea className="form-control update-todo-text" defaultValue={this.props.name} onChange={this.nameUpdate}></textarea>
        <div className="card-body title">Priority</div>
        <select className="form-control update-todo-priority" defaultValue={this.props.priority} onChange={this.priorityUpdate}>
          <option>Select a Priority</option>
          <option value="1">Low Priority</option>
          <option value="2">Medium Priority</option>
          <option value="3">High Priority</option>
        </select>
        <button className="btn btn-success float-right update-todo editbutton" onClick={this.update}>Save</button>
      </div>
    )
  }
}
export default EditPage;