"use client";

import { Button } from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import styled from "./infoSaude.module.css";
import { MultiLabel } from "@/components/MultiLabel/MultiLabel";

export default function SaudeInfo() {
  const router = useRouter();

  return (
    <div className={styled.infoSaudeContainer}>
      <h1>Informações de Saúde</h1>
      <div className={styled.infoSaudeForm}>
        <div className={styled.infoSaudeLabels}>
          <MultiLabel> Tem alergias? </MultiLabel>
          <MultiLabel> Toma algum medicamento controlado? </MultiLabel>
        </div>
        <div className={styled.infoSaudeLabels}>
          <MultiLabel> Já fez cirurgia? </MultiLabel>
          <MultiLabel> Tem alguma condição médica pré-existente?</MultiLabel>
        </div>
      </div>
      <div>
        <Button onClick={() => {router.push('/cadastro/contato-emergencia')}}>Próximo</Button>
      </div>
    </div>
  );
}
