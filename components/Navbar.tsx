"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    "Products",
    "Pricing",
    "Clients",
    "Resources",
    "Documentation",
    "Enterprise",
  ];

  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <Link href="/">
        <aside className="flex items-center gap-[2px]">
          <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E2CBFF] to-[#393BB2]">
            Def- &#10749;&#10748;
          </p>
        </aside>
      </Link>

      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#E2CBFF] transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <aside className="flex items-center gap-4">
        <Link
          href="/contact"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Contact Us
          </span>
        </Link>
        <MenuIcon className="md:hidden text-white hover:text-[#E2CBFF] transition-colors duration-300" />
      </aside>
    </header>
  );
};

export default Navbar;
