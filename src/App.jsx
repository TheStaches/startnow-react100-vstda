import React, { Component } from 'react';
import LeftCard from "./ToDo/LeftCard";
import RightCard from "./ToDo/RightCard";

// App
class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: []
    }
    this.stateHandler = this.stateHandler.bind(this);
    this.updateIsEditing = this.updateIsEditing.bind(this);
    this.deleteIndex = this.deleteIndex.bind(this);
    this.editNameState = this.editNameState.bind(this);
    this.editPriorityState = this.editPriorityState.bind(this);
  } 

  // Takes LeftCard todoItem and concats obj into state
  stateHandler(obj) {
    this.setState({
      todoItems: this.state.todoItems.concat(obj)
    })
  }

  // Updates isEditing on todoItem to render editing page on RightCard
  updateIsEditing(key) {
    let tempItems = this.state.todoItems;
    tempItems[key].isEditing = !tempItems[key].isEditing;

    this.setState({
      tempItems
    });
  }

  // Deletes the todoItem when you click the trashcan icon
  deleteIndex(key) {
    let arrItems = this.state.todoItems;
    let iDelete = arrItems.findIndex((obj, index, array) => {return obj.index === key})
    arrItems.splice(iDelete, 1);

    this.setState({
      arrItems
    })
  }

  // Updates name with the EditPage changes
  editNameState(key, name) {
    let tempItems = this.state.todoItems;
    tempItems[key].name = name;

    this.setState({
      tempItems
    })

  }

  // Updates priority with the EditPage changes
  editPriorityState(key, priority) {
    let tempItems = this.state.todoItems;
    tempItems[key].priority = priority;

    this.setState({
      tempItems
    })

  }


  render() {
    return (
      <div className='container'>
        <h1>Very Simple Todo Application</h1>
        <h3>Track all of the things</h3>
        <hr />

        <div className="row">
          <LeftCard stateHandler={this.stateHandler} name="Add New Todo"/>
          <RightCard name="View Todos" updateIsEditing={this.updateIsEditing} deleteIndex={this.deleteIndex} editNameState={this.editNameState} editPriorityState={this.editPriorityState} items={this.state.todoItems}/>
        </div>
      </div>
    );
  }
}

export default App;