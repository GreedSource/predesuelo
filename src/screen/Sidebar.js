import React, { Component} from 'react';
import Cookies from 'universal-cookie'
import {Link} from 'react-router-dom'

const cookie = new Cookies()
export class Sidebar extends Component {
	render() {
		
		const menu = (
			<li className="has-sub">
				<a href="#!">
					<b className="caret"></b>
					<i className="fa fa-tasks"></i>
					<span>Cruds</span>
				</a>
				<ul className="sub-menu">
					<li><Link to={`${this.props.match.path}/fertilizer`}>Fertilizers</Link></li>
					<li><Link to={`${this.props.match.path}/crop`}>Crops</Link></li>
				</ul>
			</li>
		)

        return (
		<div id="sidebar" className="sidebar">
			
			<div data-scrollbar="true" data-height="100%">
				
				<ul className="nav">
					<li className="nav-profile">
						<a href="#!" data-toggle="nav-profile">
							<div className="cover with-shadow"></div>
							<div className="image">
								<img src={process.env.PUBLIC_URL + "/assets/img/user/user-13.jpg"} alt="" />
							</div>
							<div className="info">
								{cookie.get('name')}
							</div>
						</a>
					</li>
					
					
				</ul>
				<ul className="nav">
					<li className="nav-header">Navigation</li>
					
					<li>
						<Link to={`${this.props.match.path}`}><i className="fa fa-indent"></i> <span>Samples</span></Link>
					</li>
					{ (cookie.get('role') === 'true') ? menu : null }
					<li><Link to={`${this.props.match.path}/covid-tracker`}><i className="fa fa-bars"></i> <span>CovidTracker</span></Link></li>					
					
					<li><a href="#!" className="sidebar-minify-btn" data-click="sidebar-minify"><i className="fa fa-angle-double-left"></i></a></li>
			        
				</ul>
			</div>
			
		</div>
		//<div className="sidebar-bg"></div>
		//<li><a href="/dashboard"><i className="fa fa-th-large"></i> <span>Dashboard</span></a></li>
        )
    }
}

export default Sidebar;