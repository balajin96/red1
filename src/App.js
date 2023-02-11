import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appleAction, googleAction, subscribeAction } from "./index";

const appstyle = {
  textAlign: "center",
  width: "auto",
  fontFamily: "Arial, Verdana, sans-serif"
};

function App() {
  const techies = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App" style={appstyle}>
      <h1>this is redux basics</h1>
      <p>{techies.isSubscribed ? "true" : "false"}</p>
      <img src={techies.img} />
      <button
        disabled={!techies.isSubscribed}
        onClick={() => dispatch(appleAction())}
      >
        apple
      </button>{" "}
      &nbsp;
      <button
        disabled={!techies.isSubscribed}
        onClick={() => dispatch(googleAction())}
      >
        google
      </button>{" "}
      &nbsp;
      <button onClick={() => dispatch(subscribeAction())}>
        {!techies.isSubscribed ? "subscribe" : "unSubscribe"}
      </button>
    </div>
  );
}

export default App;
