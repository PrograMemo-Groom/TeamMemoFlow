import styled from "styled-components";
import { FiHome, FiUsers,FiSearch,FiSettings    } from "react-icons/fi";
const Container = styled.div`
    width: 260px;
    height: 100vh;
    background-color: #D9D9D9;
    position: fixed;
    top: 0;
    z-index: 10001;
`
const MenuUl = styled.ul`
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    width: 100%;
`
const MenuLi = styled.li`
    height: 64px;
    cursor: pointer;
    display: flex;
    padding-left: 22px;
    align-items: center;
    &:hover{
        background-color: #9F9F9F;
        border-radius: 8px;
    }
`
const MenuIconContainer = styled.span`
    width: 24px;
    height: 24px;
    
    svg {
        width: 24px;
        height: 24px;
    }
`
const MenuText = styled.span`
    margin-left: 28px;
    font-size: 24px;
    font-weight: bold;
`

const MenuItem = [
  {icon: <FiHome/>, text: 'Home'},
  {icon: <FiUsers/>, text: 'Team'},
  {icon: <FiSearch/>, text: 'Explore'},
  {icon: <FiSettings/>, text: 'Setting'},
]

const SideBar = ()=>{
  return(
    <Container>
      <MenuUl>
        {MenuItem.map((item,index) => (
          <MenuLi key={index}>
            <MenuIconContainer>{item.icon}</MenuIconContainer>
            <MenuText>{item.text}</MenuText>
          </MenuLi>
        ))}
      </MenuUl>
    </Container>
  )
}

export default SideBar;