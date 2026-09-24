

// import { GymCardTypes } from "@/types/JymCardTypes";
// import Image from "next/image";
// import React from "react";
// import { IoSaveOutline } from "react-icons/io5";
// import { SlCalender } from "react-icons/sl";
// import { notFound } from "next/navigation";

// type Props = {
//   params: Promise<{
//     id: string;
//   }>;
// };

// const getGym = async (): Promise<GymCardTypes[]> => {
//   const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch workout data");
//   }

//   const data: GymCardTypes[] = await res.json();

//   return data;
// };

// const CardDetailPage = async ({ params }: Props) => {
//   const { id } = await params;

//   const gymData = await getGym();

//   const workout = gymData.find(
//     (workout) => String(workout.id) === String(id)
//   );

//   // If workout does not exist
//   if (!workout) {
//     notFound();
//   }

//   return (
//     <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

//       <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

//         {/* Workout Image */}
//         <div className="w-full">
//           <Image
//             src={workout.image}
//             alt={workout.name}
//             width={588}
//             height={735}
//             priority
//             className="h-[400px] w-full rounded-2xl object-cover sm:h-[500px] lg:h-[550px]"
//           />
//         </div>

//         {/* Workout Information */}
//         <div className="flex flex-col space-y-6">

//           {/* Title & Description */}
//           <div className="space-y-3">
//             <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
//               {workout.name}
//             </h1>

//             <p className="leading-7 text-[#9CA3AF]">
//               {workout.description}
//             </p>
//           </div>

//           {/* Muscle Groups */}
//           <div className="flex flex-wrap gap-2">
//             {workout.muscleGroups.map((muscle) => (
//               <span
//                 key={muscle}
//                 className="rounded-full bg-[#B7F000] px-3 py-1 text-xs font-bold uppercase text-black"
//               >
//                 {muscle}
//               </span>
//             ))}
//           </div>

//           {/* Workout Information */}
//           <div className="grid grid-cols-2 gap-4 rounded-xl border border-[#374151] bg-[#151922] p-5">
//   <div>
//     <p className="text-xs text-[#6B7280]">EQUIPMENT</p>
//     <p className="mt-1 text-sm text-[#E5E7EB]">
//       {workout.equipment}
//     </p>
//   </div>

//   <div>
//     <p className="text-xs text-[#6B7280]">DIFFICULTY</p>
//     <p className="mt-1 text-sm text-[#E5E7EB]">
//       {workout.difficulty}
//     </p>
//   </div>

//   <div>
//     <p className="text-xs text-[#6B7280]">SETS</p>
//     <p className="mt-1 text-sm text-[#E5E7EB]">
//       {workout.sets}
//     </p>
//   </div>

//   <div>
//     <p className="text-xs text-[#6B7280]">REPS</p>
//     <p className="mt-1 text-sm text-[#E5E7EB]">
//       {workout.reps}
//     </p>
//   </div>

//   <div>
//     <p className="text-xs text-[#6B7280]">DURATION</p>
//     <p className="mt-1 text-sm text-[#E5E7EB]">
//       {workout.duration} min
//     </p>
//   </div>

//   <div>
//     <p className="text-xs text-[#6B7280]">CALORIES</p>
//     <p className="mt-1 text-sm text-[#E5E7EB]">
//       {workout.caloriesBurned} kcal
//     </p>
//   </div>

//   <div>
//     <p className="text-xs text-[#6B7280]">RATING</p>
//     <p className="mt-1 text-sm text-[#E5E7EB]">
//       ⭐ {workout.rating}
//     </p>
//   </div>
// </div>

//           {/* Instructions */}
//           <div className="space-y-3">
//   <h2 className="font-semibold text-white">
//     INSTRUCTIONS
//   </h2>

//   <ol className="space-y-3">
//     {workout.instructions.map((instruction, index) => (
//       <li
//         key={index}
//         className="flex gap-3 text-sm leading-6 text-[#D1D5DB]"
//       >
//         <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#9CA3AF] text-xs font-bold">
//           {index + 1}.
//         </span>

//         <span className="text-[#D1D5DB]">{instruction}</span>
//       </li>
//     ))}
//   </ol>
// </div>

//           {/* Action Buttons */}
//           <div className="flex flex-col gap-3 sm:flex-row">

//             <button
//               type="button"
//               className="flex items-center justify-center gap-2 rounded-md bg-[#CCFF00] px-4 py-2.5 font-medium text-[#0F1115] transition hover:bg-[#B7F000]"
//             >
//               <SlCalender />
//               Add to today's plan
//             </button>

//             <button
//               type="button"
//               className="flex items-center justify-center gap-2 rounded-lg border border-[#374151] px-4 py-2.5 text-[#E5E7EB] transition hover:bg-[#1A2312]"
//             >
//               <IoSaveOutline />
//               Save for later
//             </button>

//           </div>

//         </div>
//       </div>
//     </main>
//   );
// };

// export default CardDetailPage;



import { GymCardTypes } from "@/types/JymCardTypes";
import Image from "next/image";
import React from "react";
import { IoSaveOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { notFound } from "next/navigation";
import AddToPlanButton from "@/components/Buttons/AddToPlanButton";
import AddToSaveButton from "@/components/Buttons/AddToSaveButton";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const getGym = async (): Promise<GymCardTypes[]> => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const data: GymCardTypes[] = await res.json();

  return data;
};

const CardDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  const gymData = await getGym();

  const workout = gymData.find(
    (workout) => String(workout.id) === String(id)
  ) as GymCardTypes;

  if (!workout) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-10">

      {/* Main Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

        {/*  IMAGE  */}
        <div className="w-full">
          <Image
            src={workout.image}
            alt={workout.name}
            width={588}
            height={735}
            priority
            className="aspect-4/5 w-full rounded-xl object-cover"
          />
        </div>

        {/*  DETAILS */}
        <div className="flex flex-col">

          {/* Title + Description */}
          <div>
            <h1 className="text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
              {workout.name}
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-5 text-[#9CA3AF]">
              {workout.description}
            </p>
          </div>

          {/* Muscle Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/*  SPECS  */}
          <div className="mt-4 overflow-hidden rounded-xl border border-[#242933] bg-[#151922]">

            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-[#242933] px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Equipment
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-[#242933] px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Difficulty
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-[#242933] px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Sets
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.sets}
              </span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-[#242933] px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Reps
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.reps}
              </span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-[#242933] px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Duration
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-[#242933] px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Calories
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Rating
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.rating}
              </span>
            </div>

          </div>

          {/* INSTRUCTIONS */}
          <div className="mt-5">

            <h2 className="text-xs font-bold uppercase tracking-wide text-white">
              Instructions
            </h2>

            <ol className="mt-3 space-y-2">

              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[11px] leading-5 text-[#B8BDC6]"
                >
                  <span className="shrink-0 text-[#9CA3AF]">
                    {index + 1}.
                  </span>

                  <span>
                    {instruction}
                  </span>
                </li>
              ))}

            </ol>

          </div>

          {/*  ACTION BUTTONS */}
          <div className="mt-5 flex flex-wrap gap-2">

            <AddToPlanButton workout={workout}/>

            <AddToSaveButton workout={workout}/>

          </div>

        </div>
      </div>
    </main>
  );
};

export default CardDetailPage;