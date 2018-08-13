import React from "react";

// TodoItem
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    
    this.edit = this.edit.bind(this);
    }

    edit(e) {
        this.props.updateIsEditing(e.target.key)
    }

    render() {
        return (

            <div className="card-body">
                <input type="checkbox" />
                {this.props.name}
                <a className="button btn float-right delete-todo" ><i className="fas fa-trash-alt" /></a>
                <a className="button btn float-right edit-todo" onClick={this.edit}><i className="fas fa-edit" /></a>
            </div>
        );
    }
}

export default TodoItem;
// const {isExpanded} = this.state.isExpanded; // pulls the isExpanded boolean and sets it into a variable we can use .
// `${isExpanded}` - This is how you use the state variables. Back ticks and ${}.