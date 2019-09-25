import React, {Component} from 'react';
import './css/Curso.css'
import Card from '../Components/Card'

class ContentContent extends Component{
	render(){
		if (this.props.ListaCursos.length === []) {
			return(
				<div className="col-10">
					<div className="card-deck pr-0">		
						<h1 className="ml-3 mt-3">No day datos disponibles</h1>
					</div>
				</div>
				);
		}
		return(
				<div className="col-10">
					<div className="card-deck pr-0">		
						{this.props.ListaCursos.map(curso => {
							return(
									<Card key={curso.id} id={curso.id} page={curso.linkreferencia} linkImage={curso.linkimage} titulo={curso.titulo} subtitulo={curso.subtitulo} descripcion={curso.descripcion} hashtag={curso.hashtag}></Card>
								)
						})}
					</div>
				</div>
			)
	}
}

export default ContentContent;