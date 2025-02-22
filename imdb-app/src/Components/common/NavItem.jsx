"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const NavItem = ({title,param}) => {

    const searchParams= useSearchParams();
    const genre= searchParams.get('genre');
  return (
    <>
      <Link 
      className={
        `hover:text-amber-500 font-semibold
        ${genre===param? 'undeline underline-offset-8 decoration-4 decoration-amber-400 rounded-lg':''}`}
      href={`/?genre=${param}`}>{title}</Link>
    </>
  )
}

export default NavItem;
