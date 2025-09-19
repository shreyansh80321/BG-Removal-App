import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 px-6 md:px-12 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
        Steps to remove background <br />
        image in seconds
      </h1>

      {/* Responsive container */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 mt-12 xl:mt-24">
        {/* Card 1 */}
        <div className="flex items-start gap-4 bg-white border rounded-xl border-white drop-shadow-md p-7 pb-10 hover:scale-105 transition-all duration-500 w-full md:w-auto">
          <img className="max-w-9" src={assets.upload_icon} alt="Upload" />
          <div>
            <p className="text-xl font-medium">Upload image</p>
            <p className="text-sm text-neutral-500 mt-1">
              This is a demo text, will replace it later. <br />
              Thanks for sharing
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-4 bg-white border rounded-xl border-white drop-shadow-md p-7 pb-10 hover:scale-105 transition-all duration-500 w-full md:w-auto">
          <img
            className="max-w-9"
            src={assets.remove_bg_icon}
            alt="Remove Background"
          />
          <div>
            <p className="text-xl font-medium">Edit background</p>
            <p className="text-sm text-neutral-500 mt-1">
              This is a demo text, will replace it later. <br />
              Thanks for sharing
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-4 bg-white border rounded-xl border-white drop-shadow-md p-7 pb-10 hover:scale-105 transition-all duration-500 w-full md:w-auto">
          <img className="max-w-9" src={assets.download_icon} alt="Download" />
          <div>
            <p className="text-xl font-medium">Download result</p>
            <p className="text-sm text-neutral-500 mt-1">
              This is a demo text, will replace it later. <br />
              Thanks for sharing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
