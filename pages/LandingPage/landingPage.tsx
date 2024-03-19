"use client";
import React, { useState } from 'react';
import styles from './landingPage.module.css';
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import Login from '@/components/Login/login';

export default function LandingPage() {
  return (
    <>
      <div className={styles.page}>
        <Header />
      </div>
      <div className={styles.container}>
        <Login />
        <button className={styles.guestbtn}>Continue as Guest</button>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}