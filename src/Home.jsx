import React from "react";
import web from "../src/images/img2.svg";

import Commom from "./Common";

const Home = () => {
  return (
    <>
      <Commom
        name="Grow your business with"
        imgsrc={web}
        visit="/login"
        btname="Get Started"
      />
    </>
  );
};
export default Home; 