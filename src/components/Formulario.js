import React, {Component} from 'react';

class Formulario extends Component {
    constructor(){
    super();
        this.state = {
            tipo: '',
            responsable: '',
            descripcion: '',
            prioridad: ''    
         }; 
         this.eventoInput = this.eventoInput.bind(this);
         this.eventoSubmit = this.eventoSubmit.bind(this);
    }

   
    eventoSubmit(e) {
        e.preventDefault();
        this.props.onAgregador(this.state);    
        console.log(this.state);
          
            this.setState({
                tipo: '',
                responsable: '',
                descripcion: '',
                prioridad: ''  
            });            
              
        }    
    
    eventoInput(e){
        const {value, name} = e.target;
            this.setState({
            [name]: value
            });        
    } 
             
        
    

render(){
    return(
     <div className="card">
         <form onSubmit={this.eventoSubmit} className="card-body">
            <div className="form-group">
                <input className="form-control" 
                    type="text" 
                    name="tipo" 
                    value={this.state.tipo}
                    placeholder="Tipo" 
                    onChange={this.eventoInput}
                />
            </div>
            <div className="form-group">
                <input className="form-control" 
                    type="text" 
                    name="responsable" 
                    value={this.state.responsable}
                    placeholder="Responsable" 
                    onChange={this.eventoInput}
                />
            </div>
            <div className="form-group">
                <input className="form-control" 
                    type="text" 
                    name="descripcion" 
                    value={this.state.descripcion}
                    placeholder="Descripcion" 
                    onChange={this.eventoInput}
                />
            </div>
            <div className="form-group">
               <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" 
                name="prioridad"
                value={this.state.prioridad}
                onChange={this.eventoInput}> 
                    <option>Prioridad</option>
                    <option>Baja</option>
                    <option> Media</option> 
                    <option>Alta</option> 
               </select>
             </div>
             <button type="submit" className="btn btn-primary">Agregar</button>
         </form>
     </div>   
    )
}

}

export default Formulario;