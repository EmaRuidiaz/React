import React, { Component } from 'react';
import './css/Curso.css'
import Api from '../api.js'
import Loader from './Loader.js'
import { Link } from "react-router-dom";

class DetalleCurso extends Component{

	state = {
		loading: true,
		error: null,
		data: []
	};

	componentDidMount(){
		this.getCurso()
	}

	getCurso = async() => {
		this.setState({ loading: true, error:null});

		try {
			const {handle} = this.props.match.params
			const {fromNotifications} = this.props.location.state
			const data = await Api.cursos.read(handle);
			this.setState({
				loading: false,
				data: data
			})
		} catch(error) {
			console.log("Error en la página.")
			this.setState({
				loading: false,
				error: error
			});
		}
	}

	render(){

		if (this.state.error) {
			return (
					<div className="row justify-content-center mb-3 mt-3">
						<button class="btn btn-danger" type="button" disabled>
							¡Error!
						</button>
					</div>
				);
		}

		if (this.state.loading === true) {
			return(
					<Loader></Loader>
				);
		}

		return(
			<div class="card-deck justify-content-center mb-3">
				<div className="card">
				    <img src={this.state.data.linkimage} height = '250' width = '250' class="card-img-top" alt="..." />
				    <div class="card-body">
				      <h5 class="card-title">{this.state.data.titulo}</h5>
				      <p class="card-text">{this.state.data.descripcion}</p>
				      <p class="card-text">{this.state.data.subtitulo}</p>
				    </div>
				    <div class="card-footer d-flex justify-content-between">
				    	<Link to={`/detalleCurso/${this.state.data.id}/editar`}>
							<button type="button btn-sm btn"><h5 className="card-title">Editar</h5></button>
						</Link>
					    <small class="text-muted">#{this.state.data.hashtag}</small>
					    <small className="text-muted">id: {this.state.data.id}</small>
				    </div>
			    </div>
			</div>
			)
	}
}

export default DetalleCurso;