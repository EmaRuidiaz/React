import React, { Component } from 'react';
import './css/Curso.css'
import { Link } from "react-router-dom";


class Personaje extends Component{

	render(){
		return(
				<div className="card shadow mb-3 bg-white rounded" id={this.props.key}>
					<img src={this.props.image}  className="card-img-top" alt="..." />
					<div className="card-body">
						<Link id={this.props.id} to={{
							pathname: `detalle/${this.props.id}`,
							state: {
								fromNotifications: true
							}
						}}><h5 className="card-title">{this.props.nombre}</h5></Link>
					</div>
					<div className="card-footer">
						<small className="text-muted">#{this.props.genero}</small>
					</div>
				</div>
			)
	}
}

export default Personaje;