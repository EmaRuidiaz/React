import React from 'react';
import logo from './logo.svg';
import './App.css';

class OtroSaludo extends React.Component{
	render(){
    	return(
    		
    		<div className="App">
        		<header className="App-header">
        			<img src={logo} className="App-logo" alt="logo" />
          			<p>Hola desde el segundo componente</p>
        		</header>
      		</div>
    	);
  	}
}


export default OtroSaludo;