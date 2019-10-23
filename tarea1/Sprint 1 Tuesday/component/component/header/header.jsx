import React, { Component } from 'react';
import Componente1 from './Componente1';
import Componente2 from './Componente2';
class Header extends Component {
    constructor() {
        super()
        this.state = {
            contador: 0,
            mostrarComponente1: false
        }
        this.mostrarComponente1 = this.mostrarComponente1.bind(this);
    }

    mostrarComponente1(){
        this.setState({mostrarComponente1:!this.state.mostrarComponente1})
    }

    render() {
        return (
            <div>
                <Componente1 
                mostrar={this.state.mostrarComponente1}
                mostrarComponente1={this.mostrarComponente1}/>
                <Componente2 mostrar={this.state.mostrarComponente1}/>
            </div>
        )
    }
}
export default Header;