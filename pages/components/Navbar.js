import React from "react";
import Link from "next/link";
import nav from "../../styles/Nav.module.css";

const Navbar = () => {
  return (
    <nav className={nav.navbar_container}>
      <ul className={nav.nav_menu}>
        <li className={nav.nav_item}>
          <Link href="/">
            <a className={nav.nav_link}>Home</a>
          </Link>
        </li>

        <li className={nav.nav_item}>
          <Link href="/service/reservation">
            <a className={nav.nav_link}>Reservation</a>
          </Link>
        </li>

        <li className={nav.nav_item}>
          <Link href="/service/booking">
            <a className={nav.nav_link}>Booking</a>
          </Link>
        </li>

        <li className={nav.nav_item}>
          <Link href="/service/location">
            <a className={nav.nav_link}>Location</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
