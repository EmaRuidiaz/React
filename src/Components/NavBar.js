import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './css/Curso.css'

class NavBar extends Component{
	render(){
		return(
				<div className="row bg-dark">
					<div className="col-10">
						<ul className="nav nav-pills mt-1 mb-1">
						 	<li className="nav-item">
						  		<Link to="/agregarcurso">
						    		<a className="nav-link text-light">{this.props.Link1}</a>
						    	</Link>
						  	</li>
						  	<li className="nav-item">
								<Link to="/">
						    		<a className="nav-link text-light" >{this.props.Link2}</a>
						    	</Link>							
						  	</li>
						  <li className="nav-item">
						    <a className="nav-link  disabled" href="#">{this.props.Link3}</a>
						  </li>
						  <li className="nav-item">
						    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">{this.props.Link4}</a>
						  </li>
						</ul>					
					</div>
					<div className="col-2 d-flex align-items-center">
						<a href="#"><img src="https://media.flaticon.com/dist/min/img/logo/freepikcompany.svg" alt=""/></a>
					</div>
				</div>
			)
	}
}

export default NavBar;