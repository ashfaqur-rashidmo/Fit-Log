"use client"

import { GymCardTypes } from '@/types/JymCardTypes';
import React, { createContext, ReactNode, useState, useEffect, Dispatch, SetStateAction } from 'react';

export const PlanContext = createContext({});

interface PlanContextType {
  todayPlan: GymCardTypes[];
  savedPlan: GymCardTypes[];
  setTodayPlan: Dispatch<SetStateAction<GymCardTypes[]>>;
  setSavedPlan: Dispatch<SetStateAction<GymCardTypes[]>>;
  loading: boolean;
}

const PlanContextProvider = ({children}: {children : ReactNode}) => {

    const [todayPlan, setTodayPlan] = useState<GymCardTypes[]>([]);
    const [savedPlan, setSavedPlan] = useState<GymCardTypes[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    setLoading(false);
}, []);

    const sharedData = {
      todayPlan,
      setTodayPlan,
      savedPlan,
      setSavedPlan,
      loading,
    }

    return (
       <PlanContext.Provider value={sharedData}>
        {children}
       </PlanContext.Provider>
    );
};

export default PlanContextProvider;