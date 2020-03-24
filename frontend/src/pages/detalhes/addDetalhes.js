import React, { useState } from "react";
import { Button, Tooltip, Snackbar} from "@material-ui/core";

import api from "../../service/api";
import DetalheForm from "./detalheForm"

function AddDetalhe({evento, callback}){
 const [openDetalhe, setOpenDetalhe]= useState(false);
 const [openSnackbar, setOpenSnackbar] =  useState(false);

 async function add(newEvento){
   await api.post("/dataEvento", newEvento);
   // api.get(`/dataEvento/${evento._id}/emailSendNomeLista`);
   setOpenSnackbar(true);
   setOpenDetalhe(false);
   callback(true);
 }
    return(
        <div>
        <Tooltip title="Criar evento">
          <Button color="inherit" onClick={()=>setOpenDetalhe(true)} >Adicionar</Button>        
        </Tooltip>
        <DetalheForm open={openDetalhe} setOpen={setOpenDetalhe} evento={evento} add={add}/>
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

export default AddDetalhe;