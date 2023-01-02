import React from "react";
import Banner from "../Components/Banner/Banner";
import Capsules from "../Components/Capsules/Capsules";
import CapsuleFilter from "../Components/CapsulesFilter/CapsuleFilter";
export default function Home() {
  return (
    <>
      <Banner />
      <CapsuleFilter />
      <Capsules />
    </>
  );
}
