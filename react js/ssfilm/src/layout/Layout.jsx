import { Outlet } from "react-router";
import Header from "../components/header/Header";

const Layout = () => (
    <>
    <Header/>
    <Outlet/>
    </>
)
export default Layout;