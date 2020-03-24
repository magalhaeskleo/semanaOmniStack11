import React from "react"
import {Form,Field, Formik} from 'formik';
import TextFieldFormik from "../Imputs/TextFieldFormik";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  Breadcrumbs
} from "@material-ui/core";

function validate(text){
   if(!text){
    return "Campo obrigatório";
  }
  return ;
}

function MusicForm({open, setOpen, evento, add}){
    return (
    <Dialog open={open} aria-labelledby="form-dialog-title">     
      
       
    <Formik initialValues={{nomeMusica:"", pedidoPor:""}} onReset={()=> setOpen(false)} onSubmit={add}>
      {( props ) => 
      <Form>                   
         <DialogTitle id="form-dialog-title">
          <Typography variant="h5" color="textSecondary" component="p">
           <div>
             Pedir Música
           </div>
         </Typography>
         
          <Breadcrumbs aria-label="breadcrumb" >
              <Typography color="inherit" >{evento.evento}</Typography>
              <Typography color="inherit" >{evento.data}</Typography>
          </Breadcrumbs>        
       </DialogTitle>

       <DialogContent>
         <Field
           autoFocus
           margin="dense"
           name="nomeMusica"
           id="musica"
           validate={validate}
           component={TextFieldFormik}
           label="Qual sua música?"
           fullWidth                   
         />
         
          <Field 
          margin="dense" 
          id="nome" 
          name="pedidoPor" 
          validate={validate}
          component={TextFieldFormik}
          label="Digite seu nome " 
          fullWidth  
          />
         
       </DialogContent>
       <DialogActions>
         <div id="camposForm">
           <Button color="secondary" onClick={props.handleReset}>
             Cancelar
           </Button>
           <Button color="primary" type="submit">
             Pedir
           </Button>
         </div>
       </DialogActions>    
     </Form> 
     }
  </Formik> 
  </Dialog>
    )
}
 export default MusicForm;
