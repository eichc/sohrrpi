import styles from "./page.module.css";
import LandingPage from "./LandingPage/page";
import {addDays, subDays } from "date-fns";
export default function Page() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}