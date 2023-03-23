import React from "react";
import Header from "../Header";
import s from "./Container.module.css";

export default function Container() {
  return (
    <div className={s.container}>
      <Header />
    </div>
  );
}
