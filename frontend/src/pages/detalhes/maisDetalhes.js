import React, { useState } from "react"
import { InfoOutlined } from "@material-ui/icons";
import {
    Dialog,
    IconButton, 
    Tooltip, 
    DialogTitle, 
    Typography, 
    DialogContent,
    DialogActions,
    Button,
    List, 
    ListItem,
    ListItemText,

} from "@material-ui/core"

function MaisDetalhes({evento}){
    const [open, setOpen] = useState(false)
    return(
        <div>
            <Tooltip title="Informações sobre o evento">
            <IconButton onClick={()=>setOpen(true)}>
                <InfoOutlined/>
            </IconButton>
            </Tooltip>
    
    <Dialog open={open} aria-labelledby="form-dialog-title">           
          <DialogTitle id="form-dialog-title">
          <Typography variant="h5" color="textSecondary" component="p">
           <div>
             Informações Gerais
           </div>
         </Typography>
              
       </DialogTitle>
 <DialogContent>
     <List>
     <ListItem >
            <ListItemText primary="Evento" secondary={evento.evento} />
          </ListItem> 
         <ListItem >
            <ListItemText primary="Local" secondary={evento.local} />
          </ListItem>  
          <ListItem >
            <ListItemText primary="Horários" secondary={
                <div>
                    <div>
                    {`Passagem: ${evento.horario}`}
                    </div> 
                    <div>
                    {`Início: ${evento.horario}`}
                    </div>    
                </div>    
            }   
            />
          </ListItem> 
          <ListItem>
            <ListItemText primary="Show time" secondary={evento.horario}/>
          </ListItem> 
          <ListItem >
            <ListItemText primary="Observações" secondary={evento.local}/>
          </ListItem> 
     </List>
  
 </DialogContent>    
        
       <DialogActions>
         <div id="camposForm">
           <Button color="secondary" onClick={()=>setOpen(false)}>
             Retornar
           </Button>       
         </div>
       </DialogActions>    
  
  </Dialog>
        </div>
    )
}

export default MaisDetalhes;