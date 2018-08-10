import React, { Component } from 'react';
// App
class App extends Component {
  constructor() {
    super();
    this.state = {}
    
  }

  render() {
    return (
      <div className='container'>
        <h1>Very Simple Todo Application</h1>
        <h3>Track all of the things</h3>
        <hr />

        <div className="row">
          <LeftCard />
          <RightCard />
        </div>
      </div>
    );
  }
}

class LeftCard extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">Add New Todo</div>
          <InputBox name="I want too.."/>

          {/* <div className="card-body"><strong>How much of a priority is this</strong></div> */}
          <Priority name="How much of a priority is this?"/>
          <div className="card-footer"><button className="btn btn-success form-control">Add</button></div>
        </div>
      </div>
    )
  }
}

class RightCard extends Component {
  render() {
    return (
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">View Todos</div>
          
          {/* <Welcome /> */}
          
          <EditPage />
          <TodoItem name="Test" />
        </div>
      </div>
    )
  }
}

class Welcome extends Component {
  render() {
    return (
      <div className="card-body">
        <p>Welcome to Very Simple Todo App!</p>
        <p>Get started now by adding a new todo on the left</p>
      </div>
    )
  }
}

class TodoItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="card-body"><input type="checkbox" />{
        this.props.name}
        <a className="float-right"><i className="fas fa-trash-alt" /></a>
        <a className="float-right"><i className="fas fa-edit" /></a>
      </div>
    )
  }
}

class InputBox extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <div className="card-body">{this.props.name}</div>
        <textarea className="form-control" placeholder="Enter your priority here."></textarea>
      </div>
    )
  }
}

class Priority extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="card-body">{this.props.name}</div>
          <select className="form-control">
            <option>Select a Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
      </div>
    )
  }
}

class EditPage extends Component {
  render() {
    return (
      <div>
        <InputBox name="Description"/>
        <Priority />
        <button className="btn btn-success float-right">Save</button>
      </div>
    )
  }
}

export default App;
