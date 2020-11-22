import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';


export class Layout extends Component {
    
    render() {
        return (
            
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed">
                <Header/>
                <Sidebar/>
                <div className="sidebar-bg"></div>
                <div className="content" id='content'>
                    <h1 className="page-header">{this.props.title}</h1>
                    <div className="row">
                        <div className="col-md-12">
                            {this.props.component}
                        </div>
                    </div>
                </div>
                
                <a href="#!" className="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"><i className="fa fa-angle-up"></i></a>
            </div>
            
        )
    }
}

export default Layout;