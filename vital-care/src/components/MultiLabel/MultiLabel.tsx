"use client"
import styled from "./multiLabel.module.css"

interface MultiLabelProps {
    children : string
}

export const MultiLabel = ({children} : MultiLabelProps) => {
    return (
      <label className={styled.multiLabel}>
        {children}
        <select className={styled.multiLabelSelect}>
          <option value=""> Selecione uma opção </option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
        <input className={styled.multiLabelInput} type="text" placeholder="Quais?" />
      </label>
    );
}