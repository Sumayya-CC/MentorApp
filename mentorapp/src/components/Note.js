import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/Home.css';
import logo from '../Image/tarentologo.png';
import { makeStyles } from "@material-ui/core/styles";


//Adding js styles
const useStyles = makeStyles((theme) => ({
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            // width: 350,
            paddingTop: "1%",
            marginTop: "1%",
            marginLeft:'0%',
            color: "black",
            // minHeight: '40%', 
            background:'#F2F2F2',
            
            '& label.Mui-focused': {
            color: 'black',
            },
            '& .MuiInput-underline:after': {
            borderBottomColor: '#F2F2F2',
            },
            '& .MuiInput-underline:before': {
            borderBottomColor: '#F2F2F2',
            },
            
            '&.Mui-focused fieldset': {
            borderColor: '#F2F2F2',
            },
            '&& .MuiInput-root:hover::before': {
            borderColor: '#F2F2F2',
            } 
            },
}));

function Note(props) {

    const [mentor, setMentor] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [name, setName] = React.useState('');
    const classes = useStyles();

    const handleChange1 = (event) => {
        setMentor(event.target.value);
        console.log(mentor);
      };

    const handleChange2 = (event) => {
        setMessage(event.target.value);
        console.log(message);
      };

    const handleChange3 = (event) => {
        setName(event.target.value);
        console.log(name);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(message);
        console.log(name);
      }
  
    return (
      <div className = "Space" className = "Align-text">
          <img  src={logo} alt="cur" className="center"/>
          <div className = "Space"></div>
        <form onSubmit={handleSubmit} >
        <img src={props.image} className="pic"
      />

          <TextField 
            id="Mentor"
            label=" Name of your mentor"
            name="Mentor"
            required
            onChange={handleChange1}
            InputLabelProps={{required: false}}
            // value={this.state.text}
            
            // variant="outlined"
            className={classes.textField}
            fullWidth = "true"/>


            <TextField style = {{height: '150px',}}
            id="Message"
            label=" What's your message for mentor?"
            name="Text"
            required
            align='justify'
            onChange={handleChange2}
            InputLabelProps={{required: false}}
            // value={this.state.text}
            // onChange={this.handleChange}
            multiline = "true"
            // variant="filled"
            className={classes.textField}
            rowsMax={8}
            fullWidth = "true"/>

        <TextField 
            id="Name"
            label="Your Name"
            name="Name"
            required
            InputLabelProps={{required: false}}
            onChange={handleChange3}
            // value={this.state.text}
            // onChange={this.handleChange}
            // variant="outlined"
            className={classes.textField}
            fullWidth = "true"/>

          <div className="Space">
            <Button variant="contained" 
              style={{align: 'center', backgroundColor: "#004040",color:"#FFFFFF", width:'25%', height: '10%', textTransform: 'none', float:'right'}}
              type="submit">
                Post
            </Button>
          </div>
        </form>
      </div>
    );
  }
  
  export default Note;