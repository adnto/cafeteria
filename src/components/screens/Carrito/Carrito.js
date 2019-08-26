import React from 'react';
//import './Carrito.module.scss';
import { Link } from 'react-router-dom';
import espresso from '../../../img/espresso.png'; 
import capuccino from '../../../img/capuccino.jpg'; 
import mokaccino from '../../../img/mokaccino.jpg'; 
import latte from '../../../img/latte.jpg'; 

import TopMenu from '../../TopMenu/TopMenu';
import DownMenu from '../../DownMenu/DownMenu';
import DownMenuRegresar from '../../DownMenu/DownMenuRegresar';
import produce from 'immer/dist/immer';

class Carrito extends React.PureComponent {
	state ={
        espresso: 0, 
        latte: 0, 
        capuccino: 0, 
        mokaccino: 0, 
        total: 0,
        
    };

    componentDidMount () {
       // const { espresso } = this.props.parametros;
        //const { total } = this.props.parametros;
        //const { total } = this.props.parametros;
      //  console.log('location ',this.props.location);
      //  console.log('location state',this.props.location.state);
       // console.log('espresso',latte);
      /*  const { latte } = this.props.location.state;
        const { capuccino } = this.props.location.state;
        const { mokaccino } = this.props.location.state;*/

      //  this.setState({ espresso: espresso, latte: latte, capuccino: capuccino, mokaccino: mokaccino });

    
    }

render (){

    const { espresso, latte, capuccino, mokaccino, total } =this.props.location.state;;

    return(

    <div className="App">
        <TopMenu ></TopMenu>   

        <div className="container mb-5">

        <DownMenuRegresar 
            total={total} 
        />

        <br></br>  

        <div className="form-group row">
        
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Num</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Café Espresso</td>
                    <td>{espresso}</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Café Latte</td>
                    <td>{latte}</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Café capuccino</td>
                    <td>{capuccino}</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Café mokaccino</td>
                    <td>{mokaccino}</td>
                </tr>
            </tbody>
        </table>

            

        </div>

        </div>
        <br></br>
        <br></br>
       
    </div>
    
    );
    }
}


export default Carrito;