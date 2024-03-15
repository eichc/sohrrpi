"use client"
import React, { useState } from 'react';
import styles from './addcourse.module.css';

const AddCourseForm = () => {
    const [courseName, setCourseName] = useState("");
    const [professors, setProfessors] = useState("");
    const [officeHours, setOfficeHours] = useState("");
    const [courseType, setCourseType] = useState("");

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>Add Course</div>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <img src="" alt="" />
                    <input
                        type="text"
                        placeholder="Course Name"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <img src="" alt="" />
                    <input
                        type="text"
                        placeholder="Professors Teaching"
                        value={professors}
                        onChange={(e) => setProfessors(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <img src="" alt="" />
                    <input
                        type="text"
                        placeholder="Office Hours"
                        value={officeHours}
                        onChange={(e) => setOfficeHours(e.target.value)}
                    />
                </div>
                <div className={styles.input}>
                    <img src="" alt="" />
                    <input
                        type="text"
                        placeholder="Discipline (CSCI, ARCH, MATH...)"
                        value={courseType}
                        onChange={(e) => setCourseType(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.submitcontainer}>
                <div className={styles.submit}>Add Course</div> {/*HERE ADD AN ONCLICK EVENT USING JAVASCRIPT WHICH PERFORMS ACTION USING INFORMATION*/}
            </div>
        </div>
    );
};

export default AddCourseForm;
