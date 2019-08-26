import React from 'react';
import sty from './DownMenu.module.scss';
import { Link } from 'react-router-dom';


class DownMenuRegresar extends React.PureComponent {
    state = {};

render (){

    const { total } = this.props;

    return(
    <div className="App">
        <nav className="navbar fixed-bottom navbar-light" style={{backgroundColor: '#e3f2fd'}} >
            <div className="w-100">

                <Link to={{ pathname: '/pedidos', state: {  total: total } }} >
                        <i className="fa fa-angle-double-left"></i>&nbsp;&nbsp;                         
                        Regresar
                </Link>
                &nbsp;&nbsp; &nbsp;&nbsp; 
                <i className="fa fa-money"></i> &nbsp;&nbsp; 
                <span className="badge badge-pill badge-info ml-2">
                    Total  ${ total } 
                </span>

            </div>
        </nav>
    </div>
    
    );
    }
}


export default DownMenuRegresar;