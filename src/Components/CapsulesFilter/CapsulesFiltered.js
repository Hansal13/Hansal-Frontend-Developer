import React from "react";

export default function CapsulesFiltered({ capsuleFilter }) {
  if (capsuleFilter == null) return null;
  return capsuleFilter.map((capsule) => (
    <article
      className="p-5 rounded shadow-lg backdrop-blur-sm bg-transperant/30 flex flex-col justify-between "
      key={capsule.capsule_serial}
    >
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2 text-white">
          Capsule Serial: {capsule.capsule_serial}
        </p>
        <p className="text-base text-white">Capsule ID: {capsule.capsule_id}</p>
        <p className="text-base text-white">
          Capsule Details: <br />
          {capsule.details}
        </p>
        <p className="text-base text-white">Capsule Type: {capsule.type}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-white">
          Status:{" "}
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {capsule.status}
          </span>
        </p>
      </div>
    </article>
  ));
}
