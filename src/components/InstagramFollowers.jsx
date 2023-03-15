import React, { useState } from "react";

function InstagramFollowers() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    setEmail("");
  }
  return (
    <section className="bg-lightGray py-[100px]">
      <div className="container">
        <h2 className="section-title text-center mb-2">
          Subscribe To The Newsletter
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="md:w-96 p-2 border-b-2 border-black focus:outline-none bg-transparent"
              placeholder="Email Address..."
            />
            <button
              className="p-2 border-b-2 border-black uppercase text-black font-semibold"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default InstagramFollowers;
