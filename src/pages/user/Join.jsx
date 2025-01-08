import React from 'react';
import styles from "./Login.module.scss";
import {useNavigate} from "react-router-dom";
import ValidateLabel from "./components/ValidateLabel";
import {USER_INFO_TYPES} from "../../constants/ValidateTypes";

const Join = () => {
    const navigate = useNavigate();
    const [user, setUser] = React.useState({
        id: "",
        name: "",
        password: "",
        email: "",
    });
    const [password, setPassword] = React.useState({
        pw: "",
        pwCheck: "",
    });

    const [isChecked, setIsChecked] = React.useState(false);

    const handleChangeUserInfo = (value, tag="") => {
        setIsChecked(false);
        // object 안에 key를 check해서 해당 값인 경우에만 값 변경 넣어줌
        const validOption = Object.keys(user).includes(tag);
        if (validOption) {
            // console.log(validOption, value, tag);
            setUser((state) => ({
                ...state,
                [tag]: value
            }));
        }
    }
    const checkPassword = (value, tag="") => {
        setIsChecked(false);
        const validOption = Object.keys(password).includes(tag);
        if (validOption) {
            // console.log(validOption, value, tag);
            setPassword((state) => ({
                ...state,
                [tag]: value
            }));
        }
    }
    const validatePassword = () => {
        password.pw === password.pwCheck && handleChangeUserInfo(password.pw, "password");
    }


    const handleJoinUser = (e) => {
        e.preventDefault();
        validatePassword();
        setIsChecked(true);
        setTimeout(() => {
            console.log("user",user);
        }, 0);
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form className={styles.form} onSubmit={handleJoinUser}>
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="userId">아이디</label>
                        <input className={styles.input}
                               id="userId"
                               type="text"
                               placeholder="아이디"
                               value={user.id}
                               onChange={(e) => handleChangeUserInfo(e.target.value, "id")}
                        />
                    </div>
                    {isChecked && <ValidateLabel value={user.id} label={USER_INFO_TYPES.ID} isChecked={isChecked}/>}
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="userPw">비밀번호</label>
                        <input className={styles.input}
                               id="userPw"
                               type="password"
                               placeholder="비밀번호"
                               value={password.pw}
                               onChange={(e) => checkPassword(e.target.value, "pw")}
                        />
                    </div>
                    {isChecked && <ValidateLabel value={password.pw} label={USER_INFO_TYPES.PW} isChecked={isChecked}/>}
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="userPwCK">비밀번호 확인</label>
                        <input className={styles.input}
                               id="userPwCK"
                               type="password"
                               placeholder="비밀번호 확인"
                               value={password.pwCheck}
                               onChange={(e) => checkPassword(e.target.value, "pwCheck")}
                        />
                    </div>
                    {isChecked && <ValidateLabel value={password.pwCheck} pwCheck={password.pw} label={USER_INFO_TYPES.PWCK} isChecked={isChecked}/>}
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="userName">이름</label>
                        <input className={styles.input}
                               id="userName"
                               type="text"
                               placeholder="사용자 이름"
                               value={user.name}
                               onChange={(e) => handleChangeUserInfo(e.target.value, "name")}
                        />
                    </div>
                    {isChecked && <ValidateLabel value={user.name} label={USER_INFO_TYPES.NAME} isChecked={isChecked}/>}
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="userEmail">이메일</label>
                        <input className={styles.input}
                               id="userEmail"
                               type="email"
                               placeholder="등록 이메일"
                               value={user.email}
                               onChange={(e) => handleChangeUserInfo(e.target.value, "email")}
                        />
                    </div>
                    {isChecked && <ValidateLabel value={user.email} label={USER_INFO_TYPES.EMAIL} isChecked={isChecked}/>}
                    <button className={styles.loginButton} type="submit">회원가입</button>
                    <button className={styles.joinButton} type="button" onClick={() => navigate("/")}>돌아가기</button>
                </form>
            </div>
        </div>
    );
};

export default Join;
