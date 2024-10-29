import React from "react";

function Card({ title, content }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-10 max-w-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}

export default Card;