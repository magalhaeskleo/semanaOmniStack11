import React from "react"
import { TextField } from "@material-ui/core";

function TextFielFormik({field, form, ...props}){
      const isObrigatorio = props.obrigatorio && form.errors[field.name] && form.touched[field.name];  

      return (
      <TextField {...field} {...props}  
        helperText={isObrigatorio ? form.errors[field.name] : " "} 
        error= {isObrigatorio}
        // style={{margin:"5px"}}
        />
      )
    }

export default TextFielFormik;