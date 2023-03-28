import React from "react";
import s from "./About.module.css";

export default function About() {
  return (
    <section className={s.about__container}>
      <h1>
        I'm <br></br>
        Vitaly <br></br>Ivlev<span className={s.dot}>.</span>
      </h1>
      <h2>
        Junior <br></br>Front-End<br></br>Developer
      </h2>
      <div className={s.about__story}>
        <div className={s.logo}>
          <a className={s.logo__link} href="/">
            V
          </a>
        </div>
        <p className={s.text} id="about">
          I am inspired by IT innovations. I am skilled in Node.js, HTML/CSS,
          JavaScript, and React. I don't stop there; I constantly work to
          improve my abilities and keep up with emerging technologies. I am keen
          on following developments in the world of cryptocurrency and the
          crypto market. Adept at contributing to a highly collaborative
          environment, finding solutions, and determining customer satisfaction.
        </p>
      </div>
    </section>
  );
}
