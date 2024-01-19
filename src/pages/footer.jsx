import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

function footer() {
  return (
    <footer>
      <div className="flex justify-center gap-10 py-14 mt-24 footer-img">
        <img src={facebook} alt="" className="w-8" />
        <img src={twitter} alt="" className="w-8" />
        <img src={instagram} alt="" className="w-8" />
        <img src={youtube} alt="" className="w-8" />
      </div>

      <div className="flex justify-around text-center footer-txt">
        <p className="text-white  text-xl">Condition of use</p>
        <p className="text-white text-xl">Privacy & Policy</p>
        <p className="text-white  text-xl">Press room</p>
      </div>

      <hr className="mt-10" />
      <div>
        <p className="font-semibold mt-8 text-center text-lg text-white ">
          @2021 MovieBox by Adriana Eka Prayudha
        </p>
      </div>
    </footer>
  );
}

export default footer;
