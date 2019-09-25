import React, {Component} from 'react';
import './css/Curso.css'

class SideBar extends Component{
	render(){
		return(
					<div className="col-2 menu-lateral bg-secondary">
						<ul className="nav flex-column">
							<div className="row justify-content-center">
								<li className="logo nav justify-content-center">
									<img className="mt-3 Instructor" src={this.props.linkImage} />
								</li>
							</div>
							<div className="row justify-content-center">
								<h2 className="justify-content-center text-light">{this.props.name}</h2>
							</div>
						</ul>
					</div>
			)
	}
}

export default SideBar;