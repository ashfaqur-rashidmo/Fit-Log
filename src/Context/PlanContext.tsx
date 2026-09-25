"use client"

import React, { createContext, ReactNode, useState, useEffect } from 'react';

export const PlanContext = createContext({});

const PlanContextProvider = ({children}: {children : ReactNode}) => {

    const [todayPlan, setTodayPlan] = useState([]);
    const [savedPlan, setSavedPlan] = useState([]);
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