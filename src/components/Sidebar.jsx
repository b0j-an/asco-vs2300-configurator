import React, { useState } from "react";
import Popup from "reactjs-popup";

export function Sidebar({ toggleMesh, ...props }) {
  const handleToggleMeshClick = () => {
    toggleMesh();
    changeClassName();
    !wasPressed1
      ? (setpriceOfMachine(priceOfMachine + 500), setRubberPrice("-500€"), setwasPressed1(true))
      : (setpriceOfMachine(priceOfMachine - 500), setRubberPrice("+500€"), setwasPressed1(false));

    buttonText === "Remove Rubber" ? setButtonText("Add Rubber") : setButtonText("Remove Rubber");
  };

  function changeClassName() {
    setClassName("active");
    setTimeout(() => {
      setClassName("default");
    }, 500);
  }

  const handleTrichter = () => {
    props.handleTrichter();
    !wasPressed2
      ? (setpriceOfMachine("+ 200"),
        setTimeout(() => {
          setpriceOfMachine(priceOfMachine + 200);
        }, 500),
        setwasPressed2(true))
      : (setpriceOfMachine("- 200"),
        setTimeout(() => {
          setpriceOfMachine(priceOfMachine - 200);
        }, 500),
        setwasPressed2(false));
    buttonText4 === "Remove Trichter"
      ? setButtonText4("Add Trichter")
      : setButtonText4("Remove Trichter");
    changeClassName();
  };

  const [wasPressed1, setwasPressed1] = useState(false);
  const [wasPressed2, setwasPressed2] = useState(false);
  const [buttonText, setButtonText] = useState("Add Rubber");
  const [buttonText2, setButtonText2] = useState("Plej Animaciju");
  const [buttonText3, setButtonText3] = useState("Let there be light!");
  const [buttonText4, setButtonText4] = useState("Add Trichter");
  const [priceOfMachine, setpriceOfMachine] = useState(19970);
  const [className, setClassName] = useState("default");
  const [rubberPrice, setRubberPrice] = useState("+500€");
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="Sidebar">
      <img
        src="./img/ascoLogo.svg"
        alt=""
      />

      <div className="sidebar-inside-top">
        <h1>ASCO Siebtechnik</h1>
        <h2>Total MSRP</h2>
        <div className="priceAndInfo">
          <h3 className={className}>
            €{" "}
            {priceOfMachine.toLocaleString("de-DE", {
              minimumFractionDigits: 2,
            })}
          </h3>
          <button className="info-icon" />
        </div>
        <p> *Est. Import Tax: 301,23 €</p>
      </div>
      <div className="sidebar-inside-bottom">
        <div className="button-container">
          <div
            className="price-change"
            onClick={handleToggleMeshClick}
          >
            {rubberPrice}
          </div>
          <button
            className="btn"
            onClick={handleToggleMeshClick}

            // onMouseLeave={() => {
            //   buttonText === "+" ? setButtonText("Add Rubber") : setButtonText("Remove Rubber");
            // }}
          >
            {buttonText}
          </button>
          {/* <div className="button-info">i</div> */}
          {open && (
            <Popup
              modal={true}
              trigger={<button className="button-info">i</button>}
            >
              <h2>Uniquely designed adjustable rubber brake for controlled screening.</h2>
              <p>
                The screening process begins with the feeding of the material at the hopper of the
                screen deck. Different materials can be screened with different grain sizes. The
                material dosed via an adjustable rubber brake allows maximum variability in dosing.
              </p>
              <img
                src="./img/rubber.png"
                alt=""
              />
            </Popup>
          )}
        </div>

        <div className="button-container">
          <button
            className="btn"
            onClick={handleTrichter}
          >
            {buttonText4}
          </button>

          <button
            className="accordion2"
            onClick={() => {
              setIsPanelOpen(!isPanelOpen);
            }}
          >
            <span className="material-symbols-outlined">
              {isPanelOpen ? "expand_less" : "expand_more"}
            </span>
          </button>
        </div>

        <div
          id="accordion-show"
          className={isPanelOpen ? "panel-show" : "panel"}
        >
          <p>Expand large feed area of the hoppen with additional extension.</p>
          <img
            src="./img/trichter.png"
            alt=""
          />
        </div>

        <button
          className="btn"
          onClick={props.plej}
          onMouseEnter={() => {
            setButtonText2("Da");
          }}
          onMouseLeave={() => {
            setButtonText2("Plej Animaciju");
          }}
        >
          {buttonText2}
        </button>
        <button
          className="btn"
          onClick={props.pause}
        >
          Pauziraj animaciju
        </button>
        <button
          className="btn"
          onClick={() => {
            props.letThereBeLight();
            buttonText3 === "Let there be light!"
              ? setButtonText3("Light Off")
              : setButtonText3("Let there be light!");
          }}
        >
          {buttonText3}
        </button>
      </div>
      <p>asco-bh.com</p>
      <p>Asco ® All Rights Reserved</p>
    </div>
  );
}
