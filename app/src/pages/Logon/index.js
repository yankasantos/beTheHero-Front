import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi';
import './style.css';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    
    const [id, setId] = useState('');
    const history = useHistory('');
    
    async function handleLogin(event){
        event.preventDefault();

        try{
            const response = await api.post('sessions', { id });
            // alert(`Seja bem-vindo ${response.data.name}!`
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');            

        }catch(error){     
            alert(`o id não foi encontrado`);
        }

    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Logo Be The Hero, vermelha e preto"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Seu ID"
                        value={id}
                        onChange={event =>setId(event.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className="back-link" to="/register">
                        <FiLogIn  size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes, pessoas juntas com os punhos levantados ao céu"/>

        </div>   
    );
}