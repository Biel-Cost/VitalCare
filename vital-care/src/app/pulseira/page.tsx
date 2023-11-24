"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './ConfiguracoesPulseira.module.css'; // Lembre-se de criar este arquivo CSS

export default function ConfiguracoesPulseira() {
  const [codigoPulseira, setCodigoPulseira] = useState('');
  const [registroBatimento, setRegistroBatimento] = useState(false);
  const [registroPressao, setRegistroPressao] = useState(false);
  const [registroLocalizacao, setRegistroLocalizacao] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aqui você adiciona a lógica para processar/enviar os dados de configuração
    console.log({
      codigoPulseira,
      registroBatimento,
      registroPressao,
      registroLocalizacao
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    switch (name) {
      case 'codigoPulseira':
        setCodigoPulseira(value);
        break;
      case 'registroBatimento':
        setRegistroBatimento(checked);
        break;
      case 'registroPressao':
        setRegistroPressao(checked);
        break;
      case 'registroLocalizacao':
        setRegistroLocalizacao(checked);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <h2>Configurações da Pulseira</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label>
            Código da Pulseira:
            <input 
              type="text"
              name="codigoPulseira"
              value={codigoPulseira}
              onChange={handleInputChange}
              placeholder="Digite o código da pulseira"
            />
          </label>
        </div>
        <div className={styles.field}>
          <label>
            Ativar Registro de Batimento Cardíaco:
            <input 
              type="checkbox"
              name="registroBatimento"
              checked={registroBatimento}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className={styles.field}>
          <label>
            Ativar Registro de Pressão:
            <input 
              type="checkbox"
              name="registroPressao"
              checked={registroPressao}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className={styles.field}>
          <label>
            Ativar Registro de Localização:
            <input 
              type="checkbox"
              name="registroLocalizacao"
              checked={registroLocalizacao}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">Salvar Configurações</button>
        </div>
      </form>
    </div>
  );
}