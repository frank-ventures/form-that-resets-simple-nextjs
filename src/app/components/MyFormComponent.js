"use client";

import { useState } from "react";

export default function MyFormComponment({ serverAction }) {
  const [formData, setFormData] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit called");

    const formData = new FormData(event.target);
    console.log("logging FD", formData.get("message"));

    serverAction(formData);
    console.log("serverAction invoked client side");

    console.log("Resetting form...");
    event.target.reset();
  }

  function handleChange(event) {
    console.log(event.target.value);
    setFormData(event.target.value);
  }

  return (
    <>
      <h2>This is my form</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="message"
          placeholder="Input your message"
          onChange={handleChange}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}
