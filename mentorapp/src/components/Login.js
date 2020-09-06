import React, {Component} from 'react';
import '../styles/Login.css';
import Tarento from '../Image/Tarento.png';
import Logo from '../Image/Logo.png';
import { TextField } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';




//Adding js styles
const styles = theme => (
  {
  
  textField: {
      backgroundColor:"#FFFFFF",
      width: "90%",
      paddingTop: 10,
      marginTop: 20,
      height:40,
      
      '& .MuiInput-input':{ color: "#000000"},
      multilineColor:{
      color:'#FFFFFF'
      },
      '& label.Mui-focused': {
      color: '#FFFFFF',
      },
      '& label': {
      color: '#FFFFFF',
      },
      '&& .MuiInput-root:hover::before': {
        borderColor: 'white',
    },
      '& .MuiInput-underline:after': {
      borderBottomColor: '#FFFFFF',
      },
      '& .MuiInput-underline:hover': {
        borderBottomColor: '#FFFFFF',
        },
      '& .MuiInput-underline:before': {
        borderBottomColor: '#FFFFFF',
        },
        '& .MuiInput-underline': {
          "&&&&:hover:before": {
            borderBottomColor: "#FFFFFF",
        }},
      },
  
  
  });
  


var errormsg='';
class Login extends Component {    
// constructers
constructor(props){
  super(props);
  this.state = {
  username:'',
  password:''
}}

handleChange1 = event => {
  this.setState({ username: event.target.value });
  console.log(this.state.username);
}

handleChange2 = event => {
  this.setState({ password: event.target.value });
  console.log(this.state.password);
}  

validate = () =>{
  var uname = this.state.username;
  var pass =  this.state.password;
  console.log(uname);
  console.log(pass);
  //console.log(errormsg)
  
   if(uname===null || uname === '' || pass===null || pass==='')
      {
          errormsg="Username / Password Missing!!!";
          this.setState((prevState, props) => {
              return { showError: true }
            })
      }
  
}
  
   

    render(){
      const { classes } = this.props;
        return (
            <div>
            <div className="split left">
            <img className="img3" src={Logo} alt="Welcome Message"/>
            <img className='img2' src={Tarento} alt="Tarento"/>
            </div>
            <div className="split right">
            <div>
                {this.state.showError && <div className="error-message">{errormsg}</div>}        
            </div>
                <div className='rightcontainer' >
               
                       
                  
                    <TextField
                    placeholder="  Username"
                    name="username"
                    required
                    InputLabelProps={{required: false}}  
                    className={classes.textField} 
                    value={this.state.username}
                    onChange={this.handleChange1}
                    />
                    <TextField
                    type="password"
                    placeholder="  Password"
                    name="password"
                    required
                    InputLabelProps={{required: false}}  
                    className={classes.textField} 
                    value={this.state.password}
                    onChange={this.handleChange2}
                    />
                    <div className="space"></div>
                    <div className="space1">
                    <Button variant="contained" 
                          style={{backgroundColor: "#004040", width:"80%", height: 45,fontSize:'18px',textTransform:'none', color:"#FFFFFF"}} 
                        onClick={this.validate}>
                            LOGIN
                        </Button>
                        </div>
                    </div>
            </div>
            
        </div>
        )
    }
}
export default withStyles(styles)(Login);