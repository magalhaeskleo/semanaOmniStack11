import React, { useEffect, useState } from "react"
import LogoImg from "../../assets/logo.svg";
import { Link , useHistory } from "react-router-dom";
import { PowerSettingsNew, Delete} from '@material-ui/icons/';
import { red } from "@material-ui/core/colors"
import  api from "../../services/api";


import "./style.css"

export default function Profiler(){
    const [incidents, setIncidents]= useState([]);
    const history = useHistory();

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    
  function logOut(){
    localStorage.clear();
    history.push('/');
  } 


  async  function deleteIncident(id){
        try {
            api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId, 
                }
            })
            setIncidents(incidents.filter(el=> el.id !== id ));

        } catch (error) {
            console.log("Não foi possivel deletar")
        }
    }


    useEffect( ()=> {
        api.get('profile', {
            headers:{
                Authorization: ongId, 
            }
        }).then(response=> {
               setIncidents(response.data) 
        })
    }, [ongId] )

        console.log(incidents);
   
        return(
    <div className="profile-container">
        <header>
            <img src={LogoImg} alt="Be The Hero"/>
            <span>Bem vinda, {ongName}</span>

            <Link className="button" to="/incidents/new" >
                Cadastrar novo caso
            </Link>

            <button type="button" onClick={logOut}> 
                <PowerSettingsNew style={{color: red[600]}}/>
            </button>
        </header>
        <h1>Casos cadastrados</h1>
        <ul>
            {incidents.map(incident =>(
            <li key={incident.id}>
                <strong>CASO:</strong>
                <p>{incident.title}</p>

                <strong>DESCRIÇÂO:</strong>
                <p>{incident.description}</p>

                <strong>Valor:</strong>
                <p>{
                    Intl.NumberFormat('pt-BR', {style: 'currency' , currency: 'BRL' })
                        .format(incident.value)
                    }
                </p>

                <button type="button" onClick={()=> deleteIncident(incident.id)}>
                    <Delete style={{color: red[600]}}/>
                </button>

            </li>

            ))}
        </ul>

    </div>
    )
}