"use client";
import React, { useState } from "react";
import styled from "./configPulseira.module.css"; // Lembre-se de criar este arquivo CSS
import { Button } from "@/components/Button/Button";

export default function ConfiguracoesPulseira() {
  const [codigoPulseira, setCodigoPulseira] = useState("");
  const [selectValue, setSelectValue] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setCodigoPulseira("");
  };

  const handleInputChange = (e: any) => {
    setCodigoPulseira(e.target.value);
  };


  const handleSelectChange = (e: any) => {
    setSelectValue(e.target.value);
  };

  return (
    <div className={styled.pulseiraConfigContainer}>
      <h2>Configurações da Pulseira</h2>
      <form className={styled.pulseiraConfigForm} onSubmit={handleSubmit}>
        <div className={styled.pulseiraConfigField}>
          <label>
            Código da Pulseira:
            <input
              type="text"
              value={codigoPulseira}
              onChange={handleInputChange}
              placeholder="Digite o código da pulseira"
            />
          </label>
        </div>
        <div className={styled.pulseiraConfigLabels}>
          <label>
            Ativar Registro de Batimento Cardíaco:
            <select onChange={handleSelectChange}>
              <option value={selectValue}>Selecione uma opção</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </label>
          <label>
            Ativar Registro de Pressão:
            <select onChange={handleSelectChange}>
              <option value={selectValue}>Selecione uma opção</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </label>
          <label>
            Ativar Registro de Localização:
            <select onChange={handleSelectChange}>
              <option value={selectValue}>Selecione uma opção</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </label>
        </div>
        <div className={styled.pulseiraConfigBtn}>
          <Button onClick={() => {}}>Salvar Configurações</Button>
        </div>
      </form>
    </div>
  );
}
