import React, { useState, useEffect } from "react"
import {Form,Field, Formik} from 'formik';
import TextFieldFormik from "../Imputs/TextFieldFormik";
import { Add , Delete } from "@material-ui/icons";
import api from "../../service/api";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  Breadcrumbs,
  Fab,
  List, 
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemSecondaryAction,
  IconButton,
  Tooltip,
} from "@material-ui/core";

function validate(text){
   if(!text){
    return "Campo obrigatório";
  }
  return ;
}

function NomeListaForm({open, setOpen, evento, add}){
  const [nomeLista, setNomeLista ]= useState([]);

  async function getNomesLista(){
    const rest = await api.get(`/dataEventoId/${evento._id}`);
      if(rest.data) {
        setNomeLista(rest.data.nomeLista);
     }
}

  useEffect(()=>{
    getNomesLista();
  }, [nomeLista] )

/*
 function deleteNomeList(id){
    setListaNomes(listaNomes.filter(item=> item.id !== id))
 }
*/
    return (
    <Dialog open={open} aria-labelledby="form-dialog-title" fullWidth >
    
    <Formik initialValues={{nome:"", phone:""}} onReset={()=> setOpen(false)} onSubmit={add}>
      {( props ) => 
      <Form >                   
          <DialogTitle id="form-dialog-title">
            <Typography variant="h5" color="textSecondary" >
            <div>
               Nome na Lista
            </div>
          </Typography>

          <Breadcrumbs aria-label="breadcrumb" >
              <Typography color="inherit" >{evento.evento}</Typography>
              <Typography color="inherit" >{evento.data}</Typography>
          </Breadcrumbs>        
          </DialogTitle>

       <DialogContent>
         
         <Field    
           name="nome"
           id="nome"
           validate={validate}
           component={TextFieldFormik}
           label="Nome"
           obrigatorio                     
         />
         
          <Field        
          id="phone" 
          name="phone" 
          validate={validate}
          component={TextFieldFormik}
          label="Contato" 
          style={{marginLeft:"10px"}} 
          obrigatorio  
          />
        <Tooltip  title="Preencha todos os campos">
          <Fab  
              style={{marginTop:"25px", marginLeft:"50px"}}           
              size="small" 
              color="secondary" 
              aria-label="add">
            <Add onClick={props.handleSubmit}/>
         </Fab >

        </Tooltip>
         <List
           subheader={
            <ListSubheader component="div" id="nested-list-subheader" >
              {nomeLista.length===0? "Não há pessoas na lista ": "Lista" }
            </ListSubheader>
          }
         >
           {nomeLista && 
             nomeLista.map(item=>(
               <ListItem key={item.id}>
                 <ListItemText
                    secondary={item.nome}
                    />
                 <ListItemText
                    secondary={item.phone}
                    />
              <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <Delete />
                    </IconButton>
              </ListItemSecondaryAction> 
           </ListItem>
             ))
          }
      </List>
       </DialogContent>

       <DialogActions>
         <div id="camposForm">
           <Button color="secondary" onClick={props.handleReset}>
             Retornar
           </Button>
 
         </div>
       </DialogActions>    
     </Form> 
     }
  </Formik> 
  </Dialog>
    )
}
 export default NomeListaForm;
