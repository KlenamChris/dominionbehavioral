"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <nav className="fixed flex space-x-6 px-10 w-full h-24 items-center justify-between backdrop-blur-sm">
      <Link href={"/"} className="flex items-center space-x-3">
        <Image
          alt="logo"
          width={40}
          height={20}
          src={"/dominion-logo.png"}
          className="object-contain hover:scale-110 transition-transform duration-200 w-8 h-8"
        />
        <span className="hidden font-bold text-lg md:text-3xl text-slate-900">
          Dominion Behavioral
        </span>
      </Link>
      <ul className="md:flex space-x-5 hidden">
        {links.map((link) => (
          <li
            key={link.href}
            className="px-4 rounded-full p-4 group hover:bg-white/10 transition-colors"
          >
            <Link
              href={link.href}
              className={classnames(
                {
                  "text-zinc-900": link.href === currentPath,
                  "text-white": link.href !== currentPath,
                  "hover:text-zinc-800 transition-colors": true,
                },
                "flex items-center gap-2",
              )}
            >
              {link.label}
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </Link>
          </li>
        ))}
      </ul>
      <button className="hidden md:flex border rounded-full p-3 px-6 text-white hover:bg-slate-400 transition-colors">
        Contact Us
      </button>
    </nav>
  );
};

export default NavBar;
