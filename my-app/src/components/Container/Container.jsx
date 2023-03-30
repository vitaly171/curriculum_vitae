import React from "react";
import About from "../About";
import Education from "../Education";
import Header from "../Header";
import Experience from "../Experience";
import s from "./Container.module.css";

export default function Container() {
  return (
    <div className={s.container}>
      <Header />
      <About />
      <Education />
      <Experience />
    </div>
  );
}
