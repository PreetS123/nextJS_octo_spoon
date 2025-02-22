"use client"
import error from '@/app/error';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

const NavItemContent = ({ title, param }) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');

    return (
        <Link 
            className={`hover:text-amber-500 font-semibold
            ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-400 rounded-lg' : ''}`}
            href={`/?genre=${param}`}
        >
            {title}
        </Link>
    );
};

const NavItem = (props) => (
    <Suspense fallback={error}>
        <NavItemContent {...props} />
    </Suspense>
);

export default NavItem;
