import React, { useState, useEffect } from "react";
import search from "../assets/search.png";
import arrow from "../assets/arrow.png";
import {  movies } from "./movie";
import { movie } from "./movie";
import { actors } from "./movie";
// import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function body() {
return (
    <main className="mt-10">
      <div className="flex justify-between text-white mb-4 px-6 featured">
        <h2 className="font-semibold">Featured Movie</h2>
        <div className="flex gap-2">
          <p className="text-red-600 font-bold">See more</p>
          <img src={arrow} alt="" className="w-5" />
        </div>
      </div>

      <Swiper
        className="mySwiper"
        spaceBetween={1}
        slidesPerView={1}
        breakpoints={{
          540: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
        }}
      >
        {movies.map((item, ivx) => (
          <div key={ivx}>
            <SwiperSlide>
              <div className="swipers">
                <img
                  src={item.img}
                  alt=""
                  className="w-60 h-80 bg-cover object-cover img "
                />
                <p className="text-gray-600 mt-2">{item.about}</p>
                <h1 className="text-white font-bold text-2xl mt-3">
                  {item.name}
                </h1>

                <div className="flex gap-10 text-white mt-4">
                  <p className="text">{item.text}</p>
                  <p>{item.category}</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>

      <div className="flex justify-between text-white  mt-7 px-6 featured ">
        <h2 className="font-semibold">Featured Casts</h2>
        <div className="flex gap-2">
          <p className="text-red-600 font-bold">See more</p>
          <img src={arrow} alt="" className="w-5" />
        </div>
      </div>

      <Swiper
        className="mySwiper"
        spaceBetween={1}
        slidesPerView={1}
        breakpoints={{
          540: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
        }}
      >
       {actors.map((item) => {
        console.log(item.id);
        return(
          <div key={item.id}>
            <SwiperSlide>
              <div className="swipers">
                <img
                  src={item.img}
                  alt=""
                  className="w-60 h-80 bg-cover object-cover img "
                />
                <p className="text-gray-600 mt-2">{item.about}</p>
                <h1 className="text-white font-bold text-2xl mt-3">
                  {item.name}
                </h1>

                <div className="flex gap-10 text-white mt-4">
                  <p className="text">{item.text}</p>
                  <p>{item.category}</p>
                </div>
              </div>
            </SwiperSlide>
          </div>

        )
       })}
      </Swiper>

      <section>
        <div className="flex justify-between text-white mb-4 mt-7 px-6 featured">
          <h2 className="font-semibold">Exclusive Movie</h2>
          <div className="flex gap-2">
            <p className="text-red-600 font-bold">See more</p>
            <img src={arrow} alt="" className="w-5" />
          </div>
        </div>

        <div className="grid grid-cols-4 second-movies gap-10 px-9 mt-8">
          {movie.map((item, idx) => {
            return (
              <div key={idx}>
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="w-72 h-80 bg-cover object-cover"
                  />
                  <p className="text-gray-600 mt-2">{item.about}</p>
                  <h1 className="text-white font-bold text-2xl mt-3">
                    {item.name}
                  </h1>
                </div>

                <div className="flex gap-10 text-white mt-4 textcate">
                  <p className="text">{item.text}</p>
                  <p className="cate">{item.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex justify-between text-white mb-4 mt-7 px-6 featured">
          <h2 className="font-semibold">New Arrival</h2>
          <div className="flex gap-2">
            <p className="text-red-600 font-bold">See more</p>
            <img src={arrow} alt="" className="w-5" />
          </div>
        </div>

        <div className="grid grid-cols-4 second-movies gap-10 px-9 mt-8">
          {movie.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="w-72 h-80 bg-cover object-cover"
                  />
                  <p className="text-gray-600 mt-2">{item.about}</p>
                  <h1 className="text-white font-bold text-2xl mt-3">
                    {item.name}
                  </h1>
                </div>

                <div className="flex gap-10 text-white mt-4 textcate">
                  <p className="text">{item.text}</p>
                  <p className="cate">{item.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default body;
