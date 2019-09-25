import React from 'react';
import NavBar from '../Components/NavBar'
import Footer from '../Components/footer'

function Layout(props){
	return(
			<div className="container-fluid">

				<React.Fragment>
					<NavBar Link1="Agregar Cursos" Link2="Cursos" Link3="Inscripciones" Link4="Reclamos"></NavBar>
						{props.children}
					<Footer></Footer>
				</React.Fragment>
				
			</div>
		);
}

export default Layout;