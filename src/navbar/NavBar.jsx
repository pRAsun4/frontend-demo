import { useState,useRef, useEffect } from "react";
import "../navbar/NavBar-style.css";
import SideBar from "./SideBar";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const sideRef = useRef(null);

  const handleDocumentClick = (event) =>{
    if(sideRef.current && !sideRef.current.contains(event.target)) {
      setOpen(false);
    }
  }
  useEffect(() =>{
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    }
  },[])

  const handleOpenAndClose = () => {
    setOpen(true);
  };
  return (
    <>
      <nav className="w-full h-auto border">
        <div className="w-full flex justify-between md:px-[2rem] px-[1.5rem] py-[1.25rem] relative">
          <a
            href="#"
            className="name-box px-[29px] py-[3px] bg-[#d4161e] h-auto items-center justify-center lg:flex hidden"
          >
            <h1 className="text-[1rem] sm:text-[2rem]">T-SOUL</h1>
          </a>
          <button
            type="button"
            onClick={handleOpenAndClose}
            className="flex justify-center items-center px-3 py-2 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="header-box lg:hidden flex justify-center items-center">
            <h1>T-SOUL</h1>
          </div>
          <div className="icon-box flex items-center justify-center lg:hidden">
            <a href="#" className="flex items-center justify-center px-2 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" className="flex items-center justify-center px-2 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 17C6.53043 17 7.03914 17.2107 7.41421 17.5858C7.78929 17.9609 8 18.4696 8 19C8 19.5304 7.78929 20.0391 7.41421 20.4142C7.03914 20.7893 6.53043 21 6 21C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19C4 18.4696 4.21071 17.9609 4.58579 17.5858C4.96086 17.2107 5.46957 17 6 17ZM6 17H17M6 17V3H4M17 17C17.5304 17 18.0391 17.2107 18.4142 17.5858C18.7893 17.9609 19 18.4696 19 19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21C16.4696 21 15.9609 20.7893 15.5858 20.4142C15.2107 20.0391 15 19.5304 15 19C15 18.4696 15.2107 17.9609 15.5858 17.5858C15.9609 17.2107 16.4696 17 17 17ZM6 5L20 6L19 13H6"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="justify-between hidden lg:flex">
            <a href="#" className="text-[red] px-4 py-3">
              MAN
            </a>
            <a href="#" className="text-[red] px-4 py-3">
              WOMEN
            </a>
          </div>
          <div className="justify-between hidden lg:flex">
            <a
              href="#"
              className="flex justify-center item-center  px-2 py-3"
            ></a>
            <a href="#" className="flex justify-center item-center  px-2 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.9179 8.174C21.4779 13.156 19.4189 19.83 13.5379 20.8C5.83591 22.487 0.697907 13.084 6.48391 7.571C6.79291 7.266 7.64491 6.476 7.99991 6.222C7.99991 6.75 8.26991 9.697 8.99991 9.389C11.9999 9.389 12.9999 5.167 12.5869 2C15.2869 3.411 17.5739 5.376 18.9179 8.174Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" className="flex justify-center item-center  px-2 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
              >
                <path
                  d="M14.4999 14C14.4999 15 15.9999 17 16.4999 17C17.9999 17 19.3329 15.333 19.9999 14C20.6669 12.333 20.4999 8.167 18.4999 2.5C17.0429 1.485 15.4999 1.16 13.9999 1L13.0279 2.923C11.6869 2.6915 10.316 2.6915 8.97495 2.923L7.99995 1C6.49995 1.16 4.95695 1.485 3.49995 2.5C1.49995 8.167 1.33295 12.333 1.99995 14C2.66695 15.333 3.99995 17 5.49995 17C5.99995 17 7.49995 15 7.49995 14M6 13.5C9.5 14.5 12.5 14.5 16 13.5M7 9C7 9.26522 7.10536 9.51957 7.29289 9.70711C7.48043 9.89464 7.73478 10 8 10C8.26522 10 8.51957 9.89464 8.70711 9.70711C8.89464 9.51957 9 9.26522 9 9C9 8.73478 8.89464 8.48043 8.70711 8.29289C8.51957 8.10536 8.26522 8 8 8C7.73478 8 7.48043 8.10536 7.29289 8.29289C7.10536 8.48043 7 8.73478 7 9ZM13 9C13 9.26522 13.1054 9.51957 13.2929 9.70711C13.4804 9.89464 13.7348 10 14 10C14.2652 10 14.5196 9.89464 14.7071 9.70711C14.8946 9.51957 15 9.26522 15 9C15 8.73478 14.8946 8.48043 14.7071 8.29289C14.5196 8.10536 14.2652 8 14 8C13.7348 8 13.4804 8.10536 13.2929 8.29289C13.1054 8.48043 13 8.73478 13 9Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex justify-center item-center  px-2 py-3"
            ></a>
          </div>
        </div>
      </nav>
      {open && (
        <SideBar ref={sideRef} />
      )}
    </>
  );
}
