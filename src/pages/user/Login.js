import React from 'react';
import styles from './Login.module.scss';

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>TeamMemoFlow</h1>
                <h2 className={styles.subtitle}>간단설명 작성해주세요</h2>
                <form className={styles.form}>
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="userId">아이디</label>
                        <input className={styles.input} id="userId" type="text" placeholder="아이디"/>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="userPw">비밀번호</label>
                        <input className={styles.input} id="userPw" type="password" placeholder="비밀번호"/>
                    </div>
                    <label className={styles.findPw}>비밀번호를 잊으셨나요?</label>
                    <button className={styles.loginButton}>로그인</button>
                    <button className={styles.joinButton}>회원가입</button>
                </form>
            </div>

        </div>
    )
}

export default Login;
