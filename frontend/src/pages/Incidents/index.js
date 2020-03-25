import React, { useState }from "react";
import { Link, useHistory } from "react-router-dom";
import { KeyboardBackspace } from '@material-ui/icons/';
import { red } from "@material-ui/core/colors"
import LogoImg from "../../assets/logo.svg";
import api from "../../services/api";


import "./style.css";

export default function Incidents(){
    
    const [title, setTitle]= useState();
    const [description, setDescription]= useState();
    const [value, setValue]= useState();
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    function cadastrar(e){
        e.preventDefault();

        const data={
            title,
            description,
            value
        }
        try {
            api.post('incidents', data, {
                headers :{
                    Authorization : ongId,
                }
            } )
            history.push("/profile");

        } catch (error) {
            alert("Erro ao cadastrar caso");
        } 
    }

    return(
        <div className="incidents-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero"/>
                    <h1>Cadastro novo Caso</h1>
                    <p>Descreve o caso detalhadamente para encontrar um herói para resolver isso </p>
                    <Link className="back-link" to="/profile">
                        <KeyboardBackspace style={{color: red[600] }}/>
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={cadastrar}>
                    <input 
                    placeholder="Titulo do caso"
                    value={title}
                    onChange={e=> setTitle(e.target.value)}
                    />
                    <textarea 
                    placeholder="Descrição"
                    value={description}
                    onChange={e=> setDescription(e.target.value)}
                    />
                    <input  
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e=> setValue(e.target.value)}
                    />
  
                    <button className="button"type="submit" >Cadastrar </button>    

                </form>
            </div>
        </div>
    )
}