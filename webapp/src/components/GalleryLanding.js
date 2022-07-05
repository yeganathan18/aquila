import React from "react";
import GalleryCard from "./GalleryCard";
import { CardData } from "./CardData";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Grow } from "@mui/material";

const CardLister = (year) => {
  return CardData.map((card, index) => {
    if (card.year === year) {
      return (
        <GalleryCard
          key={index}
          title={card.title}
          description={card.description}
          imgSrc={card.imgSrc}
          href={card.href}
        />
      );
    }
  });
};
const HandleClick = (id) => {
    
    if (id === "all") {
      document.getElementById("2020").style.display = "block";
      document.getElementById("2021").style.display = "block";
      document.getElementById("2022").style.display = "block";
  }
    else if (id === "2020") {
      document.getElementById("2020").style.display = "block";
      document.getElementById("2021").style.display = "none";
      document.getElementById("2022").style.display = "none";
    }
    else if (id === "2021") {
      document.getElementById("2020").style.display = "none";
      document.getElementById("2021").style.display = "block";
      document.getElementById("2022").style.display = "none";
    }
    else if (id === "2022") {
      document.getElementById("2020").style.display = "none";
      document.getElementById("2021").style.display = "none";
      document.getElementById("2022").style.display = "block";
    }
  }
const Landing = () => {

  return (
    <div className="max-w-screen-lg mx-auto px-3 items-center justify-center flex flex-col">
      <div className="flex gap-6 pt-12 flex-wrap m-2">
        <Button
          variant="contained"
          className="focus:outline-none focus:ring focus:ring-300"
          onClick={() => HandleClick("all")}
        >
          <p>All</p>
        </Button>
        <Button
          variant="contained"
          className="focus:outline-none focus:ring focus:ring-300"
          onClick={() => HandleClick("2020")}
        >
          <p>Events-2020</p>
        </Button>
        <Button
          variant="contained"
          className="focus:outline-none focus:ring focus:ring-300"
          onClick={() => HandleClick("2021")}
        >
          <p>Events-2021</p>
        </Button>
        <Button
          variant="contained"
          className="focus:outline-none focus:ring focus:ring-300"
          onClick={() => HandleClick("2022")}
        >
          <p>Events-2022</p>
        </Button>
      </div>
      <div
        className="bg-slate-800 p-4 shadow-lg rounded-lg overflow-hidden visible"
        id="2020"
      >
        <Typography variant="h4" color="grey" className="m-2">
          Events-2020
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CardLister(2020)}
        </div>
      </div>
      <div
        className="bg-slate-800 p-4 shadow-lg rounded-lg overflow-hidden visible"
        id="2021"
      >
        <Typography variant="h4" color="grey" className="m-2">
          Events-2021
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CardLister(2021)}
        </div>
      </div>
      <div
        className="bg-slate-800 p-4 shadow-lg rounded-lg overflow-hidden visible"
        id="2022"
      >
        <Typography variant="h4" color="grey" className="m-2">
          Events-2022
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CardLister(2022)}
        </div>
      </div>
    </div>
  );
};

export default Landing;
