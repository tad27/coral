import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  function handle404() {
    navigate("/");
  }
  return (
    <div className="font-poppins h-auto flex flex-col gap-4 items-center justify-center min-h-[300px]">
      <h1 className="text-3xl font-bold">You've been lost!</h1>
      <button
        className="bg-primary hover:bg-primary/80 text-white px-6 py-2"
        onClick={handle404}
      >
        Go Home
      </button>
    </div>
  );
}

export default PageNotFound;
