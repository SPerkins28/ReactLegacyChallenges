import React, { Component } from "react";
import ToDoForm from "./ToDoForm";
import Task from './Task';


export default class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  addToDo = (task) => {
    this.setState({
      tasks: [task, ...this.state.tasks],
    });
  };

  toggleComplete = (name) => {
      this.setState({
          tasks: this.state.tasks.map(task => {
              if (task.name === name) {
                return {
                    ...task,
                    complete: !task.complete
                }
              } else {
                  return task;
              }
          })
      })
  }

  render() {
    return (
      <div>
        <ToDoForm onSubmit={this.addToDo} />
        <br/>
        <h6><u>Click each task when complete to cross it off!</u></h6>
        <br/>
        {this.state.tasks.map((task, index) => (
            <Task
            key={index}
            toggleComplete={() => this.toggleComplete(task.name)}
            task={task}/>
        ))}
      </div>
    );
  }
}
