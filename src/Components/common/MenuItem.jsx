import Link from 'next/link';
import React from 'react';

const MenuItem = ({title,address,Icon}) => {
  return (
    <>
       <Link href={address} className='flex flex-row gap-1 hover:text-amber-500'>
       <Icon className="text-2xl sm:hidden" />
       <p className='uppercase hidden text-sm sm:inline'>{title}</p>
       </Link>
    </>
  )
}

export default MenuItem
