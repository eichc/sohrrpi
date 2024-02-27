import styles from "./sidebar.module.css";
import AddNew from "@/components/SidebarAddNew/sidebarAddNew";
import List from "@/components/SidebarList/sidebarList";

export default function Sidebar() {
  let courses = ["CSCI 1100", "MATH 1010", "CSCI 1200"];

  return (
    <div className={styles.sidecontainer}>
      <List items={courses} />
      <AddNew />
    </div>
  );
}