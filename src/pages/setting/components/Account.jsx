import styles from "./Account.module.scss"
import {FiArrowRight} from "react-icons/fi";


const Account = () =>{
    return(
        <fieldset>
            <legend>계정</legend>
            <p>현재 이메일 주소</p>
            <label className={styles.password}>
                <button>비밀번호 변경</button>
                <span><FiArrowRight/></span>
            </label>
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
            <p>나의 핸드폰 번호</p>
        </fieldset>
    )
}

export default Account;