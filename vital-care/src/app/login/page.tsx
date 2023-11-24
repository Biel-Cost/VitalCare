"use client";

import { Button } from "@/components/Button/Button";
import styled from "./login.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className={styled.loginContainer}>
      <div className={styled.loginForm}>
        <label>
          E-mail:
          <input type="e-mail" placeholder="Digite seu e-mail" />
        </label>

        <label>
          Senha:
          <input type="password" placeholder="Digite sua senha" />
        </label>
      </div>
      <div>
        <Button
          onClick={() => {
            router.push("/pulseira");
          }}
        >
          Entrar
        </Button>
      </div>
    </div>
  );
}
