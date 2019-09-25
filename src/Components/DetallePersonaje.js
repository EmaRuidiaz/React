import React, { Component } from 'react';
import './css/Curso.css'


class DetallePersonaje extends Component{

	state = {
		loading: true,
		error: null,
		data: {}
	};

	componentDidMount(){
		this.getPersonaje()
	}

	getPersonaje = async() => {
		this.setState({ loading: true, error:null});

		try {
			const {handle} = this.props.match.params
			const {fromNotifications} = this.props.location.state
			const response = await fetch(`https://rickandmortyapi.com/api/character/${handle}`);
			const data = await response.json();
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
					<div className="row justify-content-center mb-3 mt-3">
						<div class="loader">Loading...</div>
					</div>
				);
		}

		return(
			<div className="col-8 mt-3">
				<div className="card mb-3">
				  <div className="row no-gutters">
				    <div className="col-md-4 d-flex align-content-center">
				      <img src={this.state.data.image} className="card-img" alt="..."/>
				    </div>
				    <div className="col-md-8">
				      <div className="card-body">
				        <h5 className="card-title">{this.state.data.name}</h5>
				        <p className="card-text">Estado: {this.state.data.status}</p>
				        <p className="card-text">Especie: {this.state.data.species}</p>
				        {console.log(this.state.data.origin.name)}
						<p className="card-text">Origen: {this.state.data.origin.name}</p>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
			)
	}
}

export default DetallePersonaje;