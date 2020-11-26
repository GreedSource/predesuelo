import React, { Component} from 'react';
import Cookies from 'universal-cookie'

const cookie = new Cookies()
export class Sidebar extends Component {
    render() {
		const cruds = (
			<li className="has-sub">
				<a href="#!">
					<b className="caret"></b>
					<i className="fa fa-tasks"></i>
					<span>Cruds</span>
				</a>
				<ul className="sub-menu">
					<li><a href="/fertilizer">Fertilizers</a></li>
					<li><a href="/crop">Crops</a></li>
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
					<li><a href="/dashboard"><i className="fa fa-th-large"></i> <span>Dashboard</span></a></li>
					<li><a href="/sample"><i className="fa fa-indent"></i> <span>Samples</span></a></li>
					{cookie.get('role') === 'true' ? cruds : ''}
					<li><a href="/covid-tracker"><i className="fa fa-bars"></i> <span>CovidTracker</span></a></li>					
					
					<li><a href="#!" className="sidebar-minify-btn" data-click="sidebar-minify"><i className="fa fa-angle-double-left"></i></a></li>
			        
				</ul>
				
			</div>
			
		</div>
        //<div className="sidebar-bg"></div>
        )
    }
}

export default Sidebar;