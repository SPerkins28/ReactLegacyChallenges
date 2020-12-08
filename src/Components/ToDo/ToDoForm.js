import React, { Component } from 'react';

export default class ToDoForm extends Component {
    constructor(){
        super()
        this.state = {
            text: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            name: this.state.text,
            text: this.state.text,
            complete: false,
        });
        this.setState({
            text: ''
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder="Task"/>
                <br/>
                <br/>
                <button onClick={this.handSubmit}>Add Task</button>
            </form>
        )
    }
}