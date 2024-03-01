import styles from './login.module.css';


const LoginSignup = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>Sign Up</div>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.inputs}>
            <div className={styles.input}>
                <img src="" alt="" />
                <input type = "text" placeholder='Name'/>
            </div>
            <div className={styles.input}>
                <img src="" alt="" />
                <input type = "email" placeholder='Email' />
            </div>
            <div className={styles.input}>
                <img src="" alt="" />
                <input type = "password" placeholder='Password'/>
            </div>
            </div>
            <div className={styles.forgotpass}>Lost Password? <span>Click Here!</span></div>
            <div className={styles.submitcontainer}>
                <div className={styles.submit}>Sign Up</div>   
                <div className={styles.submit}>Login</div>
            </div>
            </div>
    )
}

export default LoginSignup