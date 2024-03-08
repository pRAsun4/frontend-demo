import NavBar from "../featured/navbar/NavBar";
import PageFooter from "../featured/footer/PageFooter";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <NavBar />
      <Outlet />
      <PageFooter />
    </>
  );
}
