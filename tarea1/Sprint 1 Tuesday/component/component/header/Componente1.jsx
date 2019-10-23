import React from 'react';
class Componente1 extends React.Component{
    constructor(props){
        super()
        this.state = {
        }
        this.funcionMostrarComponente = this.funcionMostrarComponente.bind(this);
    }

    funcionMostrarComponente() {

        this.props.mostrarComponente1();

    }

    render(){
        return (
            <button onClick={this.funcionMostrarComponente}>
            {this.props.mostrar === false ? 'mostrar componente 2':'ocultar componente 2'}
            </button>
        );
    }
}
 export default Componente1;