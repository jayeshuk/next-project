import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      HomePage
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
