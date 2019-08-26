import React from 'react';
import './TopMenu.module.scss';
import { Link } from 'react-router-dom';


class TopMenu extends React.PureComponent {

render (){

   // const { dates } = this.state;
    return(
    <div className="App">
    
    {/* <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark"> */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#">Menú</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Ordenar
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                <i className="fa fa-coffee"></i>&nbsp;
                  Cafés
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                {/*<i className="fa fa-snowflake-o"></i> */}
                            
                <i className="fa fa-pagelines "></i>&nbsp;&nbsp;
                Tisanas / Té
              </a>
              <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i className="fa fa-cutlery"></i>&nbsp;&nbsp;                           
                  Bocadillos
                </a>
              <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <i className="fa fa-smile-o"></i>&nbsp;&nbsp;                         
                  Postres
                </a>
            </div>
          </li>
          {/*<li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
        </li>*/}
        </ul>
        {/*<form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>*/}
      </div>
</nav>
    {/*</nav>*/}

            

    </div>
    
    );
    }
}


export default TopMenu;