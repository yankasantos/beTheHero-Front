import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './style.css';
import logo from '../../assets/logo.svg';

export default function NewIncident(){
    return(
        <div className="newIncident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="logo Be The Hero, vermelho e preto"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft  size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>
                    <button className="button button-cancel">Cancelar</button>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}