import React, { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Search from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  const router = useRouter();

  return (
    <div className="h-[5.5rem] bg-secondary">
      <div
        className={`h-[5.5rem] z-50 relative ${
          router.asPath === "/" ? "bg-transparent" : "bg-secondary"
        }`}
      >
        <div className="container mx-auto text-white flex justify-between items-center h-full">
          <Logo />
          <nav
            className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden  ${
              isMenuModal === true && "!grid place-content-center"
            }`}
          >
            <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
              <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                <Link href="/">Anasayfa</Link>
              </li>
              <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                <Link href="/menu">Menu</Link>
              </li>
              <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                <Link href="/about">Hakkımızda</Link>
              </li>
              <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                <Link href="/reservation">Rezarvasyon</Link>
              </li>
            </ul>
            {isMenuModal && (
              <button
                className="absolute  top-4 right-4 z-50"
                onClick={() => setIsMenuModal(false)}
              >
                <GiCancel size={25} className=" transition-all" />
              </button>
            )}
          </nav>
          <div className="flex gap-x-4 items-center">
            <Link href="/auth/login">
              <span>
                <FaUserCircle className="hover:text-primary transition-all cursor-pointer" />
              </span>
            </Link>

            <Link href="/cart">
              <span>
                <AiOutlineShoppingCart className="hover:text-primary transition-all cursor-pointer" />
              </span>
            </Link>
            <button onClick={() => setIsSearchModal(true)}>
              <FaSearch className="hover:text-primary transition-all cursor-pointer" />
            </button>
            <a href="#" className="md:inline-block hidden sm">
              <button className="btn-primary">Online Sipariş</button>
            </a>
            <button
              className="sm:hidden inline-block"
              onClick={() => setIsMenuModal(true)}
            >
              <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
            </button>
          </div>
        </div>
        {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
      </div>
    </div>
  );
};

export default Header;
