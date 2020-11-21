import React, { Component } from 'react';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export class Header extends Component {

	logout = () => {
		cookies.remove('id')
		cookies.remove('name')
		cookies.remove('username')
		cookies.remove('token')
		window.location.href = '/'
	}

    render() {
        return (
			<div id="header" className="header navbar-inverse">
				<div className="navbar-header">
					<a href="/" className="navbar-brand"><span className="navbar-logo" /> <b>Color</b> Admin</a>
					<button type="button" className="navbar-toggle" data-click="sidebar-toggled">
					<span className="icon-bar" />
					<span className="icon-bar" />
					<span className="icon-bar" />
					</button>
				</div>
				<ul className="navbar-nav navbar-right">
					<li className="dropdown navbar-user">
					<a href="#!" className="dropdown-toggle" data-toggle="dropdown">
						<img src="./assets/img/user/user-13.jpg" alt="User" /> 
						<span className="d-none d-md-inline">{cookies.get('name')}</span> <b className="caret" />
					</a>
					<div className="dropdown-menu dropdown-menu-right">
						<a href="#!" className="dropdown-item">Edit Profile</a>
						<a href="#!" className="dropdown-item"><span className="badge badge-danger pull-right">2</span> Inbox</a>
						<a href="#!" className="dropdown-item">Calendar</a>
						<a href="#!" className="dropdown-item">Setting</a>
						<div className="dropdown-divider" />
						<a href="#!" className="dropdown-item" onClick={this.logout}>Log Out</a>
					</div>
					</li>
				</ul>
			</div>
        )
    }
}

export default Header;