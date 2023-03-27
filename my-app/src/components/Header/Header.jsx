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
              Education
            </a>
          </li>
          <li className={s.header__item}>
            <a className={s.header__item__link} href="/">
              Experience
            </a>
          </li>
          <li className={s.header__item}>
            <a className={s.header__item__link} href="/">
              Tech Skills
            </a>
          </li>
          <li className={s.header__item}>
            <a className={s.header__item__link} href="/">
              Hobbies
            </a>
          </li>
          <li className={s.header__item}>
            <a className={s.header__item__link} href="/">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
