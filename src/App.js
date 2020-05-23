import React, {Component} from 'react'; 
import logo from './logo.svg';
import './App.css';

import {tasks} from './tasks.json';
import Formulario from './components/Formulario.js';



class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks
    }
    this.agregarTareas = this.agregarTareas.bind(this);
  }

  eliminarTareas(index) {
    this.setState({
      tasks: this.state.tasks.filter((e, i) => {
        return i !== index
      })
    });
  }

  agregarTareas(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }



render(){
  const tasks = this.state.tasks.map((tasks, i) => {
      return(
      <div className="col-md-2 ml-3" key={i}>
        <div className= "card mt-4">
          <div className ="card-header text-center" >
            <h3> {tasks.Tipo}</h3>
            <span className="badge badge-pill badge-info ml-2">
               {tasks.Prioridad} 
            </span>
          </div>

          <div className="card-body">
            <p className="mt-2">{tasks.Descrpción} </p>
            <b className="mt-2">{tasks.Responsable} </b>
          </div>

          <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.eliminarTareas.bind(this, i)}>
                Eliminar
              </button>
           </div>
        </div>
      </div>
      )
    });
    return(
      <div className="App"> 
        <nav className="navbar navbar-dark bg-dark">
            <a href="https://www.youtube.com/watch?v=iHqa6ojKnHI" className="text-white">
              Tareas
                <span className="badge badge-pill badge-danger ml-2">
                   {this.state.tasks.length}
                </span>
            </a>               
        </nav>

        <div  className="conteiner">
          <div className="row mt-4 ml-3">

              <div className="row-md-8 text-center">
                <img src={logo} className="App-logo" alt="logo" /> 
                <Formulario onAgregador = {this.agregarTareas}/>   
              </div>

              <div className="row">
                  <div className="row-ml-4"></div>
                    {tasks}  
              </div>
              
           </div>    
        </div>

      </div>
  );
}
}

export default App;
