import React, { useState } from "react";
import style from "../styles/Navbar.module.css";
import {
  MDBBtn
} from 'mdb-react-ui-kit';
function Navbar() {
  return (
    <>
      <nav className={style.nav}>
        <div className={style.nav_header}>
          <div className={style.nav_title}>Peer2Peer</div>
        </div>
        <div className={style.nav_btn}>
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <ul className={style.nav_list}>
          <li className={style.list_item_nav}>
            <a href="/">Home</a>
          </li>
          <li className={style.list_item_nav}>
            <a href="/additem">Add Item</a>
          </li>
          <li className={style.list_item_nav}>
            <a href="/myitems">My Items</a>
          </li>
          <li className={style.list_item_nav}>
            <a href="/login">Login</a>
          </li>
          <li className={style.list_item_nav}>
            <a href="#">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
