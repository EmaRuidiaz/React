import React, { Component } from 'react';
import '../Components/css/Curso.css'

class Footer extends Component{
	render(){
		return(
				<div className="row footer">
					
						<div className="container-fluid mt-5 ml-5 mr-5">
						  	<div className="row">
							    <div className="col-5  about-company">
							    	<h2>Follow Us</h2>
							      	<p className="pr-5 text-white-50">We have a few other specialized lists (mentorship, i18n, ...). You can find more information about them in our social networks.</p>
							      	<p>
							      		<a className="ml-2" href="www.facebook.com/Ema.Ruidiaz"><img height = '30' width = '30' src="https://image.flaticon.com/icons/svg/174/174848.svg"/></a>
							      		<a className="ml-2" href="#"><img height = '30' width = '30' src="https://image.flaticon.com/icons/svg/174/174855.svg"/></a>
							      		<a className="ml-2" href=""><img height = '30' width = '30' src="https://image.flaticon.com/icons/svg/174/174876.svg"/></a>
							      		<a className="ml-2" href=""><img height = '30' width = '30' src="https://image.flaticon.com/icons/svg/174/174857.svg"/></a>
							      		<a className="ml-2" href=""><img height = '30' width = '30' src="https://image.flaticon.com/icons/svg/174/174883.svg"/></a>
							      	</p>
							    </div>
							    <div className="col-3  links">
							    	<h4 className="mt-lg-0 mt-sm-3">Learn More</h4>
							        <ul className="m-0 p-0">
							        	<li>- <a href="#">About React</a></li>
							          	<li>- <a href="#">Getting Started with React</a></li>
							          	<li>- <a href="#">Team Organization</a></li>
							          	<li>- <a href="#">React Software Foundation</a></li>
							          	<li>- <a href="#">Code of Conduct</a></li>
							          	<li>- <a href="#">Diversity Statement</a></li>
							        </ul>
							    </div>
							    <div className="col-4  location">
							      	<h4 className="mt-lg-0 mt-sm-4">Location</h4>
							      	<p>H3504ATE, Arturo Illia 1055, H3504ATE Resistencia, Chaco</p>
							      	<p className="mb-0"><i className="fa fa-phone mr-3"></i>0362 15-430-6678</p>
							      	<p><i className="fa fa-envelope-o mr-3"></i>info@gmail.com</p>
							    </div>
						  	</div>
						  	<div className="row mt-5">
						    	<div className="col copyright">
						      		<p className=""><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
						    	</div>
						  	</div>
						</div>
					
				</div>
			);
	}
}

export default Footer;