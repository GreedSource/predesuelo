import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div id="header" className="header navbar-inverse">
			<div className="navbar-header">
				<a href="/" className="navbar-brand"><span className="navbar-logo"></span> <b>Color</b> Admin</a>
				<button type="button" className="navbar-toggle" data-click="sidebar-toggled">
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
			</div>
			<ul className="navbar-nav navbar-right">
				<li className="dropdown navbar-user">
					<a href="#!" className="dropdown-toggle" data-toggle="dropdown">
						<img src="./assets/img/user/user-13.jpg" alt="" /> 
						<span className="d-none d-md-inline">Adam Schwartz</span> <b className="caret"></b>
					</a>
					<div className="dropdown-menu dropdown-menu-right">
						<a href="#!" className="dropdown-item">Edit Profile</a>
						<a href="#!" className="dropdown-item"><span className="badge badge-danger pull-right">2</span> Inbox</a>
						<a href="#!" className="dropdown-item">Calendar</a>
						<a href="#!" className="dropdown-item">Setting</a>
						<div className="dropdown-divider"></div>
						<a href="#!" className="dropdown-item">Log Out</a>
					</div>
				</li>
			</ul>
			
		</div>
        )
    }
}

export default Header;