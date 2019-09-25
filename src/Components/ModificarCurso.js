import React, { Component } from 'react';
import '../Components/css/Curso.css'
import Card from '../Components/Card.js'
import Formulario from '../Components/Formulario.js'
import Api from '../api.js'
import noPhoto from '../Components/img/no-photo.png'
import Loader from './Loader.js'

class ModificarCurso extends Component{

	state = {
		loading: true,
		error: null,
		data: {}
	};

	componentDidMount(){
		this.getCurso()
	}

	getCurso = async() => {
		this.setState({ loading: true, error:null});

		try {
			const {handle} = this.props.match.params
			const data = await Api.cursos.read(handle);
			console.log(data);
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

	handleChange = e => {
		this.setState({
			data: {
				...this.state.data,
				[e.target.name]: e.target.value,
			}
		})
	};

	handleSubmit = async e => {
		e.preventDefault();
		this.setState({loading: true, error: null});
		try {
			const {handle} = this.props.match.params
			await Api.cursos.update(handle, this.state.data);
			this.setState({loading: false});
			this.props.history.push('/');
		} catch(error) {
			this.setState({error: error})
		}
	}

	render(){
		if (this.state.loading === true) {
			return(
					
				<div className="row">
					
					<Loader></Loader>
					
				</div>
				);
		}

		return(
				<div className="miContainer container-fluid">

					<div className="row">
					
						<div className="col-6 d-flex justify-content-center ">
							<Card page={this.state.data.linkreferencia || 'www.google.com'} linkImage={this.state.data.linkimage || noPhoto} titulo={this.state.data.titulo || 'Titulo'} subtitulo={this.state.data.subtitulo || 'Subtítulo'} descripcion={this.state.data.descripcion || 'Descripción'} hashtag={this.state.data.hashtag || 'tags'}></Card>	
						</div>

						<div className="col-6">
							<Formulario 
							onChange={this.handleChange}
							formValues={this.state.data}
							onSubmit={this.handleSubmit}
							error={this.state.error}/>							
						</div>
						
					</div>

				</div>
			);
	}
}

export default ModificarCurso;