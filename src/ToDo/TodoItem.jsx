import React from "react";

// TodoItem
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: {
            1: "list-group-item-success",
            2: "list-group-item-warning",
            3: "list-group-item-danger"
          },
            strike: false
        }
    
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.complete = this.complete.bind(this);
    }

    // Passes selected elements index as an arguement to App so it can update isEditing in state and to rerender the todoItem as an EditPage.
    edit() {
        this.props.updateIsEditing(this.props.index)
    }

    // Passes selected elements index as an arguement to App to delete the todoItem.
    delete() {
        this.props.deleteIndex(this.props.index)
    }

    complete(e) {
        this.setState({
            strike: !this.state.strike
        })
        console.log(this.state.strike)
    }

    render() {
        return (
            <li className={`list-group-item ${this.state.colors[this.props.priority]} ${this.state.strike ? "strike" : ""}`}>
                <input type="checkbox" onClick={this.complete} />
                {this.props.name}
                <a className="button btn float-right delete-todo" onClick={this.delete}><i className="fas fa-trash-alt" /></a>
                <a className="button btn float-right edit-todo" onClick={this.edit}><i className="fas fa-edit" /></a>
            </li>
        );
    }
}

export default TodoItem;
