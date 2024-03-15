"use client";
import React, { useState } from 'react';
import styles from './landingPage.module.css';
import Login from '@/components/Login/login';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Login />
      <button className={styles.guestbtn}>Continue as Guest</button>
    </div>
  );
}