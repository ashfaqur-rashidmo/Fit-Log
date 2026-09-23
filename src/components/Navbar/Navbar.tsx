
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="px-3 sm:px-6 lg:px-10 py-3 border-b shadow-md">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <Image
            src="/logo.png"
            height={28}
            width={28}
            alt="FITLOG logo"
            className="w-6 h-6 sm:w-7 sm:h-7"
          />

          <p className="text-white font-bold text-sm sm:text-base">
            FITLOG
          </p>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">

          <Link
            href="/Workouts"
            className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm lg:text-base whitespace-nowrap ${
              pathname === "/Workouts"
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#9CA3AF]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/My-Plan"
            className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm lg:text-base whitespace-nowrap ${
              pathname === "/My-Plan"
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#9CA3AF]"
            }`}
          >
            My Plan
          </Link>

        </div>

        {/* Plan & Saved */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm lg:text-base whitespace-nowrap">

          <p className="text-[#9CA3AF]">
            plan <span>0</span>
          </p>

          <p className="text-[#9CA3AF]">
            saved <span>0</span>
          </p>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;

