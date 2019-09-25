import React, {Component} from 'react';
import SideBar from '../Components/SideBar'

class Loader extends Component{
	render(){
		return(
				<div className="col d-flex justify-content-center mt-5 mb-5">
					
					<div className="row justify-content-center mb-5 mt-5">
						<div class="loader mt-5 mb-5">Loading...</div>
					</div>
					
				</div>
			)
	}
}

export default Loader;