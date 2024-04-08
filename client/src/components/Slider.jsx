import React from "react";
import food from "../assets/food";
import { useSelector, useDispatch } from "react-redux";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { nextSlide, prevSlide } from "../redux/slices/sliderSlice";

const Slider = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.slider);

  return (
    <div className="relative w-full pb-10 flex justify-center  bg-black">
      {food.map((item, index) => (
        <div
          key={item.id}
          className={`   transform transition-opacity duration-700 ease-in-out ${
            item.id === value ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {item.id === value && (
            <>
              <img
                className="object-cover rounded-full  h-[570px] min-w-[600px] max-w-[600px] "
                src={item.image}
                alt={item.name}
              />
              <div>
                <p className="text-2xl capitalize pt-4 font-semibold text-center text-slate-300">
                  {item.name}
                </p>
              </div>
            </>
          )}
        </div>
      ))}

      <button
        className="absolute left-0 bottom-72 p-4 bg-slate-700 text-sky-200 rounded-r-3xl hover:scale-105 "
        onClick={() => dispatch(nextSlide(value + 1))}
      >
        <FaCircleArrowLeft className="inline-block mr-1" />
        Prev
      </button>
      <button
        className="absolute right-0 bottom-72 p-4 bg-slate-700 text-sky-200 rounded-l-3xl hover:scale-105"
        onClick={() => dispatch(prevSlide(value - 1))}
      >
        Next
        <FaCircleArrowRight className="inline-block ml-1" />
      </button>
    </div>
  );
};

export default Slider;
