"use client";

import React from "react";
import styles from "./navbar.module.css";
import NavLink from "./NavLink";
import Image from "next/image";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = React.useState(false);

  // temporary, for testing purposes
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.nav_container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
        {/* Authentication */}
        {session ? (
          <>
            {/* Shows admin button if is admin */}
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      {/* Hamburger menu */}
      <Image
        src="/menu.png"
        alt="menu button"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menu_button}
      />
      {open && (
        <div className={styles.mobile_links}>
          {links.map((link) => (
            <NavLink key={link.title} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
