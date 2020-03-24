import React, { useState, useEffect } from "react";
import {AppBar, Toolbar, Typography } from "@material-ui/core"
// import { Menu } from "@material-ui/icons"
import { makeStyles } from '@material-ui/core/styles';
import AddDetalhe from "../detalhes/addDetalhes"

import Agenda from "../card/agenda";
import "./main.css";
// import logo from "../../img/corte2.png";
import api from "../../service/api";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Main(){
  const classes = useStyles();
  const [data, setData] = useState([]);

  async function getAgenda(){
    const rest = await api.get("/dataEventoAll");
    setData(rest.data);
  }

    function callback(status){
        if(status){
       getAgenda();
    }
  }

  useEffect(()=>{
     if(data.length<1){
       api.get("/dataEventoAll").then(({data})=>{
           if(data) {
             setData(data)
           }
       });
     }
  })

    return (
      <div style={{ position: "relative" }}>
       <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
             <Typography variant="h6" className={classes.title}>
               Agenda
              </Typography>
              <Typography variant="h6" className={classes.title}>
               RPZ
              </Typography>
              <AddDetalhe color="inherit" callback={callback}/>       
           </Toolbar>
         </AppBar>
     </div>

        {/* <header id="divDeCima">
          <div>
            <img id="idImagem" alt="" src={logo} />
            <h1>Agenda</h1>
          </div>
        </header> */ }

        <div id="container">
          <div id="divDeBaixo">
          <Agenda data={ data } />
          </div>
        </div>
      </div>
    );
}

export default Main;
