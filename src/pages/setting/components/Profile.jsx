import styles from './Profile.module.scss'

const Profile = () => {
  const interestItem = [
    "운동", "개발", "관심사", "관심사", "관심사", "관심사", "관심사", "관심사"
  ]
  return (
    <fieldset className={styles.container}>
      <img className={styles.profileImg} src="/logo.png" alt="프로필 이미지"/>
      <button>프로필 이미지 변경</button>
      <form>
        <input className={styles.name} type="text" placeholder="이름"/>
        <textarea
          className={styles.introduction}
          placeholder="자기소개를 작성해주세요"
          maxLength="50"
          rows="4"
        />
        <ul className={styles.interestContainer}>
          {interestItem.map((item, index) => (
              <li key={`li_${index}`} className={styles.interest}>{item}</li>
          ))}
        </ul>
      </form>
    </fieldset>
  )
}

export default Profile;