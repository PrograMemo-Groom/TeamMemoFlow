import React from 'react';
import styles from './Login.module.scss';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserLogin} from "../../store/slice/UserSlice";

const Login = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = React.useState("");
    const [userPw, setUserPw] = React.useState("");
    const dispatch = useDispatch();

    const handleChangeUserId = (id) => {
        setUserId(id);
    }
    const handleChangeUserPw = (pw) => {
        setUserPw(pw);
    }
    const handleLoginCheck = (e) => {
        e.preventDefault();
        dispatch(setUserLogin({id:userId,password:userPw}));
        // console.log("userId", userId);
        // console.log("userPw", userPw);
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>TeamMemoFlow</h1>
                <h2 className={styles.subtitle}>간단설명 작성해주세요</h2>
                <form className={styles.form} onSubmit={handleLoginCheck}>
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="userId">아이디</label>
                        <input className={styles.input}
                               id="userId"
                               type="text"
                               placeholder="아이디"
                               value={userId}
                               onChange={(e) => handleChangeUserId(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="userPw">비밀번호</label>
                        <input className={styles.input}
                               id="userPw"
                               type="password"
                               placeholder="비밀번호"
                               value={userPw}
                               onChange={(e) => handleChangeUserPw(e.target.value)}
                        />
                    </div>
                    <label className={styles.findPw} onClick={() => navigate("/findpwd")}>비밀번호를 잊으셨나요?</label>
                    <button className={styles.loginButton} type="submit">로그인</button>
                    <button className={styles.joinButton} type="button" onClick={() => navigate("/join")}>회원가입</button>
                </form>
            </div>

        </div>
    )
}

export default Login;
