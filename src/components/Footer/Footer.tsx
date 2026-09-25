
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex flex-col items-center justify-between gap-3 sm:flex-row">

        
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />

          <p className="text-sm font-bold text-white sm:text-base">
            FITLOG
          </p>
        </div>

        
        <p className="text-center text-xs leading-5 text-[#6B7280] sm:text-right sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;