import React from "react";
import { CardHeader, List, Card, ListItem, Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

// import AddMusica from "../musica/addMusica";
import MaisDetalhes from "../detalhes/maisDetalhes";
import AddNomeLista from "../nomeLista/addNomeLista";

function converte(letras){
   const code = Buffer.from(letras, "utf8");
   const color = code[0] + code[1] + code[2];
   return color;
 };

 const useStyles = {
     root: {
       width: "100%",
     },
   };

function Agenda({data}){
  const datasAgrupadas = data.
  return (
      <div>
        <Typography gutterBottom variant="h4" align="center" >
              Toothbrush
        </Typography>
        <List style={useStyles.root}>
          {data.length > 0 ? data.map(({ pedidos, nomeLista, ...rest}) => (
            <ListItem key={rest._id}>      
              <Card id={rest._id} style={{ width: "100%" }}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" style={{ backgroundColor: "#" + converte(rest.evento) }}>
                      {rest.evento[0].toUpperCase()}
                    </Avatar>
                  }   
                  action={
                    <div style={{ display: "flex" }}>   
                     {/*<AddMusica evento={rest} />*/}
                     <MaisDetalhes evento={rest} />
                     <AddNomeLista evento={rest} />      
                    </div>
                  }
                  title={rest.evento}
                  subheader={`Data: ${rest.data}`}
                />
              </Card>
            </ListItem>
          )): "" }
        </List>
        </div>
      );   
    }   
export default Agenda;