import React , {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';
import './style.css';
import logo from '../../assets/logo.svg';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers:{
                Authorization:ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    } , [ongId]);

   

    return(
        <div className="profile-container">
            <header>
                <img src={logo} alt="logo Be The Hero, vermelho e preto"/>
                <span>Bem vinda, {ongName} </span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#a8a8b3"/>
                </button>
            </header>
            
            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incidents => (
                    <li>
                        <strong>Caso: </strong>
                        <p>{incidents.title}</p>

                        <strong>DESCRIÇÃO: </strong>
                        <p>{incidents.description}e</p>

                        <strong>VALOR: </strong>
                        <p>R${incidents.value}</p>
                        <button>
                            <FiTrash2 size="20" color="#a8a8b3" />
                        </button>
                    </li>
                ))}
                
            </ul>
        </div>
    );
}