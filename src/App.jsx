import styles from './App.module.scss';
import {Outlet, Route, Routes} from "react-router-dom";
import Header from "./pages/header/Header";
import SettingPage from "./pages/setting/SettingPage";
import SideBar from "./pages/sidebar/SideBar";
import Login from "./pages/user/Login";

function LayOut(){

  return (
    <>
      <Header/>
      <SideBar/>
      <div className={styles.container} >
        <Outlet/>
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
        <Route path="/" element={<LayOut/>}>
          <Route index element={<Login/>}/>
          <Route path="/setting" element={<SettingPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
