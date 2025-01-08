import React from 'react';
import styles from "./Login.module.scss";

const Join = () => {
    const [user, setUser] = React.useState({
        id: "",
        password: "",
        name: "",
        email: "",
    });

    const handleChangeUserInfo = (value, tag="") => {
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
                </form>
            </div>
        </div>
    );
};

export default Join;
