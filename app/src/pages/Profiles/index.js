import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import './style.css';
import logo from '../../assets/logo.svg';

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logo} alt="logo Be The Hero, vermelho e preto"/>
                <span>Bem vinda, APAD </span>
                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#a8a8b3"/>
                </button>
            </header>
            
            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>Caso: </strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO: </strong>
                    <p>Descrição teste</p>

                    <strong>VALOR: </strong>
                    <p>R$240,00</p>
                    <button>
                        <FiTrash2 size="20" color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso: </strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO: </strong>
                    <p>Descrição teste</p>

                    <strong>VALOR: </strong>
                    <p>R$240,00</p>
                    <button>
                        <FiTrash2 size="20" color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso: </strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO: </strong>
                    <p>Descrição teste</p>

                    <strong>VALOR: </strong>
                    <p>R$240,00</p>
                    <button type="button">
                        <FiTrash2 size="20" color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso: </strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO: </strong>
                    <p>Descrição teste</p>

                    <strong>VALOR: </strong>
                    <p>R$240,00</p>
                    <button>
                        <FiTrash2 size="20" color="#a8a8b3" />
                    </button>
                </li>
                
            </ul>
        </div>
    );
}