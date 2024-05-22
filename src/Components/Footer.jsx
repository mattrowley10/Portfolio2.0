import React from "react";

export default function Footer() {
  return (
    <div className="footer ">
      <ul className="footer-list flex justify-center space-x-10 w-full">
        <li className="">
          <a className="cursor-pointer">
            <img src="git-icon.png" className="footer-item" />
          </a>
        </li>
        <li>
          <a className="cursor-pointer">
            <img src="linked-in-icon.png" className="footer-item" />
          </a>
        </li>
        {/* <li>
          <a className="cursor-pointer">Contact</a>
        </li> */}
      </ul>
    </div>
  );
}
