import React, { useState } from "react";
import {
  bathtub,
  bed,
  building,
  heart_fill,
  heart_outline,
  location,
  move,
} from "../assets";
import { Link } from "react-router-dom";

function Card({ data }) {
  const [fillHeart, setfillHeart] = useState(false);
  return (
    <Link to={`/property/${data.id}`}>
      <div className="card max-w-sm bg-sec_bg p-2 rounded-2xl m-auto text-left">
        <div className="img-cont relative w-full">
          <img src={data.img} alt="" className="w-full rounded-2xl" />
          <div className="absolute top-3 left-3 bg-sec_bg rounded-3xl py-2 px-3">
            <p className="text-xs text-main_purple font-medium ">
              {data.rent ? "For Rent" : "For Sale"}
            </p>
          </div>
          <div
            className="heart-img-cont cursor-pointer absolute top-3 right-3 bg-sec_bg rounded-full p-2 w-8"
            onClick={() => setfillHeart((state) => !state)}
          >
            <img
              src={fillHeart ? heart_fill : heart_outline}
              alt=""
              className="w-full"
            />
          </div>
        </div>

        <div className="content px-3 w-full">
          <div className="location flex items-center gap-1 mt-4 mb-3 px-1">
            <div className="icon-cont w-3">
              <img src={location} alt="location" className="w-full" />
            </div>
            <p className=" text-xs font-normal text-sec_text">
              {data.location}
            </p>
          </div>

          <h1 className="text-main_text font-medium text-lg">
            {data.buildingname}
          </h1>

          <div className="details flex justify-around items-center  my-3">
            <div className="room-cont  text-left w-12">
              <img src={building} alt="room" className="w-6" />
              <p className="mt-2 text-sec_text text-xs ">
                {data.noofroom} Room
              </p>
            </div>

            <div className="room-cont  text-left w-12">
              <img src={bed} alt="bed" className="w-6" />
              <p className="mt-2 text-sec_text text-xs ">{data.noofbed} Bed</p>
            </div>

            <div className="room-cont  text-left w-12">
              <img src={bathtub} alt="bath" className="w-6" />
              <p className="mt-2 text-sec_text text-xs ">{data.noofbad} Bath</p>
            </div>

            <div className="room-cont  text-left w-12">
              <img src={move} alt="room" className="w-6" />
              <p className="mt-2 text-sec_text text-xs ">{data.sft} sft</p>
            </div>
          </div>

          <div className="price-readmore-div mt-5 mb-3 flex justify-between items-center px-2">
            <h2 className="text-main_purple text-lg font-medium">
              ${data.pricepermonth}{" "}
              <span className="text-main_text text-sm">/month</span>
            </h2>

            <a
              href={`/property/${data.id}`}
              className="text-main_purple border border-main_purple rounded-3xl py-2 px-4 text-base font-semibold hover:bg-main_purple hover:text-white"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
