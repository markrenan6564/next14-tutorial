import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>Page not found.</h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
      <Link href={"/"}>Return to Home</Link>
    </div>
  );
};

export default NotFound;
