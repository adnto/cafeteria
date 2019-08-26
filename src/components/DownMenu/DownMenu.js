import React from 'react';
import sty from './DownMenu.module.scss';
import { Link } from 'react-router-dom';


class DownMenu extends React.PureComponent {
    state = {};

render (){

    const { total, espresso, latte, capuccino, mokaccino } = this.props;

    return(
    <div className="App">
        <nav className="navbar fixed-bottom navbar-light" style={{backgroundColor: '#e3f2fd'}} >
            <div className="w-100">

                <Link to={{ pathname: '/vercarrito', state: { espresso: espresso, latte: latte, capuccino: capuccino, mokaccino: mokaccino, total: total } }}>
                        <i className="fa fa-shopping-cart"></i>&nbsp;&nbsp;                         
                        Ver Carrito
                </Link>
            
                <span className="badge badge-pill badge-info ml-2">
                    ${ total } 
                </span>

            </div>
        </nav>
    </div>
    
    );
    }
}


export default DownMenu;