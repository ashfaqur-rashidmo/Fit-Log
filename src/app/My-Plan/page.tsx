

// "use client";

// import { PlanContext } from "@/Context/PlanContext";
// import { GymCardTypes } from "@/types/JymCardTypes";
// import Link from "next/link";
// import React, { useContext, useState } from "react";
// import PlanCard from "@/components/SavedPlanCard/PlanCard";

// const MyPlanPage = () => {
//   const [sortBy, setSortBy] = useState<
//     "Duration" | "Calories" | "rating"
//   >("Duration");

//   const {
//     todayPlan,
//     savedPlan,
//     setTodayPlan,
//     setSavedPlan,
//   } = useContext(PlanContext);

//   const [activeTab, setActiveTab] = useState<"today" | "saved">(
//     "today"
//   );

//   // ================= CURRENT PLAN =================

//   const currentPlan =
//     activeTab === "today" ? todayPlan : savedPlan;

//   // ================= STATISTICS =================

//   const exercises = currentPlan.length;

//   const minutes = currentPlan.reduce(
//     (total, workout) => total + workout.duration,
//     0
//   );

//   const calories = currentPlan.reduce(
//     (total, workout) => total + workout.caloriesBurned,
//     0
//   );

//   // ================= SORT FUNCTION =================

//   const sortPlans = (plans: GymCardTypes[]) => {
//     const sortedPlans = [...plans];

//     if (sortBy === "Duration") {
//       sortedPlans.sort((a, b) => a.duration - b.duration);
//     } else if (sortBy === "Calories") {
//       sortedPlans.sort(
//         (a, b) => a.caloriesBurned - b.caloriesBurned
//       );
//     } else if (sortBy === "rating") {
//       sortedPlans.sort((a, b) => a.rating - b.rating);
//     }

//     return sortedPlans;
//   };

//   // ================= SORT BOTH PLANS =================

//   const sortedTodayPlan = sortPlans(todayPlan);
//   const sortedSavedPlan = sortPlans(savedPlan);

//   // ================= REMOVE =================

//   const handleRemoveFromTodayPlan = (id: number) => {
//     setTodayPlan(
//       todayPlan.filter((workout) => workout.id !== id)
//     );
//   };

//   const handleRemoveSavedWorkout = (id: number) => {
//     setSavedPlan(
//       savedPlan.filter((workout) => workout.id !== id)
//     );
//   };

//   return (
//     <div className="px-4 py-4 sm:px-6 lg:px-8">

//       {/* ================= HEADER ================= */}

//       <div className="mb-4 space-y-2">
//         <h2 className="text-3xl uppercase text-white">
//           My Plan
//         </h2>

//         <p className="text-sm text-[#8A92A0]">
//           Cap of five lifts for today. Finish them, then load more.
//         </p>

//         {/* ================= STATISTICS ================= */}

//         <div className="mt-4 grid grid-cols-3 rounded-xl border border-[#242933] bg-[#13161D] px-4 py-2.5">

//           {/* Exercises */}
//           <div>
//             <p className="text-sm text-[#8A92A0]">
//               Exercises
//             </p>

//             <span className="text-[#CCFF00]">
//               {exercises}
//             </span>
//           </div>

//           {/* Minutes */}
//           <div>
//             <p className="text-sm text-[#8A92A0]">
//               Minutes
//             </p>

//             <span className="text-white">
//               {minutes}
//             </span>
//           </div>

//           {/* Calories */}
//           <div>
//             <p className="text-sm text-[#8A92A0]">
//               Calories
//             </p>

//             <span className="text-white">
//               {calories}
//             </span>
//           </div>

//         </div>
//       </div>

//       {/* ================= TABS + SORT ================= */}

//       <div className="w-full">

//         {/* TAB HEADER */}

//         <div className="flex items-center justify-between border-b border-[#242933]">

//           {/* Tabs */}
//           <div className="flex">

//             <button
//               type="button"
//               onClick={() => setActiveTab("today")}
//               className={`border-b-2 px-4 py-3 text-sm font-medium transition ${
//                 activeTab === "today"
//                   ? "border-[#CCFF00] text-[#CCFF00]"
//                   : "border-transparent text-[#8A92A0] hover:text-white"
//               }`}
//             >
//               Today's Plan
//             </button>

//             <button
//               type="button"
//               onClick={() => setActiveTab("saved")}
//               className={`border-b-2 px-4 py-3 text-sm font-medium transition ${
//                 activeTab === "saved"
//                   ? "border-[#CCFF00] text-[#CCFF00]"
//                   : "border-transparent text-[#8A92A0] hover:text-white"
//               }`}
//             >
//               Saved
//             </button>

//           </div>

//           {/* SORT */}

//           <div className="flex items-center gap-2 pb-2">
//             <label
//               htmlFor="sort"
//               className="hidden text-sm text-[#8A92A0] sm:block"
//             >
//               Sort by
//             </label>

//             <select
//               id="sort"
//               value={sortBy}
//               onChange={(e) =>
//                 setSortBy(
//                   e.target.value as
//                     | "Duration"
//                     | "Calories"
//                     | "rating"
//                 )
//               }
//               className="rounded-lg border border-[#242933] bg-[#13161D] px-3 py-2 text-sm text-white outline-none focus:border-[#CCFF00]"
//             >
//               <option value="Duration">
//                 Duration
//               </option>

//               <option value="Calories">
//                 Calories
//               </option>

//               <option value="rating">
//                 Rating
//               </option>
//             </select>
//           </div>

//         </div>

//         {/* ================= CONTENT ================= */}

//         <div className="border-[#242933] bg-[#0F1115] p-5 sm:p-8">

//           {/* ================= TODAY ================= */}

//           {activeTab === "today" && (
//             <>
//               {sortedTodayPlan.length > 0 ? (

//                 <div className="grid grid-cols-1 gap-4">

//                   {sortedTodayPlan.map((plan) => (
//                     <PlanCard
//                       key={plan.id}
//                       plan={plan}
//                       isTodayPlan={true}
//                       onRemove={handleRemoveFromTodayPlan}
//                     />
//                   ))}

//                 </div>

//               ) : (

//                 <div className="flex min-h-[300px] flex-col items-center justify-center text-center">

//                   <h3 className="text-xl font-bold uppercase tracking-wide text-white">
//                     Nothing Here Yet
//                   </h3>

//                   <p className="mt-2 max-w-md text-sm text-[#8A92A0]">
//                     Browse the library and add a lift to get today moving.
//                   </p>

//                   <Link
//                     href="/Workouts"
//                     className="mt-5 rounded-lg bg-[#CCFF00] px-5 py-2.5 text-sm font-semibold text-[#0F1115] transition hover:bg-[#B8E600]"
//                   >
//                     Go to workouts
//                   </Link>

//                 </div>

//               )}
//             </>
//           )}

//           {/* ================= SAVED ================= */}

//           {activeTab === "saved" && (
//             <>
//               {sortedSavedPlan.length > 0 ? (

//                 <div className="grid grid-cols-1 gap-4">

//                   {sortedSavedPlan.map((plan) => (
//                     <PlanCard
//                       key={plan.id}
//                       plan={plan}
//                       isTodayPlan={false}
//                       onRemove={handleRemoveSavedWorkout}
//                     />
//                   ))}

//                 </div>

//               ) : (

//                 <div className="flex min-h-[300px] flex-col items-center justify-center text-center">

//                   <h3 className="text-xl font-bold uppercase tracking-wide text-white">
//                     Nothing Here Yet
//                   </h3>

//                   <p className="mt-2 max-w-md text-sm text-[#8A92A0]">
//                     Browse the library and add a lift to get today moving.
//                   </p>

//                   <Link
//                     href="/Workouts"
//                     className="mt-5 rounded-lg bg-[#CCFF00] px-5 py-2.5 text-sm font-semibold text-[#0F1115] transition hover:bg-[#B8E600]"
//                   >
//                     Go to workouts
//                   </Link>

//                 </div>

//               )}
//             </>
//           )}

//         </div>

//       </div>
//     </div>
//   );
// };

// export default MyPlanPage;



"use client";

import { PlanContext } from "@/Context/PlanContext";
import { GymCardTypes } from "@/types/JymCardTypes";
import Link from "next/link";
import React, { useContext, useState } from "react";
import PlanCard from "@/components/SavedPlanCard/PlanCard";

const MyPlanPage = () => {
  const [sortBy, setSortBy] = useState<
    "Duration" | "Calories" | "rating"
  >("Duration");

  const {
    todayPlan,
    savedPlan,
    setTodayPlan,
    setSavedPlan,
  } = useContext(PlanContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">(
    "today"
  );

  // ================= CURRENT PLAN =================

  const currentPlan =
    activeTab === "today" ? todayPlan : savedPlan;

  // ================= STATISTICS =================

  const exercises = currentPlan.length;

  const minutes = currentPlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const calories = currentPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  // ================= SORT FUNCTION =================

  const sortPlans = (plans: GymCardTypes[]) => {
    const sortedPlans = [...plans];

    if (sortBy === "Duration") {
      sortedPlans.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "Calories") {
      sortedPlans.sort(
        (a, b) => a.caloriesBurned - b.caloriesBurned
      );
    } else if (sortBy === "rating") {
      sortedPlans.sort((a, b) => a.rating - b.rating);
    }

    return sortedPlans;
  };

  // ================= SORT BOTH PLANS =================

  const sortedTodayPlan = sortPlans(todayPlan);
  const sortedSavedPlan = sortPlans(savedPlan);

  // ================= REMOVE =================

  const handleRemoveFromTodayPlan = (id: number) => {
    setTodayPlan(
      todayPlan.filter((workout) => workout.id !== id)
    );
  };

  const handleRemoveSavedWorkout = (id: number) => {
    setSavedPlan(
      savedPlan.filter((workout) => workout.id !== id)
    );
  };

  return (
    <div className="px-4 py-4 sm:px-6 lg:px-8">

      {/* ================= HEADER ================= */}

      <div className="mb-4 space-y-2">
        <h2 className="text-3xl uppercase text-white">
          My Plan
        </h2>

        <p className="text-sm text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* ================= STATISTICS ================= */}

        <div className="mt-4 grid grid-cols-3 rounded-xl border border-[#242933] bg-[#13161D] px-4 py-2.5">
          <div>
            <p className="text-sm text-[#8A92A0]">
              Exercises
            </p>
            <span className="text-[#CCFF00]">
              {exercises}
            </span>
          </div>

          <div>
            <p className="text-sm text-[#8A92A0]">
              Minutes
            </p>
            <span className="text-white">
              {minutes}
            </span>
          </div>

          <div>
            <p className="text-sm text-[#8A92A0]">
              Calories
            </p>
            <span className="text-white">
              {calories}
            </span>
          </div>
        </div>
      </div>

      {/* ================= TABS + SORT ================= */}

      <div className="w-full">

        {/* TAB HEADER */}

        <div className="flex flex-col gap-2 border-b border-[#242933] sm:flex-row sm:items-center sm:justify-between">

          {/* Tabs */}

          <div className="flex">
            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`border-b-2 px-4 py-3 text-sm font-medium transition ${
                activeTab === "today"
                  ? "border-[#CCFF00] text-[#CCFF00]"
                  : "border-transparent text-[#8A92A0] hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={`border-b-2 px-4 py-3 text-sm font-medium transition ${
                activeTab === "saved"
                  ? "border-[#CCFF00] text-[#CCFF00]"
                  : "border-transparent text-[#8A92A0] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* SORT */}

          <div className="flex items-center justify-between gap-2 pb-2 sm:justify-end">
            <label
              htmlFor="sort"
              className="text-sm text-[#8A92A0]"
            >
              Sort by
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as
                    | "Duration"
                    | "Calories"
                    | "rating"
                )
              }
              className="rounded-lg border border-[#242933] bg-[#13161D] px-3 py-2 text-sm text-white outline-none focus:border-[#CCFF00]"
            >
              <option value="Duration">
                Duration
              </option>

              <option value="Calories">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>
          </div>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="border-[#242933] bg-[#0F1115] p-3 sm:p-5 md:p-8">

          {/* ================= TODAY ================= */}

          {activeTab === "today" && (
            <>
              {sortedTodayPlan.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {sortedTodayPlan.map((plan) => (
                    <PlanCard
                      key={plan.id}
                      plan={plan}
                      isTodayPlan={true}
                      onRemove={handleRemoveFromTodayPlan}
                    />
                  ))}
                </div>
              ) : (
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
            </>
          )}

          {/* ================= SAVED ================= */}

          {activeTab === "saved" && (
            <>
              {sortedSavedPlan.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {sortedSavedPlan.map((plan) => (
                    <PlanCard
                      key={plan.id}
                      plan={plan}
                      isTodayPlan={false}
                      onRemove={handleRemoveSavedWorkout}
                    />
                  ))}
                </div>
              ) : (
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
