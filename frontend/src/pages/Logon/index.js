import React, {useState} from "react";
import { Link, useHistory} from "react-router-dom";
import { ExitToApp } from '@material-ui/icons/';
import { red } from "@material-ui/core/colors"
import api from "../../services/api"


import './styles.css';

import HeroesImg from "../../assets/heroes.png";
import LogoImg from "../../assets/logo.svg";

function Logon(){
const [id, setId] = useState();
const history = useHistory();

async function handle(e){
    e.preventDefault();
     try {
         const resp = await api.post("sessions", { id });
         localStorage.setItem('ongId', id);
         localStorage.setItem('ongName', resp.data.name);
         
         history.push("profile")
         console.log(resp.data.name);
         
        } catch (error) {
            console.log(`Erro no logon ${error}`);
     }
}


    return(
    <div className="logon-container">
        <section className="form">
            <img src={LogoImg} alt="Be The Hero"/>
            
            <form onSubmit={handle} >
                <h1>Faça seu logon</h1>
                <input placeholder="Sua ID" value={id} onChange={e=> setId(e.target.value)}/>
                <button className="button" type="submit">Entrar</button>
                <Link className="back-link" to="/register">
                    <ExitToApp style={{color: red[600] }}/>
                    Não tenho cadastro
                </Link>
            </form>
        
        </section>
        <img src={HeroesImg} alt="Heroes"/>
    </div>
    )
}
export default Logon;