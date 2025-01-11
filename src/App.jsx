import styles from './App.module.scss';
import {Outlet, Route, Routes} from "react-router-dom";
import Header from "./pages/header/Header";
import Setting from "./pages/setting/Setting";
import SideBar from "./pages/sidebar/SideBar";
import Login from "./pages/user/Login";
import {useSelector} from "react-redux";
import FindAccount from "./pages/user/FindAccount";
import Join from "./pages/user/Join";

function LayOut() {

    return (
        <>
            <Header/>
            <SideBar/>
            <div className={styles.container}>
                <Outlet/>
            </div>
        </>
    );
}

const LayOutWithout = () => {
    return (
        <div className={styles.noLayoutContainer}>
            <Outlet/>
        </div>
    )
}

function App() {
    const {isLogin} = useSelector((state) => state.common);
    return (
        <Routes>
            {!isLogin ?
                (
                    <Route path="/" element={<LayOutWithout />}>
                        <Route index element={<Login/>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/findpwd" element={<FindAccount />} />
                        {/*<Route path="/findusr" element={<FindAccount />} />*/}
                    </Route>
                ) : (
                    <Route path="/" element={<LayOut/>}>
                        <Route path="/setting" element={<Setting/>}/>
                    </Route>
                )
            }
        </Routes>
    );
}

export default App;
