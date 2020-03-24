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
 
} from "@material-ui/core";


const initialValues={evento:"", data:"", horario:"", local:""};

function validate(text){
   if(!text){
    return "Campo obrigatório";
  }
  return ;
}

function DetalheForm({open, setOpen, add}){

    return (
    <Dialog open={open} aria-labelledby="form-dialog-title" fullWidth >
   
    <Formik initialValues={initialValues} onReset={()=>setOpen(false)} onSubmit={add} fullWidth>
      {( props ) => 
      <Form >                   
          <DialogTitle id="form-dialog-title">
            <Typography variant="h5" color="textSecondary">
            <div>
               Criar evento
            </div>
          </Typography>      
          </DialogTitle>

       <DialogContent>       
         <Field    
           name="evento"
           id="evento"
           validate={validate}
           component={TextFieldFormik}
           label="Evento"  
           fullWidth 
          obrigatorio                     
         />
         
        <Field        
          id="data" 
          name="data" 
          validate={validate}
          component={TextFieldFormik}
          label="Data"
          obrigatorio                 
          />
       
        <Field        
          id="passagem" 
          name="passagem" 
          validate={validate}
          component={TextFieldFormik}
          label="Passagem"
          obrigatorio
          style={{marginLeft:"10px", width: "150px"}}   
          />
        
        <Field        
          id="inicio" 
          name="horario" 
          validate={validate}
          component={TextFieldFormik}
          label="Início" 
          obrigatorio
          style={{marginLeft:"10px", width: "150px"}}      
          />

        <Field        
          id="local" 
          name="local" 
          validate={validate}
          component={TextFieldFormik}
          label="Local"
          obrigatorio  
          fullWidth    
          />
          
        <Field        
          id="observacoes" 
          name="observacoes" 
          validate={validate}
          component={TextFieldFormik}
          label="Observações"
          fullWidth
          multiline
          rows="4"          
          />

       </DialogContent>

       <DialogActions>
         <div id="camposForm">
           <Button color="secondary" onClick={props.handleReset}>
             Cancelar
           </Button>
           <Button color="primary" type="submit">
             Enviar
           </Button>
         </div>
       </DialogActions>    
     </Form> 
     }
  </Formik> 
  </Dialog>
    )
}
 export default DetalheForm;