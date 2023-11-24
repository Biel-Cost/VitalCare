"use client";

import { Button } from "@/components/Button/Button";
import styled from "./contatoEmergencia.module.css";
import { useRouter } from "next/navigation";

export default function ContatoDeEmergencia() {
  const router = useRouter();
  return (
    <div className={styled.contatoForm}>
      <div className={styled.contatoLabels}>
        <label>
          Nome do Contato de Emergência:
          <input type="text" placeholder="Digite o nome do contato" />
        </label>
        <label>
          Telefone do Contato de Emergência:
          <input type="text" placeholder="Digite o telefone do contato" />
        </label>
        <label>
          Relação com o Contato:
          <input type="text" placeholder="Digite a relação (ex: pai/mãe)" />
        </label>
      </div>
      <div className={styled.contatoBtn}>
        <Button
          onClick={() => {
            router.push("/pulseira");
          }}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}
