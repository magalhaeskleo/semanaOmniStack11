import React, { useState } from "react";
import { IconButton, Tooltip, Snackbar} from "@material-ui/core";
import { Add } from "@material-ui/icons";

import api from "../../service/api";
import MusicForm from "./musicaForm"

function AddMusica({evento}){
 const [openMusic, setOpenMusic]= useState(false);
 const [openSnackbar, setOpenSnackbar] =  useState(false);

 async function add(newPedidoDeMusica){
   console.log(newPedidoDeMusica);
   await api.post(`/dataEvento/${evento._id}/pedidos`, newPedidoDeMusica);
   api.get(`/dataEvento/${evento._id}/emailSendPedidos`);
   setOpenSnackbar(true);
   setOpenMusic(false);
 }

    return(
        <div>
        <Tooltip title="Pedir música">
          <IconButton onClick={()=>setOpenMusic(true)}>
            <Add />
          </IconButton>         
        </Tooltip>
        <MusicForm open={openMusic} setOpen={setOpenMusic} evento={evento} add={add}/>
        <Snackbar
              anchorOrigin={{ horizontal: "center", vertical: "center" }}
              open={openSnackbar}
              onClose={()=> setOpenSnackbar(false)}
              autoHideDuration={4000}
              ContentProps={{
                "aria-describedby": "message-id",
              }}
              message={<span id="message-id">Seu pedido foi encaminhado</span>}
            />
        </div>
    )
}

export default AddMusica;