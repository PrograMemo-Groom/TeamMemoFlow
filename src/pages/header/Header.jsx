// import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import styles from "./Header.module.scss";


// const Container = styled.div`
//   display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background-color: #EBEBEB;
//     width: 100%;
//     height: 60px;
//     position: absolute;
//     z-index: 10002;
// `
// const LeftBox = styled.div`
//     margin-left: 22px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 28px;
// `
// const RightBox = styled.div`
// `
// const Logo = styled.img`
//     width: 126px;
//     height: 38px;
// `

const Header = () => {
  return(
      <header className={styles.container}>
          <div className={styles.leftBox}>
              <FiMenu/>
              <img className={styles.logo} src="/logo.png" alt="로고"/>
          </div>
          <div className={styles.rightBox}>

          </div>
      </header>
  )
}

export default Header;
