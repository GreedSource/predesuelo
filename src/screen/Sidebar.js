import React, { Component} from 'react';
import Cookies from 'universal-cookie'

const cookie = new Cookies()
export class Sidebar extends Component {
    render() {
        return (
		<div id="sidebar" className="sidebar">
			
			<div data-scrollbar="true" data-height="100%">
				
				<ul className="nav">
					<li className="nav-profile">
						<a href="#!" data-toggle="nav-profile">
							<div className="cover with-shadow"></div>
							<div className="image">
								<img src="./assets/img/user/user-13.jpg" alt="" />
							</div>
							<div className="info">
								{cookie.get('name')}
							</div>
						</a>
					</li>
					
					
				</ul>
				<ul className="nav">
					<li className="nav-header">Navigation</li>
					
					<li className="has-sub">
						<a href="#!">
					        <b className="caret"></b>
						    <i className="fa fa-th-large"></i>
						    <span>Dashboard</span>
					    </a>
						<ul className="sub-menu">
						    <li><a href='/dashboard'>Dashboard</a></li>
						</ul>
					</li>
					<li className="has-sub">
						<a href="#!">
					        <b className="caret"></b>
						    <i className="fa fa-tasks"></i>
						    <span>Cruds</span>
					    </a>
						<ul className="sub-menu">
						    <li><a href="/sample">Samples</a></li>
							<li><a href="/fertilizer">Fertilizers</a></li>
						</ul>
					</li>
					<li><a href="covid-tracker"><i className="fa fa-bars"></i> <span>CovidTracker</span></a></li>					
					
					<li><a href="#!" className="sidebar-minify-btn" data-click="sidebar-minify"><i className="fa fa-angle-double-left"></i></a></li>
			        
				</ul>
				
			</div>
			
		</div>
        //<div className="sidebar-bg"></div>
        )
    }
}

export default Sidebar;