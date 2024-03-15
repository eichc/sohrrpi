"use client";
import styles from "./sidebarBtn.module.css";
import { useState } from "react";

interface Props {
  symbol: string;
  text: string;
  isPopupActive: boolean;
  onClick: () => void;
}



export default function SidebarAddNew({symbol, text, isPopupActive, onClick}: Props) {
  
  return (
    <button className={styles.sidebarbtn} onClick={onClick}>
      <span className={styles.btnsymbol}>
        {symbol}
      </span>
      <span className={styles.btntext}>
        {text}
      </span>
    </button>
  );
}