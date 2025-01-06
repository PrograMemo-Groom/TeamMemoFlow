import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import Header from "./pages/Header";
import SettingPage from "./pages/setting/SettingPage";
import SideBar from "./pages/SideBar";


function LayOut(){

  return (
    <>
      <Header/>
      <SideBar/>
      <Outlet/>
    </>
  )
}

function App() {
  return (
    <Routes>
        <Route path="/" element={<LayOut/>}>
          <Route path="/main" element={<SettingPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
