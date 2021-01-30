import React, { useEffect } from "react";
import axios from "axios";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh"
};

function LandingPage() {
  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res.data));
  }, []);
  return <div style={style}>시작 페이지</div>;
}

export default LandingPage;
