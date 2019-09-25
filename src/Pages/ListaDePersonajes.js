import React, { Component } from 'react';
import '../Components/css/Curso.css'
import Personaje from '../Components/Personaje'

class ListaDePersonajes extends Component{
	state = {
		loading: true,
		error: null,
		nextPage: 1,
		data: {
			info: {},
			results: []
		}
		

	};

	componentDidMount(){
		this.getPersonajes()
	}

	getPersonajes = async() => {
		this.setState({ loading: true, error:null});

		try {
			const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`);
			const data = await response.json();
			this.setState({
				loading: false,
				data:{
					info: data.info,
					results: [].concat(this.state.data.results, data.results)
				},
				nextPage: this.state.nextPage + 1
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

			<div className="row d-flex justify-content-center">
			
			<div className="logo ">
				<img src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" alt=""/>
			</div>

			<div className="col-12 ">
				
				<div className="card-deck pr-0 d-flex justify-content-center">		
					{this.state.data.results.map(character => {
						return(
							<Personaje key={character.id} id={character.id} image={character.image} nombre={character.name} especie={character.species} origen={character.origin.name} genero={character.gender}></Personaje>)
					})}
				</div>

				{this.state.loading && <h3 className="text-center mt-2"> Loading ...</h3>}

			</div>
			<div className="row mb-2">
				{!this.state.loading && this.state.data.info.next && (
					<button className="btn btn-success" onClick={()=> this.getPersonajes()}>Cargar mas ...</button>					
				)}
			</div>


			</div>
			
			);
	}
}

export default ListaDePersonajes;