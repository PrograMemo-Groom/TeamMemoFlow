import styles from './Setting.module.scss'
import Profile from "./components/Profile";
import Social from "./components/Social";

const Setting=()=>{
  return(
    <div className={styles.container}>
      <Profile/>
        <Social/>
    </div>
  )
}

export default Setting