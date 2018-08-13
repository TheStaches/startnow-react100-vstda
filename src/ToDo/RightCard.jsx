import React from "react";
import EditPage from "./EditPage";
import TodoItem from "./TodoItem";
import Welcome from "./Welcome";

// Right Card
class RightCard extends React.Component {
  constructor(props){
    super(props);
  }

  // isEditingState(key) {
  //   this.props.updateIsEditing(key)
  // }

  render () {
    return (
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">View Todos</div>
          
          {/* <Welcome /> */}
          
          {
            this.props.items.map(item => {
              return (item.isEditing) ? 
                <EditPage 
                  name={item.name}
                  priority={item.priority}
                  key={item.index} 
                  isEditing={item.isEditing}
                  updateIsEditing={this.props.updateIsEditing} /> :
                <TodoItem
                    name={item.name}
                    priority={item.priority} 
                    key={item.index} 
                    isEditing={item.isEditing}
                    updateIsEditing={this.props.updateIsEditing} />
            }) // How do I pass down the App function updateIsEditing when my .map() is creating all my todo items. How do I reference a function from RightCard when .map() is only referenceing things from within state.
          }  

        </div>
      </div>
    )
  }
}
export default RightCard;