import React from 'react';

class Componente2 extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            this.props.mostrar ?
            <div>
                <h2>el componente 1 me mostro</h2>
            </div>
            : null 
        )
    }
}
export default Componente2;