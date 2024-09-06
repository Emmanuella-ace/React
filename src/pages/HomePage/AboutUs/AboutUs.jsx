import "./AboutUs.css";
import dining from "../../../Images/dining.png"
import living from "../../../Images/living.png"
import bedroom from "../../../Images/bedroom.png"
import syltherine from "../../../Images/Syltherine.png"
import leviosa from "../../../Images/Leviosa.png"
import { IoMdShare } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import lolito from "../../../Images/Lolito.png"
import respira from "../../../Images/Respira.png"
import grifo from "../../../Images/Grifo.png"
import muggo from "../../../Images/Muggo.png"
import pingky from "../../../Images/Pingky.png"
import potty from "../../../Images/Potty.png"
import { FaArrowRight } from "react-icons/fa";
import image2 from "../../../Images/image2.png"
import image3 from "../../../Images/image3.png"


const AboutUs = () => {
  return (
    <div className="aboutContainer">
      <div className="browseHolder">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="browsePictures">
          <div className="browse">
            <img src={dining} alt="" />
            <h3>Dining</h3>
          </div>
          <div className="browse">
            <img src={living} alt="" />
            <h3>Living</h3>
          </div>
          <div className="browse">
            <img src={bedroom} alt="" />
            <h3>Bedroom</h3>
          </div>
        </div>
      </div>

      <div className="productContainer">
        <h2>Our Products</h2>
        <div className="products">
          <div className="product1">
            <div className="productPic">
              <img src={syltherine} alt="" />
              <p>-30%</p>
              <h2>Syltherine</h2>
              <h4>Stylist cafe chair</h4>
              <div className="productPrices">
                <h3>Rp 2.500.000 </h3>
                <h5>Rp 3.500.000</h5>
              </div>
            </div>
            <div className="productPic0">
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
              <img src={grifo} alt="" />
              <h2>Grifo</h2>
              <h4>Night Lamp </h4>
              <h3>Rp 1.500.000 </h3>
            </div>
            <div className="productPic6">
              <img src={muggo} alt="" />
              <p>New</p>
              <h2>Muggo</h2>
              <h4>Small mug </h4>

              <h3>Rp 150.000 </h3>
            </div>
            <div className="productPic7">
              <img src={pingky} alt="" />
              <p>-50%</p>
              <h2>Pingky</h2>
              <h4>Cute bed set</h4>
              <div className="productPrices">
                <h3>Rp 7.000.000 </h3>
                <h5>Rp 14.000.000</h5>
              </div>
            </div>
            <div className="productPic8">
              <img src={potty} alt="" />
              <p>New</p>
              <h2>Potty</h2>
              <h4>Minamalist flower pot</h4>

              <h3>Rp 500.000 </h3>
            </div>
          </div>
        </div>

        <button>Show More</button>
      </div>

      <div className="exploreContainer">
        <div className="exploreText">
          <h1>50+ Beautiful rooms inspiration</h1>

          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>

          <button>Explore More</button>
        </div>
        <div className="explorePic1">
          {/* <div className="explorePic1Text"> 
            <div className="text1">
              <p>01-----Bed Room</p>
              <h2>Inner Peace</h2>
            </div>
            <div>
              <FaArrowRight />
            </div>
          </div> */}
        </div>
        <div className="explorePic2">
          <img src={image2} alt="" />
        </div>
        <div className="explorePic3">
          <img src={image3} alt="" />
        </div>
      </div>

      {/* <div>
        <div>
          <p>Share your setup with</p>
          <h2>#FuniroFurniture</h2>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </div>
  );
};

export default AboutUs;
