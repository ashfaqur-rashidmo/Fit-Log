"use client";

import { PlanContext } from "@/Context/PlanContext";
import { GymCardTypes } from "@/types/JymCardTypes";
import React, { useContext } from "react";
import { SlCalender } from "react-icons/sl";
import { toast } from "react-toastify";

const AddToPlanButton = ({
  workout,
}: {
  workout: GymCardTypes;
}) => {
  const { todayPlan, setTodayPlan } = useContext(PlanContext);

  const handleAddToPlan = () => {
    const alreadyAdded = todayPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      toast.info(`${workout.name} is already in today's plan!`);
      return;
    }

    setTodayPlan((prevPlan) => [...prevPlan, workout]);

    toast.success(`${workout.name} added to today's plan!`);
  };

  return (
    <button
      type="button"
      onClick={handleAddToPlan}
      className="flex items-center justify-center gap-2 rounded-md bg-[#C2F800] px-4 py-2 text-[11px] font-semibold text-[#0F1115] transition hover:bg-[#B7F000]"
    >
      <SlCalender className="text-xs" />
      Add to today's plan
    </button>
  );
};

export default AddToPlanButton;