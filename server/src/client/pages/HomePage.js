import React from "react";

const HomePage = () => {
  return (
    <div>
      <div>I'm the home component change test 3</div>
      <button onClick={() => console.log("Hello world")}>CONSOLE CLICK</button>
    </div>
  );
};

export default {
  component: HomePage
};
