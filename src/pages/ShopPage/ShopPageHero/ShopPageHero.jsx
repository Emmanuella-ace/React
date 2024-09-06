import "./ShopPageHero.css"
import { FaAngleRight } from "react-icons/fa6";
import { IoMdOptions } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { LuServer } from "react-icons/lu";



const ShopPageHero =()=>{
    return (
      <div className="heroContainer">
        <div className="heroBox">
          <h1>Shop</h1>
          <div className="heroText">
            <h4>Home</h4>
            <div className="heroIcon">
              <FaAngleRight />
            </div>
            <p>Shop</p>
          </div>
        </div>
        <div className="filterBox">
          <div className="filterLeft">
            <div className="icons">
              <IoMdOptions />
            </div>
            <p>Filter</p>
            <div className="icons">
              <PiDotsNineBold />
            </div>
            <div className="icons">
              <LuServer />
            </div>

            <h5>Showing 1-16 of 32 results</h5>
          </div>

          <div className="filterRight">
            <form>
              <label for="user"> Show </label>
              <input type="number" name="number" id="user" placeholder="16" />
              <label for="user"> Short by </label>
              <input type="text" name="text" id="user" placeholder="Default" />
            </form>
          </div>
        </div>

        
      </div>
    );
}


export default ShopPageHero;