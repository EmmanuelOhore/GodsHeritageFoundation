import "../../styles/navBar.css";
import logo from "../../assets/LOGO/logo2.png";
import { navData } from "../../constant";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); //state that handls the nav bar drop down
  let menuRef = useRef(null); //ref to the meun bar
  const buttonRef = useRef(null); // Reference to the hamburger button

  // funtion that handles the drop down toggle
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  // effect hook that hsndles the close on click out side the dropdown
  useEffect(() => {
    let handler = (e) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);
  console.log(isOpen);
  return (
    <nav className="realtive z-40   ">
      <Link to="/">
        <header className="logo_container ">
          <div className="img-container !w-[3rem]  phoneL:!w-[2rem] phoneP:!w-[3rem] phoneP:!h-[3rem] ">
            <img
              src={logo}
              alt="Placeholder Image"
              className="object-cover w-full h-full phoneP:object-contain"
            />
          </div>
          <h1 className="!text-[15px] phoneL:!text-[13px] phoneP:hidden">
            Gods Heritage Foundation
          </h1>
        </header>
      </Link>

      <section className="nav_links_conatiner">
        <ul className="nav_links">
          {navData.map((data, index) => {
            return (
              <div key={index} className=" w-[20%] flex items-center gap-3">
                <li className=" text-[15px] leading-[27px] font-medium  laptop:text-[14px] tablet:text-[12px] phoneL:text-[13px] phoneP:text-[12px]">
                  <NavLink to={`${data.linkto}`}>{data.name}</NavLink>
                </li>
              </div>
            );
          })}
        </ul>
      </section>
      <section className="nav_button">
        <Link to="/donate">
          {" "}
          <button>Donate</button>
        </Link>
        <div className="search_container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" />
        </div>
      </section>
      {/* hamburger meanu */}
      <i
        ref={buttonRef}
        onClick={handleToggle}
        className={`fa-solid ${
          isOpen ? "fa-x " : "fa-bars"
        } bars !text-[#2a152f]`}
      ></i>
      {isOpen && (
        <div
          ref={menuRef}
          className="hidden z-10  absolute  translate-x-[-50%] left-[50%] top-[4.5rem]  w-full  tablet:!block phoneP:top-[4.5rem] bg-white border-b-2 shadow-md"
        >
          <ul className=" flex flex-col justify-center items-center font-semibold  gap-2 phoneP:gap-0 ">
            {navData.map((data, index) => {
              return (
                <div
                  key={index}
                  onClick={handleToggle}
                  className=" w-[20%]  flex items-center gap-3 phoneL:gap-2"
                >
                  <i
                    className={` ${data.icon} text-[14px] phoneL:!text-[12px] phoneP:!text-[11px]`}
                  ></i>
                  <li className=" text-[15px] leading-[27px] font-medium  laptop:text-[14px] tablet:text-[12px] phoneL:text-[12px] phoneP:text-[11px]">
                    <NavLink to={`${data.linkto}`}>{data.name}</NavLink>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
