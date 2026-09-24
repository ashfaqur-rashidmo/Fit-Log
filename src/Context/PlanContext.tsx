"use client"

import React, { createContext, ReactNode, useState } from 'react';

export const PlanContext = createContext({});

const PlanContextProvider = ({children}: {children : ReactNode}) => {

    const [todayPlan, setTodayPlan] = useState([]);
    const [savedPlan, setSavedPlan] = useState([]);

    const sharedData = {
      todayPlan,
      setTodayPlan,
      savedPlan,
      setSavedPlan
    }

    return (
       <PlanContext.Provider value={sharedData}>
        {children}
       </PlanContext.Provider>
    );
};

export default PlanContextProvider;