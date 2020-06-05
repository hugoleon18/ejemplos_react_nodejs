//importación de la biblioteca de React y la clase component
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Esqueleto del componente
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      newTask: "",
      tasks: []
    };
  }

  handleTaskChange = (event)=> {
    this.setState({
      newTask: event.target.value,
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let newTask = this.state.tasks;
    newTask.push(this.state.newTask)
    this.setState({
      newTask: "",
      tasks: newTask
    })
  }
  //Método de render, que despliega nuestro componente en la página web
  render(){
    //render retorna un componente escrito en JSX
    return (
      //Componente
      <div className="container">
        <h1 className="title">
          To do list <span aria-label="emoji" role="img">🦁</span>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.newTask}
            onChange={this.handleTaskChange}
            type="text"
            className="new-task"/>
        </form>
        <h2 className="test-label">{this.state.newTask}</h2>
        {
          this.state.tasks.map(task=>
          <div className="task-container"> 
            <h3 className="task">{task}</h3>
          </div> 
          )
        }
      </div>
    );
  }
  
}
//Exportación de nustro componente principal, para qye puede ser usado desde index.js
export default App;
