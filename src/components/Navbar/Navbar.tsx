
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useContext } from "react";
// import { usePathname } from "next/navigation";
// import { PlanContext } from "@/Context/PlanContext";

// const Navbar = () => {
//   const pathname = usePathname();
//   const { todayPlan, savedPlan } = useContext(PlanContext);

//   return (
//     <nav className="px-3 sm:px-6 lg:px-10 py-3 border-b shadow-md">
//       <div className="flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          
//           <Image
//             src="/logo.png"
//             height={28}
//             width={28}
//             alt="FITLOG logo"
//             className="w-6 h-6 sm:w-7 sm:h-7"
//           />
          
//            <Link href="/">
//           <p className="text-white font-bold text-sm sm:text-base">
//             FITLOG
//           </p>
//           </Link>
//         </div>

//         {/* Nav Links */}
//         <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">

//           <Link
//             href="/"
//             className="bg-[#1A2312] text-[#C2F800] px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm lg:text-base whitespace-nowrap"
//           >
//             Workouts
//           </Link>

//           <Link
//             href="/My-Plan"
//             className={`px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm lg:text-base whitespace-nowrap ${
//               pathname === "/My-Plan"
//                 ? "bg-[#1A2312] text-[#C2F800]"
//                 : "text-[#9CA3AF]"
//             }`}
//           >
//             My Plan
//           </Link>

//         </div>

//         {/* Plan & Saved */}
//         <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm lg:text-base whitespace-nowrap">

//           <p className="text-[#9CA3AF]">
//             plan <span className="bg-[#C2F800] text-[#000000] rounded-full px-0.5 py-0.1 ml-1">
//               {todayPlan.length}
//             </span>
//           </p>

//           <p className="text-[#9CA3AF]">
//             saved <span className="bg-[#2D313B] text-[#D1D5DB] rounded-full px-0.5 py-0.1 ml-1">
//               {savedPlan.length}
//             </span>
//           </p>

//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;



"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { PlanContext } from "@/Context/PlanContext";

const Navbar = () => {
  const pathname = usePathname();

  const { todayPlan, savedPlan } = useContext(PlanContext);

  return (
    <nav className="border-b border-[#242933] px-3 py-3 shadow-md sm:px-6 lg:px-10">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1 sm:gap-2"
        >
          <Image
            src="/logo.png"
            height={28}
            width={28}
            alt="FITLOG logo"
            className="h-6 w-6 sm:h-7 sm:w-7"
          />

          <p className="text-sm font-bold text-white sm:text-base">
            FITLOG
          </p>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">

          <Link
            href="/"
            className={`rounded-full px-2 py-1 text-xs whitespace-nowrap sm:px-3 sm:py-1.5 sm:text-sm lg:px-4 lg:text-base ${
              pathname === "/"
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#9CA3AF]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/My-Plan"
            className={`rounded-full px-2 py-1 text-xs whitespace-nowrap sm:px-3 sm:py-1.5 sm:text-sm lg:px-4 lg:text-base ${
              pathname === "/My-Plan"
                ? "bg-[#1A2312] text-[#C2F800]"
                : "text-[#9CA3AF]"
            }`}
          >
            My Plan
          </Link>

        </div>

        {/* Plan & Saved links*/}
        <div className="flex items-center gap-2 text-xs whitespace-nowrap sm:gap-3 sm:text-sm lg:gap-4 lg:text-base">

          {/* Plan link*/}
          <Link
            href="/My-Plan"
            className="flex items-center gap-1 text-[#9CA3AF] transition hover:text-white"
          >
            <span>plan</span>

            <span className="rounded-full bg-[#C2F800] px-1.5 py-0.5 text-xs font-semibold text-black">
              {todayPlan.length}
            </span>
          </Link>

          {/* Saved link*/}
          <Link
            href="/My-Plan"
            className="flex items-center gap-1 text-[#9CA3AF] transition hover:text-white"
          >
            <span>saved</span>

            <span className="rounded-full border border-[#4B5563] px-1.5 py-0.5 text-xs text-[#D1D5DB]">
              {savedPlan.length}
            </span>
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;