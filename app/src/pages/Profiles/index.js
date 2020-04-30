import React , {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';
import './style.css';
import logo from '../../assets/logo.svg';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    
    const history = useHistory('');

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    // useEffect(() => {request, response}, []);

    useEffect(() => {
        api.get('profile', {
            headers:{
                Authorization:ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    } , [ongId]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization:ongId,
                }
            });

            setIncidents(incidents.filter(incidents => incidents.id != id));
        }catch(error){
            alert('Erro ao deletar, tente novamente');
        }
    };

    async function handleLogout(ongId){
        localStorage.clear();
        history.push('/');
    }
   

    return(
        <div className="profile-container">
            <header>
                <img src={logo} alt="logo Be The Hero, vermelho e preto"/>
                <span>Bem vinda, {ongName} </span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
            
            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incidents => (
                    <li key={incidents.id}>
                        <strong>Caso: </strong>
                        <p>{incidents.title}</p>

                        <strong>DESCRIÇÃO: </strong>
                        <p>{incidents.description}e</p>

                        <strong>VALOR: </strong>
                        <p>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(incidents.value)}</p>
                        <button onClick={() => handleDeleteIncident(incidents.id)}>
                            <FiTrash2 size="20" color="#a8a8b3" />
                        </button>
                    </li>
                ))}
                
            </ul>
        </div>
    );
}