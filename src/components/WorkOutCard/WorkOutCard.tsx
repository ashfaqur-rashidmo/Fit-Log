import React from 'react';
import { GymCardTypes } from '@/types/JymCardTypes';
import Image from 'next/image';
import Link from 'next/link';

interface WorkoutProps {
  workout: GymCardTypes
}

const WorkOutCard = ({ workout }: WorkoutProps) => {
    return (
        <Link href={`/Workouts/${workout.id}`} className="overflow-hidden rounded-xl border border-[#292D35] bg-[#15171D] shadow-md transition-transform duration-300 hover:scale-105 hover:border-yellow-100">
      {/* Image */}
      <Image
        src={workout.image}
        alt={workout.name}
        width={100}
        height={200}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4">
        {/* Muscle Groups */}
        <div className="mb-3 flex gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#B7F000] px-3 py-1 text-[10px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="text-lg font-bold uppercase text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-sm text-[#9CA3AF]">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-[#292D35]"></div>

        {/* Workout Stats */}
        <div className="flex items-center gap-4 text-xs text-[#9CA3AF]">
          <span>◷ {workout.duration} min</span>

          <span>🔥 {workout.caloriesBurned} kcal</span>

          <span>★ {workout.rating}</span>
        </div>
      </div>
      </Link>
    );
};

export default WorkOutCard;