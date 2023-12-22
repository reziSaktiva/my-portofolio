'use client'
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        path: '#about',
        title: 'About'
    },
    {
        path: '#project',
        title: 'Project'
    },
    {
        path: '#contact',
        title: 'Contact'
    },
]

export default function CostumNavbar() {
    const [navbarOpen, setNavbarOpen] = useState(true)

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="/" className="text-2xl md:text-5xl font-semibold" >
                    LOGO
                </Link>
                <div className="mobile-menu block md:hidden">
                    {
                        navbarOpen ? (
                            <button onClick={() => setNavbarOpen(false)} className=" flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(true)} className=" flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 bd:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map(({ path, title }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink href={path} title={title} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {!navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    );
}


