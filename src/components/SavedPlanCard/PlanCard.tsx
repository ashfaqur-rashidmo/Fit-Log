// "use client";

// import { GymCardTypes } from "@/types/JymCardTypes";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FiClock, FiStar } from "react-icons/fi";
// import { PiFire } from "react-icons/pi";
// import { MdOutlineDone } from "react-icons/md";
// import { IoClose } from "react-icons/io5";

// type PlanCardProps = {
//   plan: GymCardTypes;
//   isTodayPlan?: boolean;
//   onRemove: (id: number) => void;
// };

// const PlanCard = ({
//   plan,
//   isTodayPlan = false,
//   onRemove,
// }: PlanCardProps) => {
//   return (
//     <div className="flex items-center rounded-xl border border-[#242933] bg-[#13161D] p-4">

//       {/* Image */}
//       <Image
//         src={plan.image}
//         alt={plan.name}
//         width={100}
//         height={100}
//         className="h-[100px] w-[100px] shrink-0 rounded-lg object-cover"
//       />

//       {/* Information */}
//       <div className="ml-4 flex flex-1 flex-col justify-center">

//         <h3 className="text-lg font-semibold text-white">
//           {plan.name}
//         </h3>

//         <p className="text-sm text-[#8A92A0]">
//           {plan.equipment}
//         </p>

//         {/* Workout information */}
//         <div className="mt-2 flex flex-row gap-4">

//           {/* Duration */}
//           <div className="flex items-center">
//             <FiClock className="mr-1 text-[#CCFF00]" />

//             <p className="text-sm text-[#8A92A0]">
//               {plan.duration} mins
//             </p>
//           </div>

//           {/* Calories */}
//           <div className="flex items-center">
//             <PiFire className="mr-1 text-[#CCFF00]" />

//             <p className="text-sm text-[#8A92A0]">
//               {plan.caloriesBurned} Kcal
//             </p>
//           </div>

//           {/* Rating */}
//           <div className="flex items-center">
//             <FiStar className="mr-1 text-[#CCFF00]" />

//             <p className="text-sm text-[#8A92A0]">
//               {plan.rating}
//             </p>
//           </div>

//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="ml-auto flex shrink-0 items-center gap-3">

//         {/* Details */}
//         <Link
//           href={`/Workouts/${plan.id}`}
//           className="rounded-md border border-[#374151] px-3 py-1.5 text-sm text-[#E5E7EB] hover:border-[#CCFF00] hover:text-[#CCFF00]"
//         >
//           View Details
//         </Link>

//         {/* Mark as Done - only Today's Plan */}
//         {isTodayPlan && (
//           <button
//             type="button"
//             className="flex items-center gap-1 rounded-md border border-[#374151] bg-[#CCFF00] px-3 py-1.5 text-sm text-black hover:bg-[#B8E600]"
//           >
//             <MdOutlineDone />
//             Mark as Done
//           </button>
//         )}

//         {/* Remove */}
//         <button
//           type="button"
//           onClick={() => onRemove(plan.id)}
//           className="text-[#6B7280] transition hover:text-red-500"
//           aria-label={`Remove ${plan.name}`}
//         >
//           <IoClose size={20} />
//         </button>

//       </div>
//     </div>
//   );
// };

// export default PlanCard;


"use client";

import { GymCardTypes } from "@/types/JymCardTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiClock, FiStar } from "react-icons/fi";
import { PiFire } from "react-icons/pi";
import { MdOutlineDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";

type PlanCardProps = {
  plan: GymCardTypes;
  isTodayPlan?: boolean;
  onRemove: (id: number) => void;
};

const PlanCard = ({
  plan,
  isTodayPlan = false,
  onRemove,
}: PlanCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#242933] bg-[#13161D] p-4 sm:flex-row sm:items-center">

      {/* Image */}

      <Image
        src={plan.image}
        alt={plan.name}
        width={100}
        height={100}
        className="h-[100px] w-[100px] shrink-0 rounded-lg object-cover"
      />

      {/* Information */}

      <div className="flex flex-1 flex-col justify-center sm:ml-4">

        <h3 className="text-lg font-semibold text-white">
          {plan.name}
        </h3>

        <p className="text-sm text-[#8A92A0]">
          {plan.equipment}
        </p>

        {/* Workout information */}

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">

          {/* Duration */}

          <div className="flex items-center">
            <FiClock className="mr-1 text-[#CCFF00]" />

            <p className="text-sm text-[#8A92A0]">
              {plan.duration} mins
            </p>
          </div>

          {/* Calories */}

          <div className="flex items-center">
            <PiFire className="mr-1 text-[#CCFF00]" />

            <p className="text-sm text-[#8A92A0]">
              {plan.caloriesBurned} Kcal
            </p>
          </div>

          {/* Rating */}

          <div className="flex items-center">
            <FiStar className="mr-1 text-[#CCFF00]" />

            <p className="text-sm text-[#8A92A0]">
              {plan.rating}
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}

      <div className="flex w-full shrink-0 items-center gap-2 sm:ml-auto sm:w-auto sm:gap-3">

        {/* Details */}

        <Link
          href={`/Workouts/${plan.id}`}
          className="flex-1 rounded-md border border-[#374151] px-3 py-1.5 text-center text-sm text-[#E5E7EB] hover:border-[#CCFF00] hover:text-[#CCFF00] sm:flex-none"
        >
          View Details
        </Link>

        {/* Mark as Done */}

        {isTodayPlan && (
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-1 rounded-md border border-[#374151] bg-[#CCFF00] px-3 py-1.5 text-sm text-black hover:bg-[#B8E600] sm:flex-none"
          >
            <MdOutlineDone />
            Mark as Done
          </button>
        )}

        {/* Remove */}

        <button
          type="button"
          onClick={() => onRemove(plan.id)}
          className="shrink-0 text-[#6B7280] transition hover:text-red-500"
          aria-label={`Remove ${plan.name}`}
        >
          <IoClose size={20} />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;

