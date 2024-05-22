import React from "react";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";

export default function TopNav() {
  const [dropDown, setDropDown] = useState(false);
  const nav = useNavigate();
  const dropDownRef = useRef(null);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (dropDownRef.current && dropDownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [dropDownRef]);
  return (
    <div className="topNav flex">
      <p className="text-3xl cursor-pointer" onClick={() => nav("/")}>
        Matthew William Rowley
      </p>
      <div className="absolute right-0 mr-4 inline-flex">
        <button className="text-4xl" onClick={toggleDropDown}>
          <IoMdMenu />
        </button>
      </div>
      {dropDown && (
        <div
          ref={dropDownRef}
          className="dropDown px-4 py-2 absolute right-0 mt-8 rounded-lg mr-4 flex-column transition ease-in-out duration-500 cursor-pointer"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <ul>
            <li className="mb-2">
              <HashLink to="#home" smooth>
                Home
              </HashLink>
            </li>
            <li className="mb-2">
              <HashLink to="#about" smooth>
                About
              </HashLink>
            </li>
            <li className="mb-2">
              <HashLink to="#projects" smooth>
                Projects
              </HashLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
