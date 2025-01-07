import styles from './Setting.module.scss'
import Profile from "./components/Profile";
import Social from "./components/Social";
import Account from "./components/Account";

const Setting = () => {
    const bottomItem =[
        "개인정보 보호",
        "화면",
        "공지사항",
        "정보",
        "문의하기",
        "버전 1.0.0",
        "로그아웃",
        "계정 삭제하기"
    ]
    return (
        <div className={styles.container}>
            <Profile/>
            <Social/>
            <Account/>
            <ul className={styles.bottomItem}>
                {bottomItem.map((item, index)=>(
                    <li id={`li_${index}`}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Setting