"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export const Navbar = () => {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");
  console.log("navbar", todosFilter);

  return (
    <nav className="navbar">
      <Link href="/" className={todosFilter == null ? "active" : "unactive"}>
        All
      </Link>
      <Link
        href="/?todos=active"
        className={todosFilter == "active" ? "active" : "unactive"}
      >
        Active
      </Link>
      <Link
        href="/?todos=completed"
        className={todosFilter == "completed" ? "active" : "unactive"}
      >
        Completed
      </Link>
    </nav>
  );
};
