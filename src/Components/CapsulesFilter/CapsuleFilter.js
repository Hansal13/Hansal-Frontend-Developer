import React, { useState } from "react";
import { useSelector } from "react-redux";
import CapsuleBG from "../../assets/space.avif";
import CapsulesFiltered from "./CapsulesFiltered";

export default function CapsuleFilter() {
  const capsules = useSelector((state) => state.allCapsules.capsules);
  const capsuleStatus = [...new Set(capsules.map((Val) => Val.status))];
  const capsuleType = [...new Set(capsules.map((Val) => Val.type))];
  const [capsuleFilter, setCapsuleFilter] = useState(null);
  const capsuleLandings = [
    ...new Set(capsules.map((Val) => Val.landings)),
  ].sort((a, b) => a - b);

  const [selectedOption, setSelectedOption] = useState({
    status: "retired",
    type: "Dragon 1.0",
    landing: "0",
  });

  const handleOptionsChange = (e) => {
    e.preventDefault();
    setSelectedOption((prevFormState) => ({
      ...prevFormState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFilter = (e) => {
    e.preventDefault();
    setCapsuleFilter(
      capsules.filter((filterCapsule) => {
        return (
          (filterCapsule.status === selectedOption.status &&
            filterCapsule.type === selectedOption.type) ||
          filterCapsule.landings === selectedOption.landing
        );
      })
    );
  };

  return (
    <section
      className="capsulefilter"
      style={{
        backgroundImage: `url(${CapsuleBG})`,
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container m-auto px-10">
        <h2 className="text-center text-3xl md:text-7xl  text-white pt-10 ">
          Capsules Filter
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ">
          <select
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            name="status"
            value={selectedOption.status}
            onChange={handleOptionsChange}
          >
            {capsuleStatus.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            name="type"
            value={selectedOption.type}
            onChange={handleOptionsChange}
          >
            {capsuleType.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            name="landing"
            value={selectedOption.landing}
            onChange={handleOptionsChange}
          >
            {capsuleLandings.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={handleFilter}
        >
          Filter
        </button>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ">
          <CapsulesFiltered capsuleFilter={capsuleFilter} />
        </div>
      </div>
    </section>
  );
}
