// "use client";
// import  { PlanContext } from '@/Context/PlanContext';
// import { GymCardTypes } from '@/types/JymCardTypes';
// import React, { useContext, useState } from 'react';

// const myPlanPage = () => {

//     const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "rating">("Duration");
//     const {todayPlan, savedPlan} = useContext(PlanContext);

//     console.log("SortBy: ",sortBy);
//     console.log("Today's Plan: ",todayPlan);
//     console.log("Saved Plan: ",savedPlan);

//    const sortPlan = (plan: GymCardTypes[]) => {
//    const sortedPlans = [...plan];

//    if (sortBy === "Duration") {
//      sortedPlans.sort((a, b) => b.duration - a.duration);
//    } else if (sortBy === "Calories") {
//      sortedPlans.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
//    }
//     else if (sortBy === "rating") {
//         sortedPlans.sort((a, b) => b.rating - a.rating);
//     }
//     return sortedPlans;
//   };

//   const sortedTodayPlan = sortPlan(todayPlan);
//   const sortedSavedPlan = sortPlan(savedPlan);

//   console.log("Sorted Today's Plan: ",sortedTodayPlan);
//   console.log("Sorted Saved Plan: ",sortedSavedPlan);

//     return (
//         <div className='px-10 py-4 sm:px-6 lg:px-8'>
           
//            <div className='mb-4 space-y-2 sm:space-y-3 lg:space-y-2'>
//             <h2 className='text-[#FFFFFF] text-3xl uppercase'>my plan</h2>
//             <p className='text-[#8A92A0] text-sm'>Cap of five lifts for today. Finish them, then load more.</p>

//             <div className='mt-4 flex items-center justify-left gap-96 rounded-xl border border-[#242933] bg-[#13161D] px-4 py-2.5'>

//                 <div>
//                 <p className='text-[#8A92A0]'>Exercises</p>
//                 <span className='text-[#CCFF00]'>0</span>
//                 </div>
                
                 
//                  <div>
//                 <p className='text-[#8A92A0]'>Minutes</p>
//                 <span className='text-[#FFFFFF]'>0</span>
//                  </div>
                

//                 <div>
//                 <p className='text-[#8A92A0]'>Calories</p>
//                 <span className='text-[#FFFFFF]'>0</span>
//                 </div>

                
//             </div>
//            </div>

//             {/* name of each tab group should be unique */}
          
// <div className="tabs tabs-border">
//   <input type="radio" 
//   name="my_tabs_2" 
//   className="tab" 
//   aria-label="Today's Plan" />

//   <div className="tab-content border-base-300 bg-base-100 p-10">
//     {
//         sortedTodayPlan.length > 0 ? (
//             <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
//             {
//                 sortedTodayPlan.map((plan, index) => (
//                     <div key={index} className='rounded-xl border border-[#242933] bg-[#13161D] p-4'>
//                         <h3 className='text-[#FFFFFF] text-lg font-semibold'>{plan.name}</h3>
//                         <p className='text-[#8A92A0] text-sm'>Duration: {plan.duration} mins</p>
//                         <p className='text-[#8A92A0] text-sm'>Calories Burned: {plan.caloriesBurned}</p>
//                         <p className='text-[#8A92A0] text-sm'>Rating: {plan.rating}</p>
//                     </div>
//                 ))
//             }
//             </div>
//         ) : (
//             <p className='text-[#8A92A0]'>No exercises in today's plan.</p>
//         )
//     }
//     </div>

//   <input type="radio" 
//   name="my_tabs_2" 
//   className="tab" 
//   aria-label="Tab 2" 
//   defaultChecked />

//   <div className="tab-content border-base-300 bg-base-100 p-10">
//     {
//         sortedSavedPlan.length > 0 ? (
//             <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
//             {
//                 sortedSavedPlan.map((plan, index) => (
//                     <div key={index} className='rounded-xl border border-[#242933] bg-[#13161D] p-4'>
//                         <h3 className='text-[#FFFFFF] text-lg font-semibold'>{plan.name}</h3>
//                         <p className='text-[#8A92A0] text-sm'>Duration: {plan.duration} mins</p>
//                         <p className='text-[#8A92A0] text-sm'>Calories Burned: {plan.caloriesBurned}</p>
//                         <p className='text-[#8A92A0] text-sm'>Rating: {plan.rating}</p>
//                     </div>
//                 ))
//             }
//             </div>
//         ) : (
//             <p className='text-[#8A92A0]'>No exercises saved for later.</p>
//         )
//     }
//     </div>

  
// </div>
//         </div>
//     );
// };

// export default myPlanPage;







"use client";

import { PlanContext } from "@/Context/PlanContext";
import { GymCardTypes } from "@/types/JymCardTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FiClock } from "react-icons/fi";
import { PiFire } from "react-icons/pi";
import { FiStar } from "react-icons/fi";

const MyPlanPage = () => {
  const [sortBy, setSortBy] = useState<
    "Duration" | "Calories" | "rating"
  >("Duration");

  const { todayPlan, savedPlan } = useContext(PlanContext);

  const sortPlan = (plan: GymCardTypes[]) => {
    const sortedPlans = [...plan];

    if (sortBy === "Duration") {
      sortedPlans.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "Calories") {
      sortedPlans.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    } else if (sortBy === "rating") {
      sortedPlans.sort((a, b) => b.rating - a.rating);
    }

    return sortedPlans;
  };

  const sortedTodayPlan = sortPlan(todayPlan);
  const sortedSavedPlan = sortPlan(savedPlan);

  return (
    <div className="px-4 py-4 sm:px-6 lg:px-8">
      <div className="mb-4 space-y-2">
        <h2 className="text-3xl uppercase text-white">
          My Plan
        </h2>

        <p className="text-sm text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Statistics */}
        <div className="mt-4 grid grid-cols-3 rounded-xl border border-[#242933] bg-[#13161D] px-4 py-2.5">
          <div>
            <p className="text-sm text-[#8A92A0]">
              Exercises
            </p>

            <span className="text-[#CCFF00]">
              {todayPlan.length}
            </span>
          </div>

          <div>
            <p className="text-sm text-[#8A92A0]">
              Minutes
            </p>

            <span className="text-white">
              {todayPlan.reduce(
                (total, plan) => total + plan.duration,
                0
              )}
            </span>
          </div>

          <div>
            <p className="text-sm text-[#8A92A0]">
              Calories
            </p>

            <span className="text-white">
              {todayPlan.reduce(
                (total, plan) => total + plan.caloriesBurned,
                0
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-border w-full">

        {/*  TODAY'S PLAN TAB  */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-[#8A92A0] checked:text-[#CCFF00]"
          aria-label="Today's Plan"
          defaultChecked
        />

        <div className="tab-content border-[#242933] bg-[#0F1115] p-5 sm:p-8">

          {sortedTodayPlan.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-1">

              {sortedTodayPlan.map((plan) => (
                <div
                  key={plan.id}
                  className="flex rounded-xl border border-[#242933] bg-[#13161D] p-4"
                >
                    
                        <Image src={plan.image} alt={plan.name} width={100} height={100} />
                  
                  <div className="ml-4 flex flex-col justify-center">

                    
                  <h3 className="text-lg font-semibold text-white">
                    {plan.name}
                  </h3>
                  
                  <p className="text-sm text-[#8A92A0]">
                    {plan.equipment}
                  </p>

                    <div className="mt-2 space-y-1 flex flex-row">
                     <FiClock className="text-[#CCFF00] mr-1" />
                    <p className="text-sm text-[#8A92A0]">
                     {plan.duration} mins
                  </p>

                  <p className="text-sm text-[#8A92A0]">
                    <PiFire className="text-[#CCFF00]"/> {plan.caloriesBurned} Kcal
                  </p>

                  <p className="text-sm text-[#8A92A0]">
                    <FiStar className="text-[#CCFF00]"/> {plan.rating}
                  </p>
                    </div>

                 
                    </div>
                    
                    

                </div>
              ))}

            </div>
          ) : (

            /* Empty State */
            <div className="flex min-h-[300px] flex-col items-center justify-center text-center">

              <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                Nothing Here Yet
              </h3>

              <p className="mt-2 max-w-md text-sm text-[#8A92A0]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/Workouts"
                className="mt-5 rounded-lg bg-[#CCFF00] px-5 py-2.5 text-sm font-semibold text-[#0F1115] transition hover:bg-[#B8E600]"
              >
                Go to workouts
              </Link>

            </div>
          )}

        </div>

        {/*  SAVED TAB  */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-[#8A92A0] checked:text-[#CCFF00]"
          aria-label="Saved"
        />

        <div className="tab-content border-[#242933] bg-[#0F1115] p-5 sm:p-8">

          {sortedSavedPlan.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {sortedSavedPlan.map((plan) => (
                <div
                  key={plan.id}
                  className="rounded-xl border border-[#242933] bg-[#13161D] p-4"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {plan.name}
                  </h3>

                  <p className="text-sm text-[#8A92A0]">
                    Duration: {plan.duration} mins
                  </p>

                  <p className="text-sm text-[#8A92A0]">
                    Calories Burned: {plan.caloriesBurned}
                  </p>

                  <p className="text-sm text-[#8A92A0]">
                    Rating: {plan.rating}
                  </p>
                </div>
              ))}

            </div>
          ) : (

            /* Empty State */
            <div className="flex min-h-[300px] flex-col items-center justify-center text-center">

              <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                Nothing Here Yet
              </h3>

              <p className="mt-2 max-w-md text-sm text-[#8A92A0]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-5 rounded-lg bg-[#CCFF00] px-5 py-2.5 text-sm font-semibold text-[#0F1115] transition hover:bg-[#B8E600]"
              >
                Go to workouts
              </Link>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default MyPlanPage;