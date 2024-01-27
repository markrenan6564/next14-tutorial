"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.link_container} ${
        pathName === item.path && styles.active_link_container
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
