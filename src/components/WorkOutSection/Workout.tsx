import React from 'react';
import WorkOutCard from '../WorkOutCard/WorkOutCard';


const getGym = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
}

const Workout = async() => {
    const gymData = await getGym();

    console.log(gymData);

    return (
        <section className=" px-10 py-4 sm:px-6 lg:px-8">
            <div className='mb-4 space-y-2 sm:space-y-3 lg:space-y-2'>
            <h2 className='text-[#FFFFFF] text-2xl font-bold'>THE LIBRARY</h2>
            <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
            </div>
            
            {/* cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {
                gymData.map ((workout) => (
                    <WorkOutCard key={workout.id} workout={workout} />
                ))
              }
            </div>
        </section>
    );
};

export default Workout;