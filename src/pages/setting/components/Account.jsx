import styles from "./Account.module.scss"
import {useState} from "react";


const Account = () =>{
    return(
        <fieldset>
            <legend>계정</legend>
            <input className={styles.commonInput} placeholder="현재 이메일 주소"/>
            <input className={styles.commonInput} placeholder="현재 비밀번호"/>
            <form>
                <select className={styles.gender}>
                    <option value="" disabled>
                      성별
                    </option>
                    <option value="option1">남자</option>
                    <option value="option2">여자</option>
                </select>
                <select className={styles.birth}>
                    <option value="" disabled>
                       생년월일
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </form>
            <input className={styles.commonInput} placeholder="핸드폰 번호"/>
        </fieldset>
    )
}

export default Account;