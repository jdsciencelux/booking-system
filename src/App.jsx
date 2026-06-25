import { useState } from "react";
import ImageCarousel from "./components/ImageCarousel";
import FormContainer from "./components/FormContainer";
import logo from "./assets/images/cls-discord.png";
import logo1 from "./assets/images/clstext.png";
import AdminView from "./components/AdminView";

function App() {

  const [footerSection, setFooterSection] = useState("");
  const [modalContent, setModalContent] = useState("");

  return (
    <div>
      <div className="site-logo">
  <img
    src={logo1}
    alt="Logo1"
    className="logo1-image"
  />
</div>
      <ImageCarousel />

      <div className="overlay-form">
        <FormContainer />
      </div>
   
   {/*<AdminView />*/}
   

      {/* FOOTER */}
      <div className="footer-nav">

        <div
          className="footer-tab"
          onClick={() => setModalContent("contact")}
        >
          Contact
        </div>

        <div
          className="footer-tab"
          onClick={() => setModalContent("about")}
        >
          About
        </div>

      </div>

      {/* MODAL OVERLAY */}
      {modalContent && (
        <div
          className="modal-overlay"
          onClick={() => setModalContent("")}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setModalContent("")}
            >
              ×
            </button>

            {modalContent === "contact" && (
              <>
                <h2>Contact</h2>
                <img
                  src={logo}
                  alt="Logo"
                  className="contact-logo"
                />
                <p>Contact us directly with all inqueries to our email: chicagolatex@proton.me</p>
                <p>Follow us on Discord for the most timely replies to your inquery, and Join Our Network of Latex Headz. :)</p>
              
              </>
            )}

            {modalContent === "about" && (
              <>
                <h2>About</h2>
                <p>Chicago Latex Repair is a bespoke latex repair service local to Chicago and surrounding suburbs. We aim to provide great service at a price everyone can work with. If you need a repair but are out of our locale, reach out and we will gladly work out shipment details with you. </p>
                
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

export default App;