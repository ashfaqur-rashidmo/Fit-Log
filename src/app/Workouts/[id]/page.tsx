
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

        {/*  image  */}
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

        {/*  details */}
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

          {/*  Tags */}
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

          
          <div className="mt-4 overflow-hidden rounded-xl border border-[#242933] bg-[#151922]">

           
            <div className="flex items-center justify-between border-b border-[#242933] px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Equipment
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.equipment}
              </span>
            </div>

           
            <div className="flex items-center justify-between border-b border-[#242933] px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Difficulty
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.difficulty}
              </span>
            </div>

            
            <div className="flex items-center justify-between border-b border-[#242933] px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Sets
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.sets}
              </span>
            </div>

            
            <div className="flex items-center justify-between border-b border-[#242933] px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Reps
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.reps}
              </span>
            </div>

            
            <div className="flex items-center justify-between border-b border-[#242933] px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Duration
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.duration} min
              </span>
            </div>

            
            <div className="flex items-center justify-between border-b border-[#242933] px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Calories
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            
            <div className="flex items-center justify-between px-4 py-2.5">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[#8B929E]">
                Rating
              </span>

              <span className="text-xs text-[#E5E7EB]">
                {workout.rating}
              </span>
            </div>

          </div>

          
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