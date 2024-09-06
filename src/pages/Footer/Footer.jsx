import "./Footer.css";


const Footer =()=>{
    return (
      <div className="footer">
        <div
          className="footerContainer"
        //   style={{ border: "2px solid black", padding: "10px" }}
>
          <div className="address">
            <h2>Funiro.</h2>
            <div>
              <p>400 University Drive Suite 200 Carol Gables, FL 33134 USA</p>
            </div>
          </div>
          <div className="footerHolder">
            <h3>Links</h3>
            <div>
              <h4>Home</h4>
              <h4>Shop</h4>
              <h4>About</h4>
              <h4>Contact</h4>
            </div>
          </div>
          <div className="footerHolder">
            <h3>Help</h3>
            <div>
              <h4>Payment Options</h4>
              <h4>Returns </h4>
              <h4>Privacy Policies</h4>
            </div>
          </div>
          <div className="footerHolder">
            <h3>Newsletter</h3>
            <div></div>
          </div>
        </div>
        <div className="down">
            <p>
                2023 furino. All rights reverved
            </p>
        </div>
      </div>
    );
}


export default Footer;