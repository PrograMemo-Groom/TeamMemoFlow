import styled from "styled-components";
import { FiMenu } from "react-icons/fi";


const Container = styled.div`
  display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #EBEBEB;
    width: 100%;
    height: 60px;
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

export default function Header(){
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