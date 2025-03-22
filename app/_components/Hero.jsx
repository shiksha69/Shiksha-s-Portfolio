"use client";
import Image from "next/image";
import Animate from "./Animate";
import Link from "next/link";
import { useState } from "react";

function Hero() {
  const [loadImg, setLoadImg] = useState(() => true);

  return (
    <div
      id="about"
      className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8"
    >
      {/* Image Container */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-60 md:w-80 lg:w-96 h-60 md:h-80 lg:h-96 bg-black shadow-2xl rounded-full overflow-hidden">
          {loadImg && (
            <div className="w-full h-full bg-gray-300 animate-pulse"></div>
          )}
          <Image
            src="/images/shiksha.avif"
            alt="Shiksha Rupayan Paikar"
            width={0}
            height={0}
            sizes="100vw"
            className="w-60 md:w-80 lg:w-96 object-cover"
            priority={true}
            quality={100}
            hidden={loadImg}
            onLoad={() => setLoadImg(false)}
            aria-label="Shiksha Rupayan Paikar"
          />
        </div>
      </div>

      {/* Text Container */}
      <Animate>
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1
            className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-gray-900"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Shiksha Rupayan Paikar
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            UI/UX Designer
          </h2>
          <p className="text-gray-700 text-center md:text-justify text-md md:text-lg max-w-lg leading-relaxed">
            Crafting intuitive and visually stunning digital experiences through
            user-centered design. Passionate about blending aesthetics with
            functionality to create seamless interactions that enhance usability
            and engagement.
          </p>
          <Link
            href="#contacts"
            className="w-fit flex flex-nowrap justify-center items-center gap-2 px-6 py-2 text-white font-semibold text-md md:text-lg bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:translate-y-1 transition-transform duration-500"
          >
            Contact me
            <img
              src="/images/chevronright.svg"
              alt="ChevronRight"
              className="w-3 h-3 md:w-4 md:h-4"
            />
          </Link>
        </div>
      </Animate>
    </div>
  );
}

export default Hero;
