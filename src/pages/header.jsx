import React, { useEffect, useState } from "react";
import search from "../assets/search.png";
import logo from "../assets/logo 2.jpg";
import youtube from "../assets/youtube.png";

function header() {
  const classes = ["johnwick", "thor", "spider", "flash"];
  const [randomClass, setRandomClass] = useState("");

  const getRandomClass = () => {
    const randomIndex = Math.floor(Math.random() * classes.length);
    const selectedRandomItem = classes[randomIndex];
    setRandomClass(selectedRandomItem);
  };

  useEffect(() => {
    getRandomClass();
  }, []);
  
  return (
    <header className={randomClass}>
      <section className="flex justify-between items-center p-3">
        <div className="flex gap-3 mockup">
          <img src={logo} alt="" width={40} />
        </div>
        <div className="flex items-center py-1 px-4 rounded-3xl search-bar">
          <input
            type="text"
            placeholder="What do you want to watch"
            className="w-96 rounded p-1 input sm:w"
          />
          <button type="submit" className="border-none rounded-full w-10 h-10">
            <img src={search} alt="" className="w-8 pl-2" />
          </button>
        </div>
        <div>
          <p className="text-white font-bold">Sign in</p>
        </div>
      </section>

      <section className="py-36 px-5 content">
        <h1 className="font-bold text-2xl text-white">
          {randomClass === "johnwick" && "John Wick 3: Parabellum"}
          {randomClass === "spider" &&
            "“With great power comes great responsibility.”"}
          {randomClass === "thor" &&
            " I am alive! I am invincible! I am—Thor!!!"}
          {randomClass === "flash" && "im The Fastest Man Alive."}
        </h1>

        <div className="flex gap-4 mt-3">
            <p className="first_film px-3 font-semibold ">Film</p>
            <p className="font-bold">03-07-00-9</p>
            <img src={youtube} alt="" width={20}/>
        </div>
             <p className="font-bold  text-white mt-2">Lorem ipsum dolor, sit amet consectetur</p>
             <p className="font-bold  text-white mt-2">Lorem ipsum dolor, sit amet consectetur</p>
             <p className="font-bold  text-white mt-2">Lorem ipsum dolor, sit amet consectetur</p>
             <div className="flex items-center bg-red-900 w-36 rounded mt-2">
             <button type="submit" className="px-2 py-2 font-bold text-white">Watch Trailer</button>
             <img src={youtube} alt="" width={20}/>
             </div>
      </section>
    </header>
  );
}

export default header;
