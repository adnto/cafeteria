import React from 'react';
//import './Main.module.scss';
import { Link } from 'react-router-dom';

import TopMenu from '../TopMenu/TopMenu';
import Cafes from '../screens/Cafes/Cafes';
import DownMenu from '../DownMenu/DownMenu';
import produce from 'immer/dist/immer';

class Main extends React.PureComponent {
	state = {
        total: 0
    };

	    
render (){

	const { total } =this.props.location.state;;
	
    return(

    <div className="App">
        <TopMenu></TopMenu>   
        <Cafes total={total}></Cafes>   
        
    </div>
    
    );
    }
}


export default Main;