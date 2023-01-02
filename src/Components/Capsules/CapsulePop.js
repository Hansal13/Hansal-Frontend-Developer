import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CapsulePop({ serial, close }) {
  const [loading, setLoading] = useState(false);
  const [capsule, setCapsule] = useState({});
  const loadCapsule = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.spacexdata.com/v3/capsules/${serial}`
      );
      setCapsule(response.data);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    loadCapsule();
  }, []);

  return (
    <>
      {loading ? null : (
        <>
          <div className="justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none transition ease-in-out delay-150  scrollbar-hide">
            <div className="relative my-6 mx-auto w-4/5 md:max-w-3xl h-full justify-center items-center flex">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <header>
                    <h3 className="text-3xl font-semibold">
                      Serial: {capsule.capsule_serial}
                    </h3>
                  </header>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    ID:{" "}
                    <span className="inline-bloc px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {capsule.capsule_id}
                    </span>
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Details:{" "}
                    <span className="inline-bloc px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {capsule.details}
                    </span>
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Reuse Count :{" "}
                    <span className="inline-bloc px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {capsule.reuse_count}
                    </span>
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Landings :{" "}
                    <span className="inline-bloc px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {capsule.landings}
                    </span>
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Original Launch Unix :{" "}
                    <span className="inline-bloc px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {capsule.original_launch_unix}
                    </span>
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Type :{" "}
                    <span className="inline-bloc px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {capsule.type}
                    </span>
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Status:{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {capsule.status}
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={close}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
}
