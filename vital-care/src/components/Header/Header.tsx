"use client";

import Image from "next/image";
import { Button } from "../Button/Button";
import Logo from "@/app/icon.svg";
import styled from './Header.module.css'

export const Header = () => {
  return (
    <header className={styled.headerContainer}>
      <div className={styled.headerTitle}>
        <Image src={Logo} alt="VitalCare logo" width={50}></Image>
        <h1>VitalCare</h1>
      </div>
      <div className={styled.headerButtons}>
        <Button onClick={() => {}}> Pulseira </Button>
        <Button onClick={() => {}}> Login </Button>
        <Button onClick={() => {}}> Cadastro </Button>
      </div>
    </header>
  );
};
