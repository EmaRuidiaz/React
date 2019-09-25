import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Cursos from './Pages/Cursos.js'
import Error404 from './Pages/notfound.js'
import Layout from './Components/Layout.js'
import ListaDePersonajes from './Pages/ListaDePersonajes.js'
import DetallePersonaje from './Components/DetallePersonaje.js'
import agregarCurso from './Pages/agregarCurso.js'
import DetalleCurso from './Components/DetalleCurso.js'
import ModificarCurso from './Components/ModificarCurso.js'

class App extends Component{
  render(){
    return(
    	
		<BrowserRouter>
			<Layout>
				<Switch>
					
					<Route exact path="/" component={Cursos}></Route>

					<Route exact path="/agregarcurso" component={agregarCurso}></Route>

					<Route exact path="/detalle/:handle" component={DetallePersonaje}></Route>	

					<Route exact path="/detalleCurso/:handle" component={DetalleCurso}></Route>	

					<Route exact path="/detalleCurso/:handle/editar" component={ModificarCurso}></Route>			

					<Route exact path="/rickandmorty" component={ListaDePersonajes}></Route>

					<Route exact path="/Error404" component={Error404}></Route>

					<Redirect from="*" to="/Error404"></Redirect>

				</Switch>
			</Layout>
		</BrowserRouter>

      );
  }
}


export default App;
// jessi a mejor 
