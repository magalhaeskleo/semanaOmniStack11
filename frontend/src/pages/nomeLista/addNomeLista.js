import React, { useState} from "react";
import { IconButton, Tooltip, Snackbar} from "@material-ui/core";
import { PlaylistAdd } from "@material-ui/icons";

import api from "../../service/api";
import NomeListaForm from "./nomeListaForm"

function AddNomeLista({evento}){
 const [openNomeLista, setOpenNomeLista]= useState(false);
 const [openSnackbar, setOpenSnackbar] =  useState(false);
 
 // /dataEventoId/:id
 async function add(newNomeLista){
   console.log(newNomeLista);
   await api.post(`/dataEvento/${evento._id}/nomeLista`, newNomeLista);
   //api.get(`/dataEvento/${evento._id}/emailSendNomeLista`);
   setOpenSnackbar(true);
  // setOpenNomeLista(false);
 }

    return(
        <div>
        <Tooltip title="Nome para Evento">
          <IconButton onClick={()=>setOpenNomeLista(true)}>
            <PlaylistAdd />
          </IconButton>         
        </Tooltip>
        <NomeListaForm 
            open={openNomeLista} 
            setOpen={setOpenNomeLista} 
            evento={evento} 
            add={add}
            />
        <Snackbar
              anchorOrigin={{ horizontal: "center", vertical: "center" }}
              open={openSnackbar}
              onClose={()=> setOpenSnackbar(false)}
              autoHideDuration={4000}
              ContentProps={{
                "aria-describedby": "message-id",
              }}
              message={<span id="message-id">Sua lista foi encaminhada</span>}
            />
        </div>
    )
}

export default AddNomeLista;