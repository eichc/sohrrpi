//"use client";
import React, { useState } from 'react';
import styles from './landingPage.module.css';
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Login from '../components/Login/login';
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <div className={styles.page}>
        <Header />
      </div>
      <div className={styles.container}>
        <Login />
        <div className={styles.guestbtn}>
          <Link href="../AllCourses" className={styles.btnlink}>
            Continue As Guest
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}