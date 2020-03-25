import React, {useState} from "react";
import { Link , useHistory } from "react-router-dom";
import { KeyboardBackspace } from '@material-ui/icons/';
import { red } from "@material-ui/core/colors"
import LogoImg from "../../assets/logo.svg";
import api from "../../services/api"


import "./style.css";

export default function Register(){
    const history = useHistory();
    
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [whatsapp, setWhatsapp]= useState("");
    const [city, setCity]= useState("");
    const [uf, setUf]= useState("");
    
    async function handleRegister(e){
        e.preventDefault();
         const data = {name, email, whatsapp, city, uf};
         try {
             const resp = await api.post('ongs', data);             
             alert(`Seu ID de acesso ${resp.data.id}`)
             history.push("/");
             
         } catch (error) {
             alert(`Erro no cadastro tente novamente ${error}`)
         }

    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, e ajude pessoas a encontrarem os casos de sua ong</p>
                    <Link className="back-link" to="/">
                        <KeyboardBackspace style={{color: red[600] }}/>
                         Não tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" 
                            value={name} 
                            onChange={e=> setName(e.target.value) }/>

                    <input type="email" 
                            placeholder="E-mail"
                            value={email}   
                            onChange={e=> setEmail(e.target.value)}/>
                    
                    <input  placeholder="WhatsApp"
                            value={whatsapp}   
                            onChange={e=> setWhatsapp(e.target.value)}/>

                     <div className="input-group">
                        <input placeholder="cidade"
                            value={city}   
                            onChange={e=> setCity(e.target.value)}/>

                        <input placeholder="UF" 
                            style={{ width: 80 }}
                            value={uf}   
                            onChange={e=> setUf(e.target.value)}/>
                     </div>   
                    <button className="button"type="submit" >Cadastrar </button>    

                </form>
            </div>
        </div>
    )
}