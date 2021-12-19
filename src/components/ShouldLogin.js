import React, { useEffect } from "react";


export default function ShouldLogin() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  }, []);
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "4rem",
      }}
    >
      <div>
        You should login to see the page<br></br>
        You are redirected to login page...
      </div>
      <br></br>
    </div>
  );
}
