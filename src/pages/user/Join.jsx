import React, {useEffect} from 'react';
import styles from "./Login.module.scss";
import {useNavigate} from "react-router-dom";
import {USER_INFO_IDS, USER_INFO_TYPES} from "../../constants/ValidateTypes";
import FormInput from "./components/FormInput";
import {useSelector} from "react-redux";

const Join = () => {
    const navigate = useNavigate();
    const [user, setUser] = React.useState({
        id: "",
        name: "",
        password: "",
        passwordCheck: "",
        email: "",
    });

    const [isChecked, setIsChecked] = React.useState(false);
    const {isFormValid} = useSelector((state) => state.common);

    const handleChangeUserInfo = (value, tag="") => {
        setIsChecked(false);
        // object 안에 key를 check해서 해당 값인 경우에만 값 변경 넣어줌
        const validOption = Object.keys(user).includes(tag);
        if (validOption) {
            console.log(validOption, value, tag);
            setUser((state) => ({
                ...state,
                [tag]: value
            }));
        }
    }

    const handleJoinUser = (e) => {
        e.preventDefault();
        // validation 로직 확인
        setIsChecked(true);

        setTimeout(() => {
            console.log("user",user);
            // console.log("valid",isFormValid.info);
        }, 0);
    }

    useEffect(() => {
        console.log("valid", JSON.stringify(isFormValid.info));
    }, [isFormValid]);
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form className={styles.form} onSubmit={handleJoinUser}>
                    <FormInput id="userId"
                               label={USER_INFO_TYPES.ID}
                               value={user.id}
                               tag={USER_INFO_IDS.ID}
                               onChange={handleChangeUserInfo}
                               isChecked={isChecked}
                    />
                    <FormInput id="userPw"
                               label={USER_INFO_TYPES.PW}
                               type="password"
                               value={user.password}
                               tag={USER_INFO_IDS.PW}
                               onChange={handleChangeUserInfo}
                               isChecked={isChecked}
                    />
                    <FormInput id="userPwCK"
                               label={USER_INFO_TYPES.PWCK}
                               type="password"
                               value={user.passwordCheck}
                               tag={USER_INFO_IDS.PWCK}
                               pwCheck={user.password}
                               onChange={handleChangeUserInfo}
                               isChecked={isChecked}
                    />
                    <FormInput id="userName"
                               label={USER_INFO_TYPES.NAME}
                               value={user.name}
                               tag={USER_INFO_IDS.NAME}
                               onChange={handleChangeUserInfo}
                               isChecked={isChecked}
                    />
                    <FormInput id="userEmail"
                               label={USER_INFO_TYPES.EMAIL}
                               value={user.email}
                               tag={USER_INFO_IDS.EMAIL}
                               onChange={handleChangeUserInfo}
                               isChecked={isChecked}
                    />
                    <button className={styles.loginButton} type="submit">회원가입</button>
                    <button className={styles.joinButton} type="button" onClick={() => navigate("/")}>돌아가기</button>
                </form>
            </div>
        </div>
    );
};

export default Join;
