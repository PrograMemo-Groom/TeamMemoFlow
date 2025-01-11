import React from 'react';
import styles from "./Login.module.scss";

const FindAccount = () => {
    // 일단 Login.moduel.css 파일 참조해서 대충 ui 그림
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>비밀번호 찾기 페이지</h1>
            </div>
        </div>
    );
};

export default FindAccount;
