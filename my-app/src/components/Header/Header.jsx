import React from "react";
import s from "./Header.module.css";

export default function Header() {
  return (
    <div className={s.header__container}>
      <a href="/">Logo</a>
      <nav className={s.header__nav}>
        <ul className={s.header__list}>
          <li className={s.header__item}>
            <a href="/">About Me</a>
          </li>
          <li className={s.header__item}>
            <a href="/">EDUCATION</a>
          </li>
          <li className={s.header__item}>
            <a href="/">EXPERIENCE</a>
          </li>
          <li className={s.header__item}>
            <a href="/">TECH SKILLS</a>
          </li>
          <li className={s.header__item}>
            <a href="/">HOBBIES</a>
          </li>
          <li className={s.header__item}>
            <a href="/">LANGUAGE SKILLS</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
