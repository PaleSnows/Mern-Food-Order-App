import React from "react";
import fresh from "../../assets/t1.jpg";

const Testimonials = () => {
  return (
    <div className="flex flex-col  bg-black px-16 py-5  ">
        <h1 className="text-slate-400 text-center pb-8 text-4xl font-semibold">Testimonials</h1>
      <div className="flex flex-row gap-32">
        <div className="">
          <img
            src={fresh}
            className="h-[500px] w-full object-cover rounded-lg shadow-xl hover:scale-105 transition"
            alt=""
          />
        </div>
        <div className="border p-7">
          <div className="  flex flex-row px-1 py-3">
            <h1 className="text-slate-300 font-semibold border px-14 py-3 ">
              Description
            </h1>
            <h1 className="text-slate-200 font-semibold border px-14 py-3">
              Reviews(300)
            </h1>
          </div>
          <div className="text-slate-200 px-1 w-[400px]">
            <p className="">
              <span className="text-lg font-semibold">Samantha H.:</span> "I've
              been using this app for months now, and I can't recommend it
              enough! The variety of restaurants and dishes available is
              fantastic. Plus, the delivery is always prompt, and the food
              arrives piping hot. Definitely my go-to app for ordering food!"
            </p>
            <p>
              <span className="text-lg font-semibold">Michel T.:</span> "As
              someone who's always on the go, this app has been a lifesaver.
              Whether I'm craving sushi or pizza, I know I can rely on this app
              to satisfy my hunger. The user-friendly interface makes ordering a
              breeze, and the customer service team is top-notch!"
            </p>
            <p>
              <span className="text-lg font-semibold">Emily R.:</span> "I've
              tried several food delivery apps, but none compare to this one.
              The quality of the food is consistently excellent, and I love that
              I can track my order in real-time. Plus, the rewards program is a
              nice bonus—I've earned free meals just by ordering regularly!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
