import React, { Component } from 'react'
import {fetchData} from '../../api/login'
import Cookies from 'universal-cookie'
const cookies = new Cookies()
class Login extends Component {
    state = {
        form: {
            username: '', 
            password: ''
        },
        data: []
    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        //console.log(this.state)
    }
    IniciarSesion = async () => {
        const fetchedData = await fetchData(this.state.form);
        
        if (fetchedData) {
            cookies.set('id', fetchedData.id, {path:'/'})
            cookies.set('name', fetchedData.name, {path:'/'})
            cookies.set('username', fetchedData.username, {path:'/'})
            cookies.set('token', fetchedData.token, {path:'/'})
            cookies.set('role', fetchedData.role, {path:'/'})
            window.location.href = './dashboard'
        }else{
            console.log(0)
        }
    }

    componentDidMount(){
        if (cookies.get('id')){
            window.location.href = './sample'
        }
    }

    render() {
        return (
           <div>
  {/* begin #page-loader */}
  <div id="page-loader" className="fade show"><span className="spinner" /></div>
  {/* end #page-loader */}
  {/* begin #page-container */}
  <div id="page-container" className="fade">
    {/* begin login */}
    <div className="login login-with-news-feed">
      {/* begin news-feed */}
      <div className="news-feed">
        <div className="news-image" style={{backgroundImage: 'url(../assets/img/login-bg/login-bg-11.jpg)'}} />
        <div className="news-caption">
          <h4 className="caption-title"><b>Prede</b>suelo App</h4>
          <p>
            Descarga la aplicación movil para enviar tus muestras de forma más comoda.
          </p>
        </div>
      </div>
      {/* end news-feed */}
      {/* begin right-content */}
      <div className="right-content">
        {/* begin login-header */}
        <div className="login-header">
          <div className="brand">
            <span className="logo" /> <b>Prede</b>suelo
            <small>Sistema de prevención del deterioro del suelo</small>
          </div>
          <div className="icon">
            <i className="fa fa-sign-in" />
          </div>
        </div>
        {/* end login-header */}
        {/* begin login-content */}
        <div className="login-content">
            <div className="form-group m-b-15">
              <input type="text" className="form-control form-control-lg" placeholder="Usuario" required id="username" name="username" onChange={this.handleChange} />
            </div>
            <div className="form-group m-b-15">
              <input type="password" className="form-control form-control-lg" placeholder="Contraseña" required id="password" name="password" onChange={this.handleChange} />
            </div>
            
            <div className="login-buttons">
              <button type="submit" className="btn btn-success btn-block btn-lg" onClick={this.IniciarSesion}>Iniciar sesión</button>
            </div>
            <div className="m-t-20 m-b-40 p-b-40 text-inverse">
              ¿Aún no tienes una cuenta? Presiona <a href="register_v3.html" className="text-success">aquí</a> para registrarte.
            </div>
            <hr />
            <p className="text-center text-grey-darker">
              © Color Admin All Right Reserved 2018
            </p>
        </div>
        {/* end login-content */}
      </div>
      {/* end right-container */}
    </div>
    {/* end login */}
  </div></div>

        )
    }
}

export default Login