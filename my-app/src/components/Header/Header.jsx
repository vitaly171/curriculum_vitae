import React from "react";
import s from "./Header.module.css";

export default function Header() {
  return (
    <div className={s.header__container}>
      <div className={s.logo}>
        <a className={s.logo__link} href="/">
          V
        </a>
      </div>

      <nav className={s.header__nav}>
        <ul className={s.header__list}>
          <li className={s.header__item}>
            <a className={s.header__item__link} href="/">
              About Me
            </a>
          </li>
          <li className={s.header__item}>
            <a className={s.header__item__link} href="/">
              EDUCATION
            </a>
          </li>
          <li className={s.header__item}>
            <a className={s.header__item__link} href="/">
              EXPERIENCE
            </a>
          </li>
          <li className={s.header__item}>
            <a className={s.header__item__link} href="/">
              TECH SKILLS
            </a>
          </li>
          <li className={s.header__item}>
            <a className={s.header__item__link} href="/">
              HOBBIES
            </a>
          </li>
          <li className={s.header__item}>
            <a className={s.header__item__link} href="/">
              LANGUAGE SKILLS
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
