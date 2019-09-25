import React, { Component } from 'react';
import './css/Curso.css'
import { Link } from "react-router-dom";

class Card extends Component{

	render(){
		return(
				<div className="card shadow mb-3 bg-white rounded" id={this.props.key}>
					<img src={this.props.linkImage}  className="card-img-top" alt="..." />
					<div className="card-body">
						<Link to={{
							pathname: `detalleCurso/${this.props.id}`,
							state: {
								fromNotifications: true
							}
						}}>
							<a type=""><h5 className="card-title">{this.props.titulo}</h5></a>
						</Link>
						
						<p className="card-text">{this.props.descripcion}</p>
					</div>
					<div className="card-footer d-flex justify-content-between align-items-center">
						<small className="text-muted">#{this.props.hashtag}</small>
						<a href={this.props.page} className="card-title">Sitio web</a>
					
					</div>
				</div>
			)
	}
}

export default Card;