import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//import produce from 'immer/dist/immer';
import Login from './components/screens/Login/Login';
import TopMenu from './components/TopMenu/TopMenu';
import Cafes from './components/screens/Cafes/Cafes';
import Main from './components/Main/Main';
import Carrito from './components/screens/Carrito/Carrito';

import DocumentTitle from 'react-document-title';


  class App extends React.PureComponent {


		render() {
			return (
				<BrowserRouter>
        <div>
          <Redirect
            from="/"
            to="/inicio" />
          <Switch>

            <Route
              path="/inicio"
              component={Login} />

            <Route
              exact
              path="/pedidos"
              component={Main} />

            <Route
              exact
              path="/vercarrito"
              component={Carrito} />

            {/*<Route
              exact
              path="/page2"
            render={() => <Page2 />} />

            <Route component={PageError} /> */}

          </Switch>

        </div>
      </BrowserRouter>
			);
		}
	}
export default App;