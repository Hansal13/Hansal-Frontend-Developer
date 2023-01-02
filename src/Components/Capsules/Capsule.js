import React, { useState } from "react";
import CapsulePop from "./CapsulePop";
export default function Capsule({ capsuleData }) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <>
      <article
        className="p-5 rounded shadow-lg backdrop-blur-sm bg-transperant/30 hover:cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="px-6 py-4">
          <p className="font-bold text-xl mb-2 text-white">
            Capsule Serial: {capsuleData.capsule_serial}
          </p>
          <p className="text-base text-white">
            Capsule ID: {capsuleData.capsule_id}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <p className="text-white">
            Status:{" "}
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {capsuleData.status}
            </span>
          </p>
        </div>
      </article>
      {showModal ? (
        <CapsulePop serial={capsuleData.capsule_serial} close={handleClose} />
      ) : null}
    </>
  );
}
