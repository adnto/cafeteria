import React from 'react';
import './Cafes.module.scss';
import { Link } from 'react-router-dom';
import imgEspresso from '../../../img/espresso.png'; 
import imgCapuccino from '../../../img/capuccino.jpg'; 
import imgMokaccino from '../../../img/mokaccino.jpg'; 
import imgLatte from '../../../img/latte.jpg'; 

import TopMenu from '../../TopMenu/TopMenu';
import DownMenu from '../../DownMenu/DownMenu';
import produce from 'immer/dist/immer';

class Cafes extends React.PureComponent {
	state = {
        espresso: 0,
        latte: 0,
        capuccino: 0,
        mokaccino: 0,
        total: 0,
        };


    componentDidMount () {
        const { total } = this.props;
        this.setState({ total: total });     
     }
    onHandleInputs= (event,name)=>{
        const value = event.target.value;

        const nextState = produce(this.state, (draft) => {
            draft[name] = value;
        });
        this.setState(nextState);

        //this.setState({espresso: value});
    }

    addSubtotal= (name)=>{
        const espresso = 21.50, latte = 24, capuccino= 25, mokaccino=27;
        const total = (this.state.espresso*espresso)+(this.state.latte*latte)+(this.state.capuccino*capuccino)+(this.state.mokaccino*mokaccino);
        this.setState({total: total});
    }

    
render (){

    const { data, total, espresso, latte, capuccino, mokaccino } = this.state;
    return(

    <div className="App">

        <div className="container mb-5">
        <DownMenu 
            total={total} espresso={espresso} latte = {latte} capuccino= {capuccino}  mokaccino = {mokaccino}
        />

        <br></br>  

        <div className="form-group row">
            
            <div className="col-md-6" key="1" >
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={imgEspresso} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">Café espresso</h5>
                            <p className="card-text">Es la extracción de 30 mililitros de bebida a partir de 7 gramos de café molido, con agua a 88°C, 9 bares de presión y en un tiempo de 25 segundos.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div className="card-footer bg-transparent border-success ">
                            <div className="row">
                                <div className="form-group col-md-5">
                                    <input type="number" className="form-control" id="txt_espresso" placeholder="0" value= {this.state.espresso} onChange={(event) => this.onHandleInputs(event,'espresso')}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <button className="btn-xs btn-success" onClick={() => this.addSubtotal('espresso')} > <i className="fa fa-cart-plus"></i>&nbsp;&nbsp;Agregar</button>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6" key="2" >
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={imgLatte} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">Café Latte</h5>
                            <p className="card-text"> La proporción de café es 1/4 de la taza será espresso y el resto leche. Se sirven en taza de entre 200 ml.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div className="card-footer bg-transparent border-success">
                            <div className="row">
                                <div className="form-group col-md-5">
                                    <input type="number" className="form-control" id="txt_latte" placeholder="0" value= {this.state.latte} onChange={(event) => this.onHandleInputs(event,'latte')}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <button className="btn-xs btn-success" onClick={() => this.addSubtotal('latte')}> <i className="fa fa-cart-plus"></i>&nbsp;&nbsp;Agregar</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6" key="3" >
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={imgCapuccino} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">Café capuchino</h5>
                            <p className="card-text"> La proporción de café es 1/4 de la taza será espresso y el resto leche. Se sirven en taza de entre 200 ml.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div className="card-footer bg-transparent border-success">
                            <div className="row">
                                <div className="form-group col-md-5">
                                    <input type="number" className="form-control" id="txt_capuccino" placeholder="0" value= {this.state.capuccino} onChange={(event) => this.onHandleInputs(event,'capuccino')} />
                                </div>
                                <div className="form-group col-md-6">
                                    <button className="btn-xs btn-success" onClick={() => this.addSubtotal('capuccino')}> <i className="fa fa-cart-plus"></i>&nbsp;&nbsp;Agregar</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6" key="4">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src={imgMokaccino} className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">Café Mokachino</h5>
                            <p className="card-text">Lleva 1/3 de espresso y 2/3 tercios de leche vaporizada, se añade una parte de jarabe de chocolate</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <div className="card-footer bg-transparent border-success">
                            <div className="row">
                                <div className="form-group col-md-5">
                                    <input type="number" className="form-control" id="txt_mokaccino" placeholder="0" value= {this.state.mokaccino} onChange={(event) => this.onHandleInputs(event,'mokaccino')}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <button className="btn-xs btn-success" onClick={() => this.addSubtotal('mokaccino')}> <i className="fa fa-cart-plus"></i>&nbsp;&nbsp;Agregar</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </div>
        <br></br>
        <br></br>
       
    </div>
    
    );
    }
}


export default Cafes;