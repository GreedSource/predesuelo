import React, { Component } from 'react';

export class ThemePanel extends Component {
    render() { 
        return (
            <div className="theme-panel">
            <a href="#!" data-click="theme-panel-expand" className="theme-collapse-btn"><i className="fa fa-cog"></i></a>
            <div className="theme-panel-content">
                <h5 className="m-t-0">Color Theme</h5>
                <ul className="theme-list clearfix">
                    <li className="active"><a href="#!" className="bg-green" data-theme="default" data-theme-file="./assets/css/default/theme/default.css" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Default">&nbsp;</a></li>
                    <li><a href="#!" className="bg-red" data-theme="red" data-theme-file="./assets/css/default/theme/red.css" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Red">&nbsp;</a></li>
                    <li><a href="#!" className="bg-blue" data-theme="blue" data-theme-file="./assets/css/default/theme/blue.css" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Blue">&nbsp;</a></li>
                    <li><a href="#!" className="bg-purple" data-theme="purple" data-theme-file="./assets/css/default/theme/purple.css" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Purple">&nbsp;</a></li>
                    <li><a href="#!" className="bg-orange" data-theme="orange" data-theme-file="./assets/css/default/theme/orange.css" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Orange">&nbsp;</a></li>
                    <li><a href="#!" className="bg-black" data-theme="black" data-theme-file="./assets/css/default/theme/black.css" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Black">&nbsp;</a></li>
                </ul>
                <div className="divider"></div>
                <div className="row m-t-10">
                    <div className="col-md-5 control-label double-line">Header Styling</div>
                    <div className="col-md-7">
                        <select name="header-styling" className="form-control form-control-sm">
                            <option value="1">default</option>
                            <option value="2">inverse</option>
                        </select>
                    </div>
                </div>
                <div className="row m-t-10">
                    <div className="col-md-5 control-label">Header</div>
                    <div className="col-md-7">
                        <select name="header-fixed" className="form-control form-control-sm">
                            <option value="1">fixed</option>
                            <option value="2">default</option>
                        </select>
                    </div>
                </div>
                <div className="row m-t-10">
                    <div className="col-md-5 control-label double-line">Sidebar Styling</div>
                    <div className="col-md-7">
                        <select name="sidebar-styling" className="form-control form-control-sm">
                            <option value="1">default</option>
                            <option value="2">grid</option>
                        </select>
                    </div>
                </div>
                <div className="row m-t-10">
                    <div className="col-md-5 control-label">Sidebar</div>
                    <div className="col-md-7">
                        <select name="sidebar-fixed" className="form-control form-control-sm">
                            <option value="1">fixed</option>
                            <option value="2">default</option>
                        </select>
                    </div>
                </div>
                <div className="row m-t-10">
                    <div className="col-md-5 control-label double-line">Sidebar Gradient</div>
                    <div className="col-md-7">
                        <select name="content-gradient" className="form-control form-control-sm">
                            <option value="1">disabled</option>
                            <option value="2">enabled</option>
                        </select>
                    </div>
                </div>
                <div className="row m-t-10">
                    <div className="col-md-5 control-label double-line">Content Styling</div>
                    <div className="col-md-7">
                        <select name="content-styling" className="form-control form-control-sm">
                            <option value="1">default</option>
                            <option value="2">black</option>
                        </select>
                    </div>
                </div>
                <div className="row m-t-10">
                    <div className="col-md-12">
                        <a href="#!" className="btn btn-inverse btn-block btn-sm" data-click="reset-local-storage">Reset Local Storage</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ThemePanel;