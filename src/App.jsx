import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import Header from "./pages/Header";
import SettingPage from "./pages/setting/SettingPage";
import SideBar from "./pages/SideBar";
import styled from "styled-components";

const OutletWrapper = styled.div`
  padding: 60px 0 0 260px ;
`


function LayOut(){

  return (
    <>
      <Header/>
      <SideBar/>
      <OutletWrapper>
        <Outlet/>
      </OutletWrapper>
    </>
  )
}

function App() {
  return (
    <Routes>
        <Route path="/" element={<LayOut/>}>
          <Route path="setting" element={<SettingPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
