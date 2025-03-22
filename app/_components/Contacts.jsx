"use client";
import Image from "next/image";
import Form from "./Form";
import { useState } from "react";

function Contacts() {
  const [loadImg, setLoadImg] = useState(() => true);
  return (
    <div
      id="contacts"
      className="min-h-screen h-auto flex flex-col justify-center items-center py-16"
    >
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-6 md:mb-12">
        Contact Me
      </h2>
      <div className="w-11/12 md:w-3/4 h-auto grid grid-cols-1 md:grid-cols-2 items-center rounded-2xl shadow-2xl overflow-hidden">
        <div>
          {loadImg && (
            <div className="w-full h-full bg-gray-300 animate-pulse"></div>
          )}
          <Image
            src="/images/shiksha.avif"
            alt="Shiksha Rupayan Paikar"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
            quality={100}
            hidden={loadImg}
            onLoad={() => setLoadImg(false)}
            className="w-full h-full object-cover"
          />
        </div>
        <Form />
      </div>
    </div>
  );
}

export default Contacts;
