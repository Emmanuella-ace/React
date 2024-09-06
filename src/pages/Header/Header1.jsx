import "./Header1.css"
import logo from "../../Images/logo.png"
import {RxPerson} from "react-icons/rx"
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import {useState} from "react";
import { MdCancel } from "react-icons/md";

const Header = () => {

  const [Show, setShow] = useState(false);

  const Toggle = () => {
    setShow (!Show);
  }
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="logo">
          <img src={logo} alt="logo_image" />
        </div>

        <div className="navlinks">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="">Contact</a>
        </div>

        {Show ? (
          <div className="button" onClick={Toggle}>
            <MdCancel />
          </div>
        ) : (
          <div className="button" onClick={Toggle}>
            <AiOutlineMenu />
          </div>
        )}

        {Show ? (
          <div className="mobile-navlinks">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="">Contact</a>
        </div>
        ) : null}

        <div className="iconHolder">
          <div className="icons">
            <RxPerson />
          </div>
          <div className="icons">
            <IoMdSearch />
          </div>
          <div className="icons">
            <FaRegHeart />
          </div>
          <div className="icons">
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
