import React from "react";
import BannerBG from "../../assets/bannerBG.jpg";
import CapsuleImage from "../../assets/capsule.png";

export default function Banner() {
  return (
    <section
      className="banner flex justify-center items-center after:content-[''] after:absolute after:top-0 after:left-0 after:bg-black after:bg-opacity-50 after:h-full after:w-full after:z-0"
      style={{
        backgroundImage: `url(${BannerBG})`,
        backgroundColor: "saddlebrown",
        height: "100%",
        minHeight: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div className="container m-auto px-10 z-10">
        <div className="column-1 md:columns-2 gap-5 py-10">
          <div className="content-center py-5">
            <h1 className=" text-white text-5xl lg:text-9xl">Mission Space</h1>
            <p className="text-white pt-7 text-lg">
              Travel To Space Now And Feel The Experience.
            </p>
          </div>
          <div className="h-96">
            <figure>
              <img src={CapsuleImage} alt="" className="h-96 m-auto rounded" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
