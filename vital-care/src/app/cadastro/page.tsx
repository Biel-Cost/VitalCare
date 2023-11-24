"use client";

import { Button } from "@/components/Button/Button";
import styled from "./cadastro.module.css";
import { useRouter } from "next/navigation";
export default function Cadastro() {
    const router = useRouter()

  return (
    <div className={styled.cadastroContainer}>
      <div className={styled.cadastroForm}>
        <div className={styled.cadastroLabels}>
          <label>
            Nome:
            <input type="text" placeholder="Digite seu nome" />
          </label>
          <label>
            Telefone:
            <input type="text" placeholder="Digite seu telefone" />
          </label>
          <label>
            Data de nascimento:
            <input type="date" />
          </label>
          <label>
            Gênero:
            <select>
              <option value=""> Selecione uma opção: </option>
              <option value="masculino"> Masculino </option>
              <option value="feminino"> Feminino </option>
              <option value="outro"> Outro </option>
            </select>
          </label>
          <label>
            E-mail:
            <input type="e-mail" placeholder="Digite seu e-mail" />
          </label>
          <label>
            Senha:
            <input type="password" placeholder="Digite sua senha" />
          </label>
        </div>
        <div className={styled.cadastroLabels}>
          <label>
            Rua:
            <input type="text" placeholder="Digite o nome da rua" />
          </label>
          <label>
            Número:
            <input type="text" placeholder="Digite o número" />
          </label>
          <label>
            Complemento:
            <input
              type="text"
              placeholder="Digite o complemento (ex: apto, bloco)"
            />
          </label>
          <label>
            Cidade:
            <input type="text" placeholder="Digite a cidade" />
          </label>
          <label>
            Estado:
            <input type="text" placeholder="Digite o estado" />
          </label>
          <label>
            CEP:
            <input type="text" placeholder="Digite o CEP" />
          </label>
        </div>
      </div>
      <div>
        <Button
          onClick={() => {
            router.push("/cadastro/informacoes-saude");
          }}
        >
          {" "}
          Próximo{" "}
        </Button>
      </div>
    </div>
  );
}
