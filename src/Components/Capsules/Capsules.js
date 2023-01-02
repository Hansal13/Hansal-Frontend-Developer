import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCapsules } from "../../Redux/actions/storeActions";
import Capsule from "./Capsule";
import CapsuleBG from "../../assets/space.avif";
import Loader from "../../assets/Loader.gif";

export default function Capsules() {
  const capsules = useSelector((state) => state.allCapsules.capsules);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const loadCapsule = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.spacexdata.com/v3/capsules"
      );
      dispatch(setCapsules(response.data));
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    loadCapsule();
  }, []);

  const prevCapsules = () => {
    console.log(startIndex);
    if (startIndex !== 0) {
      setStartIndex((prev) => prev - 9);
    }
  };

  const nextCapsules = () => {
    console.log(startIndex);
    if (startIndex + 9 < capsules.length) {
      setStartIndex((prev) => prev + 9);
    }
  };
  return (
    <section
      className="capsules "
      style={{
        backgroundImage: `url(${CapsuleBG})`,
        height: "100%",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container m-auto px-10">
        <h2 className="text-center text-3xl md:text-7xl  text-white pt-10 ">
          Capsules
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ">
          {loading ? (
            <img src={Loader} alt="Loader" />
          ) : (
            capsules.slice(startIndex, startIndex + 9).map((capsule) => {
              return (
                <Capsule capsuleData={capsule} key={capsule.capsule_serial} />
              );
            })
          )}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={prevCapsules}
            disabled={startIndex === 0}
          >
            Prev
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r disabled:bg-gray-400 disabled:cursor-not-allowed"
            onClick={nextCapsules}
            disabled={startIndex + 9 > capsules.length}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
