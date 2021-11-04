import React, { useState, useEffect } from "react";

export const Search = () => {
  const [categoryNumber, updateCategoryNumber] = useState(
    "Please Enter Category Number"
  );

  function handleChange(e) {
    updateCategoryNumber(e.target.value);
  }

  async function handleSubmit(e) {
    try {
      const data = await fetch(`/algopix/${categoryNumber}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error(err);
    }
    e.preventDefault();
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label className="inputAlignment">
        Category Number:
        <input
          type="text"
          value={categoryNumber}
          onChange={(e) => handleChange(e)}
        ></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};



require("dotenv/config");
const express = require("express");
const errorMiddleware = require("./error-middleware");
const staticMiddleware = require("./static-middleware");

const app = express();

app.use(staticMiddleware);
app.use(errorMiddleware);

// Call Algopix API
console.log("hello");

app.get("/algopix/:category", async (req, res) => {
  try {
    const dataFetch = await fetch(
      `https://api.algopix.com/v3/async/products/details/results?categories=${req.categoryNumber}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "X-API-KEY": "Z0KaNahIpsmhvq8260ORd3eNylUg64eKJB4pthAY",
          "X-APP-ID": "0CTyG5Ym0IDTPVhvSE5Q9r",
        },
        body: "false",
      }
    );
  } catch (err) {
    console.error(err);
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
