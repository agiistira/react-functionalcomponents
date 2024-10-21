import React from "react";
import LoginStatus from "./LoginStatus";

function Home() {
  return (
    <>
      <LoginStatus nama="Agis" statusLogin={true} />
    </>
  );
}

export default Home;
