import React, {Component} from 'react';
import '../Components/css/Curso.css'
import Api from '../api.js'
import Loader from '../Components/Loader.js'
import SideBar from '../Components/SideBar'
import ListaDeCursos from '../Components/ListaDeCursos'
import Rick from '../Components/img/rick.png'


class Content extends Component{

	state = {
		loading: true,
		error: null,
		data: undefined
	};

	componentDidMount(){
		this.getCursos()
	}

	getCursos = async() => {
		this.setState({ loading: true, error:null});

		try {
			const data = await Api.cursos.list();
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
		if (this.state.loading === true) {
			return(
					
				<div className="row">
				
					<SideBar linkImage={Rick} name="Ins. Sánchez"></SideBar>
					
					<Loader></Loader>
					
				</div>
				);
		}
		return(
				<div className="row">
				
					<SideBar linkImage={Rick} name="Ins. Sánchez"></SideBar>
					
					<ListaDeCursos ListaCursos = {this.state.data}></ListaDeCursos>
					
				</div>
			)
	}
}

export default Content;