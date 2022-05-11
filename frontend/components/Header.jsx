import React from "react";
import { HomeIcon, LogoutIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { auth_types } from "../redux/types";
import jsCookie from "js-cookie";

function Header() {

  const dispatch = useDispatch()

  const logoutBtnHandler = () => {
    dispatch({
      type: auth_types.LOGOUT_USER
    })

    jsCookie.remove("user_data")
  }

  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="flex justify-between bg-blue-400 px-5 py-3 ">
        <div className="text-3xl font-bold cursor-pointer text-white">
          <h1>YUK</h1>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <a>
            <Link href="/">
            <HomeIcon className="navBtn" />
            </Link>
          </a>
          <a>
            <Link href="/auth/login">
            <LogoutIcon onClick={logoutBtnHandler} className="navBtn" />
            </Link>
          </a>
          <Link href="/profile">
          <img
            src="https://cdn0-production-images-kly.akamaized.net/YrZafZSTHAlDQvg2JBbBoaU-wyk=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1747946/original/002640400_1539937802-066235400_1508744892-800px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
            alt="ava"
            className="h-8 rounded-lg cursor-pointer hover:scale-125 transition-all duration-150 ease-out object-contain"
          />
          </Link>
            
        </div>
      </div>
    </div>
  );
}

export default Header;
