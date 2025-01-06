import styled from "styled-components";
import { FiMenu } from "react-icons/fi";


const Container = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #EBEBEB;
    width: 100%;
    height: 60px;
    position: absolute;
    z-index: 10002;
`
const LeftBox = styled.div`
    margin-left: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
`
const RightBox = styled.div`
`
const Logo = styled.img`
    width: 126px;
    height: 38px;
`

const Header = () => {
  return(
    <Container>
      <LeftBox>
        <FiMenu/>
        <Logo src="/logo.png" alt="로고"/>
      </LeftBox>
      <RightBox>

      </RightBox>
    </Container>
  )
}

export default Header;