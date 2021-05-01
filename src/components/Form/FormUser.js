import React from 'react';
import '../../Global.css';
import  UserService from '../../Service/UserService';
import './FormUser.css';
const userService = new UserService();

export default class FormUser extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this); 
    this.onChangeFile = this.onChangeFile.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
   
      let form_data = new FormData();
      form_data.append('img', this.state.file, this.state.file.name);
      form_data.append('email', this.state.email);
      form_data.append('first_name', this.state.firstName);
      form_data.append('password', this.state.password);
      form_data.append('username', this.state.email);
      userService.createUser(
        form_data
      )
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onChangeFile (e) {
    this.setState({ 
      file: e.target.files[0]
  });
  }

  onChange (e) {
    
    this.setState({ 
        [e.target.name]: e.target.value
    });
    
  }

  render() {
    return (
        <div className="container-register-user">
          <div> 
            <h1>Cadastro de Usuario</h1>
          </div>
          <form  onSubmit={this.handleSubmit}>

            
            <div className="input-container">
              <label>First Name</label>
              <input className="form-control" type="text" name='firstName' placeholder="firstName" onChange={this.onChange} required/>
            </div>

            <div className="input-container" >
              <label>Foto de perfil</label>
              <input className="form-control" type="file" name='img' onChange={this.onChangeFile} required/>
            </div>
            
            <div className="input-container">
              <label>E-mail</label>
              <input className="form-control" type="text" name='email' placeholder="email" onChange={this.onChange} required/>
            </div>
            
            <div className="input-container toggle">
              <label>Password</label>
              <input className="form-control" type="password" id="password" name='password' placeholder="password" onChange={this.onChange} required/>
              <div id='toggle' onClick={this.toggle}>Mostrar</div>
            </div>
            
          <div className="btn">
              <button type="submit" value="Submit">Enviar</button>
          </div>
        
        </form>
      </div>
    );
  }
}