import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="d-flex justify-content-center gap-5 fs-4">
        <Link href="/Home">
          <a>Home</a>
        </Link>
        <Link href="/Experience">
          <a>Experience</a>
        </Link>
        <Link href="/Contact">
          <a>Contact</a>
        </Link>
        <Link href="/lab-07">
          <a>Todolist</a>
        </Link>
      </div>
    </div>
  );
}
