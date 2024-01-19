import { Carousel } from "flowbite-react";
import NavBar from "../navbar/NavBar";
import PageFooter from "../footer/PageFooter";
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
