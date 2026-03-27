"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from 'classnames';
import React from "react";

const NavBar = () => {

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ];

  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 px-5 mb-5 border-b h-14 items-center">
      <Link href={"/"}>Logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={classnames({
                'text-zinc-900': link.href === currentPath,
                'text-zinc-500': link.href !== currentPath,
                'hover:text-zinc-800 transition-colors': true,
            })}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <button>Contact Us</button>
    </nav>
  );
};

export default NavBar;
