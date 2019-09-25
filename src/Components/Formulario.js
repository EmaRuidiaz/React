import React, { Component } from 'react';
import '../Components/css/Curso.css'
import { Link } from "react-router-dom";
import Cursos from '../Pages/Cursos.js'
import './css/Curso.css'

class Formulario extends Component{

	//state = {};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleClick = e => {
		console.log("Ha hecho click en el: ",{
			name: e.target.name,
		});
	};

	render(){

		return(
				<div>
					<form onSubmit={this.props.onSubmit} className="formulario needs-validation" novalidate>
						
						<div className="form-group">
					    	<label for="validationCustom01">Imagen</label>
					    	<input className="form-control" id="validationCustom01" onChange={this.props.onChange} value = {this.props.formValues.linkimage} type="text" name="linkimage" placeholder="link de imagen" required/>
					    		<div class="valid-feedback">
						        	Looks good!
						      	</div>
					  	</div>
					  	<div className="form-group">
					    	<label for="validationCustom01">Título</label>
					    	<input className="form-control" onChange={this.props.onChange} value = {this.props.formValues.titulo} type="text" name="titulo" aria-describedby="emailHelp" placeholder="título" required/>
					  	</div>
					  	<div className="form-group">
					    	<label for="validationCustom01">Link de Referencia</label>
					    	<input className="form-control" onChange={this.props.onChange} value = {this.props.formValues.linkreferencia} type="text" name="linkreferencia" aria-describedby="emailHelp" placeholder="Link de Referencia" required/>
					  	</div>
					  	<div className="form-group">
					    	<label for="validationCustom01">Descripción</label>
					    	<input className="form-control" onChange={this.props.onChange} value = {this.props.formValues.descripcion} type="text" name="descripcion" placeholder="descripción" required/>
					  	</div>
					  	<div className="form-group">
					    	<label for="validationCustom01">Subtitulo</label>
					    	<input className="form-control" onChange={this.props.onChange} value = {this.props.formValues.subtitulo} type="text" name="subtitulo" placeholder="Subtitulo" required/>
					  	</div>
					  	<div className="form-group">
					    	<label for="validationCustom01">Tags</label>
					    	<input className="form-control" onChange={this.props.onChange} value = {this.props.formValues.hashtag} type="text" name="tags" placeholder="tags" required/>
					  	</div>

					  	{this.props.error && (
					  		<div className="alert alert-danger" role="alert">
							  Ocurrio un error: {this.props.error.message}
							</div>
					  		)}

						
						<div className="form-row mt-3">
							<button type="submit" name="Boton1" onClick={this.handleClick} className="btn btn-primary">Submit</button>
							<Link to="/">
					  			<button type="submit" name="Boton1" className="btn btn-secondary ml-2"><a href={Cursos}>Cancel</a></button>
					  		</Link>
						</div>						  
					  						  
					</form>
				</div>
			);
	}
}

export default Formulario;