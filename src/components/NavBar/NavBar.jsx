import React from "react";
import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-left">
        <div className="logo">
          <span>Andrew</span>
          <span>Dobson</span>
        </div>
      </div>
      <div
        className="mobile-nav-right"
        onPointerDown={() => {
          // const [overlay] = document.getElementsByClassName("mobile-overlay");
          // overlay.style.display = "flex";
          // gsap.from(".mobile-overlay", {
          //   x: window.innerWidth,
          //   duration: 0.5,
          // });
          // console.log("here");
        }}
      >
        <svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 64H448v64H0V64zM0 224H448v64H0V224zM448 384v64H0V384H448z" />
        </svg>
      </div>
      <div className="nav-right">
        <div className="links">
          <span className="active">Home.</span>
          <span>Projects.</span>
          <span>About.</span>
          <span>Contact.</span>
        </div>
        <div className="toggle-mode">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 144C194.1 144 144 194.1 144 256c0 61.86 50.14 112 112 112s112-50.14 112-112C368 194.1 317.9 144 256 144zM256 320c-35.29 0-64-28.71-64-64c0-35.29 28.71-64 64-64s64 28.71 64 64C320 291.3 291.3 320 256 320zM256 112c13.25 0 24-10.75 24-24v-64C280 10.75 269.3 0 256 0S232 10.75 232 24v64C232 101.3 242.8 112 256 112zM256 400c-13.25 0-24 10.75-24 24v64C232 501.3 242.8 512 256 512s24-10.75 24-24v-64C280 410.8 269.3 400 256 400zM488 232h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64C501.3 280 512 269.3 512 256S501.3 232 488 232zM112 256c0-13.25-10.75-24-24-24h-64C10.75 232 0 242.8 0 256s10.75 24 24 24h64C101.3 280 112 269.3 112 256zM391.8 357.8c-9.344-9.375-24.56-9.372-33.94 .0031s-9.375 24.56 0 33.93l45.25 45.28c4.672 4.688 10.83 7.031 16.97 7.031s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L391.8 357.8zM120.2 154.2c4.672 4.688 10.83 7.031 16.97 7.031S149.5 158.9 154.2 154.2c9.375-9.375 9.375-24.56 0-33.93L108.9 74.97c-9.344-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L120.2 154.2zM374.8 161.2c6.141 0 12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.94s-24.59-9.375-33.94 0l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.93C362.5 158.9 368.7 161.2 374.8 161.2zM120.2 357.8l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.94c4.688 4.688 10.83 7.031 16.97 7.031s12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.93S129.6 348.4 120.2 357.8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
