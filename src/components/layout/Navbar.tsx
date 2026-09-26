"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/content/navigation";
import { profile } from "@/content/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy-800/60 bg-navy-950/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="font-mono text-lg font-bold text-accent"
        >
          {"<TS />"}
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                <span className="text-accent">{"// "}</span>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={profile.links.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-accent px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
            >
              CV
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="font-mono text-sm text-accent md:hidden"
        >
          {isOpen ? "close" : "menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul
          id="mobile-menu"
          className="flex flex-col gap-6 border-t border-navy-800/60 bg-navy-950 px-6 py-8 md:hidden"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeMenu}
                className="font-mono text-base text-muted hover:text-accent"
              >
                <span className="text-accent">{"// "}</span>
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={profile.links.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-base text-accent"
            >
              Download CV
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}