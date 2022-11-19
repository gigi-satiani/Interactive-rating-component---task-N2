import "./App.css";
import React, { useState } from "react";
import star from "./images/star.svg";
import thankYou from "./images/thank-you.svg";

function App() {
  
  const [activeButtonIndex, setActiveButtonIndex] = useState(-1);
  function buttonClick(clicker) {
    setActiveButtonIndex(clicker);
  }

  const [vanish, setVanish] = useState(true);
  function changeStyle() {
    setVanish(false);
  }

  return (
    <div className="App">
      {vanish ? (
        <div className="cardBody">
          <figure className="staroParent">
            <img src={star} alt="star" className="staro"></img>
          </figure>
          <div className="cardTexts">
            <Htwo />
            <FeedBack />
          </div>
          <div className="buttonParent">
            <Buttonsgroup
              buttonClick={buttonClick}
              activeButtonIndex={activeButtonIndex}
            />
          </div>
          <div className="submitParent">
            <SubmitButtonn changeStyle={changeStyle} />
          </div>
        </div>
      ) : (
        <div className="afterSubmitCard">
          <div className="cardBody1">
            <figure className="thanksParent">
              <img src={thankYou} className="thankYou"></img>
            </figure>
            <div className="selectedNumber">
              <span>you selected {activeButtonIndex + 1} out of 5</span>
            </div>
            <div className="thanksText">
              <h3>Thank you!</h3>
              <p>
                we appreciate you taking the time to give a rating. if you ever
                need more support, don't heistate to get in touch!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


const Htwo = () => {
  return <h3>How did we do?</h3>;
};

const FeedBack = () => {
  return (
    <p>
      Please let us know how we did with your support request. all feedback is
      apprecioated to help us improve our offering!
    </p>
  );
};

const Buttonsgroup = (props) => {
  console.log("props", props);
  return buttons.map((button, index) => (
    <button
      key={button}
      onClick={() => props.buttonClick(index)}
      style={{ background: props.activeButtonIndex === index ? "gray" : "" }}>
      {button}
    </button>
  ));
};
let buttons = [1, 2, 3, 4, 5];

const SubmitButtonn = (props) => {
  return (
    <button className="submits" onClick={props.changeStyle}>
      SUBMIT
    </button>
  );
};


export default App;

// sheqmeni buttsgroup komponenti                                        +
// daa returne buttons.map funqcia, imisatvis rom gqondes gamosaxuleba   +
// buttonesbis klikze stateshi shecvale aqtiuri buttons indexi  ternarulebit  +
// buttons daade shesabamisi stili, active/non-active +

// let item = buttons.map((button,index) => <button key={button}>{button}</button>);
