"use client";

import Image from "next/image";
import { Button } from "../Button/Button";
import Logo from "@/app/icon.svg";
import styled from './Header.module.css'
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  return (
    <header className={styled.headerContainer}>
      <div className={styled.headerTitle} onClick={() => {router.push("/")}}>
        <Image src={Logo} alt="VitalCare logo" width={50}></Image>
        <h1>VitalCare</h1>
      </div>
      <div className={styled.headerButtons}>
        <Button onClick={() => {router.push("/pulseira")}}> Pulseira </Button>
        <Button onClick={() => {router.push("/cadastro")}}> Cadastro </Button>
        <Button onClick={() => {router.push("/login")}}> Login </Button>
      </div>
    </header>
  );
};
