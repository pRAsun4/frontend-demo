// import RedLogo from '../assets/redLogo.png'
export default function NavBar() {
  return (
    <>
      <nav className="w-full h-auto border">
        <div className="w-full flex justify-between">
          <a
            href="#"
            className="px-[29px] py-[3px] bg-[#d4161e] h-[45px] w-[10rem]"
          >
            {/* <img src="../assets/redLogo.png" alt="" /> */}
          </a>
          <div className="flex justify-between">
            <a href="#" className="text-[red] px-4 py-3">
              MAN
            </a>
            <a href="#" className="text-[red] px-4 py-3">
              WOMEN
            </a>
          </div>
          <div className="flex justify-between">
            <a href="#" className="text-[red] px-2 py-3">
              icon
            </a>
            <a href="#" className="text-[red] px-2 py-3">
              icon
            </a>
            <a href="#" className="text-[red] px-2 py-3">
              icon
            </a>
            <a href="#" className="text-[red] px-2 py-3">
              icon
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
