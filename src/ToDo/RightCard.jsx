import React from "react";
import EditPage from "./EditPage";
import TodoItem from "./TodoItem";
import Welcome from "./Welcome";

// Right Card
class RightCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">View Todos</div>
          <ul className="list-group list-group-flush">

            {/* Dinamically renders every obj/todo item in App. state to the RightCard. */}
            {
              this.props.items.map(item => {
                return (item.isEditing) ?
                  <EditPage
                    name={item.name}
                    priority={item.priority}
                    index={item.index}
                    key={item.index}
                    updateIsEditing={this.props.updateIsEditing}
                    editNameState={this.props.editNameState}
                    editPriorityState={this.props.editPriorityState} /> :
                  <TodoItem
                    name={item.name}
                    priority={item.priority}
                    index={item.index}
                    key={item.index}
                    deleteIndex={this.props.deleteIndex}
                    updateIsEditing={this.props.updateIsEditing} />
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default RightCard;