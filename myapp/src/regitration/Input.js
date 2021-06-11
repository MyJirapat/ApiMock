import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    
    root:{
       /* background: "#fff",*/
        width: "100%",       
    },

    outlined:{
        width: "100%",   
        marginBottom: "20%",
        backgroundColor: "#fff",
        borderRadius: "5px",   
       
    },

    outlined2:{
        width: "100%",
        marginTop: "-60px",   
        backgroundColor: "#fff",
        borderRadius: "5px",     
    },

    contained:{
        width: "100%",
        marginTop: "5px",
        
          borderRadius: "5px"
    },
    
    form:{
        backgroud: "#fff",
    }
}));



function LoginInput(props) {
    const classes = useStyles();
  return (
    
    <TextField  
      type={props.type}
      placeholder={props.placeholder}
      variant="outlined"

      name={props.name}
    />
  );
}



function RegisterInput(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="border border-dark text-secondary login-btn register-input test2"
      ref={props.register({
        required: true
      })}
      onKeyUp={props.onkeyup}
      name={props.name}
    />
  );
}

export { LoginInput, RegisterInput };
