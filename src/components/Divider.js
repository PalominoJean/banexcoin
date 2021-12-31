import React from "react";

export default function Divider({ text }) {
  return (
    <p className="text-gray-500 mt-5 flex items-center text-center before:flex-1 before:border-b before:border-b-gray-500 before:mr-2 before:content-[' '] after:flex-1 after:border-b after:border-b-gray-500 after:ml-2 after:content-[' '] ">
      {text}
    </p>
  );
}
