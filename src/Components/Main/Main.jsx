import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>StarBrain AI</p>
          <img src={assets.user_icon} alt="userIcon" />
        </div>

        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Dev.</span>
                </p>
                <p>How can I, help you today?</p>
              </div>

              <div className="cards">
                <div className="card">
                  <p>Suggest a good place for camping</p>
                  <img src={assets.compass_icon} alt="compass_icon" />
                </div>

                <div className="card">
                  <p>How to Create Ironman Arc Reactor?</p>
                  <img src={assets.bulb_icon} alt="bulb_icon" />
                </div>

                <div className="card">
                  <p>Most paid Athlete?</p>
                  <img src={assets.message_icon} alt="msg_icon" />
                </div>

                <div className="card">
                  <p>How to decrease time complexity of code?</p>
                  <img src={assets.code_icon} alt="code_icon" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="user_icon" />
                <p>{recentPrompt}</p>
              </div>

              <div className="result-data">
                <img src={assets.starbrain_ai_icon} alt="starbrain_icon" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(event) => setInput(event.target.value)}
                value={input}
                type="text"
                placeholder="Enter a prompt."
              />
              <div>
                <img src={assets.gallery_icon} alt="gallery_icon" />
                <img src={assets.mic_icon} alt="mic_icon" />
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="send_icon"
                />
              </div>
            </div>

            <p className="bottom-info">
            StarBrain AI can make mistakes. Check important info.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
