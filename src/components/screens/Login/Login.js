import React from 'react';
import './Login.module.scss';
import logo from '../../../img/logo_moon.png'; 
import { Link } from 'react-router-dom';


class Login extends React.PureComponent {

render (){

   // const { dates } = this.state;
    return(
    <div className="App">
    
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <h4 className="t_white"> Moon Coffee </h4>
        </nav> 
        <div className="container">
        <br></br>  
            <div className="content-wrapper">
                <div className="content-header row mb-5">
                </div>
                <div className="content-body">
                    <section className="flexbox-container">
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className="col-lg-4 col-md-8 col-10 box-shadow-2 p-0">
                                
                                <div className="card border-grey border-lighten-3 px-1 py-1 m-0">
                                    <div className="card-header bg-transparent border-info">
                                        <div className="card-title text-center">
                                            <img src={logo} alt="moon_logo.png" height="82" width="100" />
                                        </div>
                                        <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2"><span> APP Moon Coffee </span></h6>
                                    </div>
                                    <div className="card-content">
                                        {/*<div className="text-center">
                                            <p>Al acceder a este sitio usted acepta los terminos y condiciones de uso del sitio, cualquier aclaración del sitio o su uso puede revisarlos en las oficinas de ASARI. </p><br/>
                                        </div>
                                        <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1"><span>Acceda al sistema con sus credenciales.</span></p>*/}
                                        <div className="card-body">
                                            <form className="form-horizontal" method="POST" noValidate>
                                                <fieldset className="form-group position-relative has-icon-left">
                                                
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-user-circle"></i></span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1"/>
                                                </div>

                                                </fieldset>
                                                <fieldset className="form-group position-relative has-icon-left">
                                                <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-lock"></i></span>
                                                        </div>
                                                        <input type="password" className="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="basic-addon1"/>
                                                    </div>
                                                </fieldset>
                                            {/* <div className="form-group row">
                                                    <div className="col-sm-6 col-12 text-center text-sm-left pr-0">
                                                        <fieldset>
                                                            <input type="checkbox" id="remember-me" className="chk-remember" />
                                                            <label htmlFor="remember-me"> Recordarme</label>
                                                        </fieldset>
                                                    </div>
                                                    
                                                    <div className="col-sm-6 col-12 float-sm-left text-center text-sm-right"><a href="recover-password.html" className="card-link">Olvido su acceso?</a></div>
                                    </div> */}

                                            </form>
                                        </div>
                                        <div className="card-footer bg-transparent border-info">
                                        <Link to={{ pathname: '/pedidos', state: {  total: 0 } }} >
                                                <button type="submit" className="btn btn-outline-info btn-block"> <i className="fa fa-unlock-alt"></i> Acceder</button>
                                            </Link>
                                            {/*<a href="register-with-bg-image.html" className="btn btn-outline-danger btn-block"><i className="ft-user"></i> Proceso de registro</a>*/}
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    </div>
    );
    }
}


export default Login;
