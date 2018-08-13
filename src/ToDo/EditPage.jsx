import React from "react";

// EditPage
class EditPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="card-body">Description</div>
        <textarea className="form-control update-todo-text"></textarea>
        <div className="card-body">Priority</div>
        <select className="form-control update-todo-priority">
          <option>Select a Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button className="btn btn-success float-right update-todo">Save</button>
      </div>
    )
  }
}
export default EditPage;
