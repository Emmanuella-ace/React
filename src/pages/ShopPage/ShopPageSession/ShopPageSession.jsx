// import React from 'react'
import "./ShopPageSession.css";
import syltherine from "../../../Images/Syltherine.png";
import leviosa from "../../../Images/Leviosa.png";
import { IoMdShare } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import lolito from "../../../Images/Lolito.png";
import respira from "../../../Images/Respira.png";


const ShopPageSession = () => {
  return (
    <div>
      <div>
        <div className="product1">
          <div className="productPic1">
            <img src={syltherine} alt="" />
            <p>-30%</p>
            <h2>Syltherine</h2>
            <h4>Stylist cafe chair</h4>
            <div className="productPrices">
              <h3>Rp 2.500.000 </h3>
              <h5>Rp 3.500.000</h5>
            </div>
          </div>
          <div className="productPic2">
            <img src={leviosa} alt="" />
            <h2>Leviosa</h2>
            <h4>Stylist cafe chair</h4>
            <h3>Rp 2.500.000 </h3>
            <div className="more">
              <button>Add to cart</button>
              <div className="moreButtons">
                <div>
                  <IoMdShare />
                  Share
                </div>
                <div>
                  <MdOutlineCompareArrows />
                  Compare
                </div>
                <div>
                  <FaRegHeart />
                  Like
                </div>
              </div>
            </div>
          </div>
          <div className="productPic3">
            <img src={lolito} alt="" />
            <p>-50%</p>
            <h2>lolito</h2>
            <h4>Luxury big sofa</h4>
            <div className="productPrices">
              <h3>Rp 7.000.000 </h3>
              <h5>Rp 14.000.000</h5>
            </div>
          </div>
          <div className="productPic4">
            <img src={respira} alt="" />
            <p>New</p>
            <h2>Respira</h2>
            <h4> Outdoor bar table and stool </h4>
            <h3>Rp 2.500.000 </h3>
          </div>
        </div>
        <div className="product2">
          <div className="productPic5">
            <img src={syltherine} alt="" />
            <p>-30%</p>
            <h2>Syltherine</h2>
            <h4>Stylist cafe chair</h4>
            <div className="productPrices">
              <h3>Rp 2.500.000 </h3>
              <h5>Rp 3.500.000</h5>
            </div>
          </div>
          <div className="productPic6">
            <img src={leviosa} alt="" />
            <h2>Leviosa</h2>
            <h4>Stylist cafe chair</h4>
            <h3>Rp 2.500.000 </h3>
          </div>
          <div className="productPic7">
            <img src={lolito} alt="" />
            <p>-50%</p>
            <h2>lolito</h2>
            <h4>Luxury big sofa</h4>
            <div className="productPrices">
              <h3>Rp 7.000.000 </h3>
              <h5>Rp 14.000.000</h5>
            </div>
          </div>
          <div className="productPic8">
            <img src={respira} alt="" />
            <p>New</p>
            <h2>Respira</h2>
            <h4> Outdoor bar table and stool </h4>
            <h3>Rp 2.500.000 </h3>
          </div>
        </div>
        <div className="product3">
          <div className="productPic9">
            <img src={syltherine} alt="" />
            <p>-30%</p>
            <h2>Syltherine</h2>
            <h4>Stylist cafe chair</h4>
            <div className="productPrices">
              <h3>Rp 2.500.000 </h3>
              <h5>Rp 3.500.000</h5>
            </div>
          </div>
          <div className="productPic10">
            <img src={leviosa} alt="" />
            <h2>Leviosa</h2>
            <h4>Stylist cafe chair</h4>
            <h3>Rp 2.500.000 </h3>
          </div>
          <div className="productPic11">
            <img src={lolito} alt="" />
            <p>-50%</p>
            <h2>lolito</h2>
            <h4>Luxury big sofa</h4>
            <div className="productPrices">
              <h3>Rp 7.000.000 </h3>
              <h5>Rp 14.000.000</h5>
            </div>
          </div>
          <div className="productPic12">
            <img src={respira} alt="" />
            <p>New</p>
            <h2>Respira</h2>
            <h4> Outdoor bar table and stool </h4>
            <h3>Rp 2.500.000 </h3>
          </div>
        </div>
        <div className="product4">
          <div className="productPic13">
            <img src={syltherine} alt="" />
            <p>-30%</p>
            <h2>Syltherine</h2>
            <h4>Stylist cafe chair</h4>
            <div className="productPrices">
              <h3>Rp 2.500.000 </h3>
              <h5>Rp 3.500.000</h5>
            </div>
          </div>
          <div className="productPic14">
            <img src={leviosa} alt="" />
            <h2>Leviosa</h2>
            <h4>Stylist cafe chair</h4>
            <h3>Rp 2.500.000 </h3>
          </div>
          <div className="productPic15">
            <img src={lolito} alt="" />
            <p>-50%</p>
            <h2>lolito</h2>
            <h4>Luxury big sofa</h4>
            <div className="productPrices">
              <h3>Rp 7.000.000 </h3>
              <h5>Rp 14.000.000</h5>
            </div>
          </div>
          <div className="productPic16">
            <img src={respira} alt="" />
            <p>New</p>
            <h2>Respira</h2>
            <h4> Outdoor bar table and stool </h4>
            <h3>Rp 2.500.000 </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPageSession
