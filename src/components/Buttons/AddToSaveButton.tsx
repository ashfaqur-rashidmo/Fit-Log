"use client";

import { PlanContext } from "@/Context/PlanContext";
import { GymCardTypes } from "@/types/JymCardTypes";
import React, { useContext } from "react";
import { IoSaveOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const AddToSaveButton = ({
  workout,
}: {
  workout: GymCardTypes;
}) => {
  const { savedPlan, setSavedPlan } = useContext(PlanContext);

  const handleSave = () => {
    const alreadySaved = savedPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.info(`${workout.name} is already saved!`);
      return;
    }

    setSavedPlan((prevPlan) => [...prevPlan, workout]);

    toast.success(`${workout.name} saved for later!`);
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      className="flex items-center justify-center gap-2 rounded-md border border-[#374151] px-4 py-2 text-[11px] text-[#D1D5DB] transition hover:bg-[#1A2312]"
    >
      <IoSaveOutline className="text-xs" />
      Save for later
    </button>
  );
};

export default AddToSaveButton;