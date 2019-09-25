import React, { Component } from 'react';
import '../Components/css/Curso.css'
import Card from '../Components/Card.js'
import Formulario from '../Components/Formulario.js'
import Api from '../api.js'
import noPhoto from '../Components/img/no-photo.png'

class agregarCard extends Component{

	state = {
		form: {
			id: '',
			titulo: '',	
			descripcion: '', 
			tags: '',
			linkimage: '',
			subtitulo: '',
			linkreferencia : '',
		},

	};

	handleChange = e => {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			}
		})
	};

	handleSubmit = async e => {
		e.preventDefault();
		this.setState({loading: true, error: null});
		try {
			await Api.cursos.create(this.state.form);
			this.setState({loading: false});
			this.props.history.push('/');
		} catch(error) {
			this.setState({error: error})
		}
	}

	render(){
		return(
				<div className="miContainer container-fluid">

					<div className="row">
					
						<div className="col-6 d-flex justify-content-center ">
							<Card page={this.state.form.linkreferencia || 'www.google.com'} linkImage={this.state.form.linkimage || noPhoto} titulo={this.state.form.titulo || 'Titulo'} subtitulo={this.state.form.subtitulo || 'Subtítulo'} descripcion={this.state.form.descripcion || 'Descripción'} hashtag={this.state.form.tags || 'tags'}></Card>	
						</div>

						<div className="col-6">
							<Formulario 
							onChange={this.handleChange}
							formValues={this.state.form}
							onSubmit={this.handleSubmit}
							error={this.state.error}/>							
						</div>
						
					</div>

				</div>
			);
	}
}

export default agregarCard;