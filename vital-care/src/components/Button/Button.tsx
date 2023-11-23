"use client"

import styled from "@/components/Button/Button.module.css"

interface buttonProps {
    children: React.ReactNode
    onClick: React.ReactEventHandler
}

export const Button = ( { children, onClick } : buttonProps ) => {
  return(
    <button className={styled.button} onClick={onClick}> {children} </button>
  )
}