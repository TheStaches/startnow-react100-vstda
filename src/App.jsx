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
  } 

  stateHandler(obj) {
    this.setState({
      todoItems: this.state.todoItems.concat(obj)
    })
  }

  updateIsEditing(key) {
    tempItems = this.state.todoItems;
    tempItems[key].isEditing = true;

    this.setState({
      tempItems
    });
  }

  delete(key) {
    tempItems = this.state.todoitems;
    tempItems[key] = {};

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
          <RightCard name="View Todos" updateIsEditing={this.updateIsEditing} items={this.state.todoItems}/>
        </div>
      </div>
    );
  }
}

export default App;