"use client";

import Image from "next/image";
import Doctor from "@/assets/doctor.png";
import styled from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styled.homeContent}>
        <div className={styled.homeInfoContent}>
          <h1> Pulseira VitalCare </h1>
          <p>
            A pulseira funciona como monitoramento cardíaco e físico para o
            paciente, avisando-nos sobre qualquer alteração para tomar as
            medidas cabíveis.
          </p>
        </div>
        <div className={styled.homeImage}>
          <Image src={Doctor} alt="Doctor Image" />
        </div>
      </div>
    </>
  );
}
