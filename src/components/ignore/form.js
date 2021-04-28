import React , { useState }from 'react';
import Home from '../../pages/home';
import  UserService from '../../Service/UserService';
import './FormUser.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const userService = new UserService();

export default class FormUser extends React.Component {
  constructor(props) {
    super(props);
   
    this.onChange = this.onChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCreate(){
    userService.createUser(
      {
        "first_name": this.state.firstName,
        "username": this.state.email,
        "img": this.state.pincture,
        "email": this.state.email,
        "password": this.state.password
    }
    ).then((result)=>{
      alert("Customer created!");
    }).catch(()=>{
      alert('Error');
    });
  }


  handleSubmit(event) {
   
    console.log(event)
    this.handleCreate();
   
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  onChange (e) {
    this.setState({ 
        [e.target.name]: e.target.value
    });
  }

 
  render() {
    return (
      <div className="container">
      <div className="container-form">
      <div> 
        <h1>Cadastro de Usuario</h1>
        <Router>
          <Route  path="/home" component={Home} />
        </Router>
        <a href="/home">ooooo</a>
      </div>
      <form  onSubmit={this.handleSubmit}>
        <div className="name">
          <h5>First Name</h5>
        </div>
        <div className="input-container">
          <label><img className="icon-input"src='/user-edit-solid.svg'/></label>
          <input className="form-control" type="text" name='firstName' placeholder="firstName" onChange={this.onChange} required/>
        </div>

        <div className="name">
          <h5>Foto de perfil</h5>
        </div>
        <div className="input-container" >
          <label><img className="icon-input"src='/user-edit-solid.svg'/></label>
          <input className="form-control" type="file" name="pincture" onChange={this.onChange}/>
        </div>
        
        <div className="name">
          <h5>E-mail</h5>
        </div>
        <div className="input-container">
          <label><img className="icon-input"src='/envelope-solid.svg'/></label>
          <input className="form-control" type="text" name='email' placeholder="email" onChange={this.onChange} required/>
        </div>
        
        <div  className="name">
          <h5>Password</h5>
        </div>
        <div className="input-container">
          <label><img className="icon-input"src='/lock-solid.svg'/></label>
          <input className="form-control" type="password" id="password" name='password' placeholder="password" onChange={this.onChange} required/>
          <div id='toggle' onClick={this.toggle}>Mostrar</div>
        </div>
        
       <div className="btn">
          <button type="submit" value="Submit">Enviar</button>
       </div>
    
      </form>
      </div>
      <footer>
      <div className="onda">
        <svg id="wave" viewBox="0 0 1440 180" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%">
        </stop></linearGradient></defs>
        <path 
        class="wave-1"
        fill="url(#sw-gradient-0)" 
        d="M0,0L40,3C80,6,160,12,240,36C320,60,400,102,480,123C560,144,640,144,720,120C800,
        96,880,48,960,36C1040,24,1120,48,1200,63C1280,78,1360,84,1440,75C1520,66,1600,42,1680,
        54C1760,66,1840,114,1920,114C2000,114,2080,66,2160,66C2240,66,2320,114,2400,123C2480,
        132,2560,102,2640,84C2720,66,2800,60,2880,63C2960,66,3040,78,3120,69C3200,60,3280,30,3360,
        27C3440,24,3520,48,3600,57C3680,66,3760,60,3840,63C3920,66,4000,78,4080,75C4160,72,4240,54,4320,
        54C4400,54,4480,72,4560,72C4640,72,4720,54,4800,39C4880,24,4960,12,5040,24C5120,36,5200,72,5280,
        81C5360,90,5440,72,5520,81C5600,90,5680,126,5720,144L5760,162L5760,180L5720,180C5680,180,5600,
        180,5520,180C5440,180,5360,180,5280,180C5200,180,5120,180,5040,180C4960,180,4880,180,4800,180C4720,
        180,4640,180,4560,180C4480,180,4400,180,4320,180C4240,180,4160,180,4080,180C4000,180,3920,
        180,3840,180C3760,180,3680,180,3600,180C3520,180,3440,180,3360,180C3280,180,3200,180,3120,180C3040,180
        ,2960,180,2880,180C2800,180,2720,180,2640,180C2560,180,2480,180,2400,180C2320,180,2240,180,2160,180C2080,
        180,2000,180,1920,180C1840,180,1760,180,1680,180C1600,180,1520,180,1440,180C1360,180,1280,180,1200,180C1120,
        180,1040,180,960,180C880,180,800,180,720,180C640,180,560,180,480,180C400,180,320,180,240,180C160,180,
        80,180,40,180L0,180Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%">
        </stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs>
        <path 
        class="wave-2"
        fill="url(#sw-gradient-1)" d="M0,126L40,126C80,126,160,126,240,108C320,90,400,54,480,48C560,42,640,66,720,90C800,114,880,138,960,135C1040,132,1120,102,1200,81C1280,60,1360,48,1440,60C1520,72,1600,108,1680,120C1760,132,1840,120,1920,120C2000,120,2080,132,2160,141C2240,150,2320,156,2400,135C2480,114,2560,66,2640,45C2720,24,2800,30,2880,51C2960,72,3040,108,3120,105C3200,102,3280,60,3360,39C3440,18,3520,18,3600,27C3680,36,3760,54,3840,54C3920,54,4000,36,4080,30C4160,24,4240,30,4320,33C4400,36,4480,36,4560,45C4640,54,4720,72,4800,87C4880,102,4960,114,5040,105C5120,96,5200,66,5280,51C5360,36,5440,36,5520,48C5600,60,5680,84,5720,96L5760,108L5760,180L5720,180C5680,180,5600,180,5520,180C5440,180,5360,180,5280,180C5200,180,5120,180,5040,180C4960,180,4880,180,4800,180C4720,180,4640,180,4560,180C4480,180,4400,180,4320,180C4240,180,4160,180,4080,180C4000,180,3920,180,3840,180C3760,180,3680,180,3600,180C3520,180,3440,180,3360,180C3280,180,3200,180,3120,180C3040,180,2960,180,2880,180C2800,180,2720,180,2640,180C2560,180,2480,180,2400,180C2320,180,2240,180,2160,180C2080,180,2000,180,1920,180C1840,180,1760,180,1680,180C1600,180,1520,180,1440,180C1360,180,1280,180,1200,180C1120,180,1040,180,960,180C880,180,800,180,720,180C640,180,560,180,480,180C400,180,320,180,240,180C160,180,80,180,40,180L0,180Z"></path>
        <defs><linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs>
        <path class="wave-3"
        fill="url(#sw-gradient-2)" d="M0,18L40,30C80,42,160,66,240,78C320,90,400,90,480,93C560,96,640,102,720,93C800,84,880,60,960,45C1040,30,1120,24,1200,33C1280,42,1360,66,1440,84C1520,102,1600,114,1680,123C1760,132,1840,138,1920,138C2000,138,2080,132,2160,120C2240,108,2320,90,2400,90C2480,90,2560,108,2640,120C2720,132,2800,138,2880,141C2960,144,3040,144,3120,138C3200,132,3280,120,3360,108C3440,96,3520,84,3600,75C3680,66,3760,60,3840,60C3920,60,4000,66,4080,75C4160,84,4240,96,4320,102C4400,108,4480,108,4560,102C4640,96,4720,84,4800,93C4880,102,4960,132,5040,147C5120,162,5200,162,5280,150C5360,138,5440,114,5520,99C5600,84,5680,78,5720,75L5760,72L5760,180L5720,180C5680,180,5600,180,5520,180C5440,180,5360,180,5280,180C5200,180,5120,180,5040,180C4960,180,4880,180,4800,180C4720,180,4640,180,4560,180C4480,180,4400,180,4320,180C4240,180,4160,180,4080,180C4000,180,3920,180,3840,180C3760,180,3680,180,3600,180C3520,180,3440,180,3360,180C3280,180,3200,180,3120,180C3040,180,2960,180,2880,180C2800,180,2720,180,2640,180C2560,180,2480,180,2400,180C2320,180,2240,180,2160,180C2080,180,2000,180,1920,180C1840,180,1760,180,1680,180C1600,180,1520,180,1440,180C1360,180,1280,180,1200,180C1120,180,1040,180,960,180C880,180,800,180,720,180C640,180,560,180,480,180C400,180,320,180,240,180C160,180,80,180,40,180L0,180Z"></path></svg>
      </div>
      </footer>
    </div>
      
    );
  }
}