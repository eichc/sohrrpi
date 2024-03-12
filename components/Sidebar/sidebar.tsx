"use client";
import styles from "./sidebar.module.css";
import SideBtn from "@/components/SidebarBtn/sidebarBtn";
import List from "@/components/SidebarList/sidebarList";
import AddCoursePopup from "@/components/AddCoursePopup/addCoursePopup";
import { useState } from "react";

export default function Sidebar() {
  let courses = ["CSCI 1100", "MATH 1010", "CSCI 1200"];
  let [popupActive, setPopupActive] = useState(false);

  return (
    <div className={styles.sidecontainer}>
      <div className={styles.sideflex}>
        <List items={courses} />
        <SideBtn symbol="+" text="Add New" isPopupActive={popupActive} onClick={() => setPopupActive(!popupActive)}/>
        {popupActive ? <AddCoursePopup /> : <></>}
      </div>
    </div>
  );
}