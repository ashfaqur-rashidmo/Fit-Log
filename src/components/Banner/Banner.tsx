import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='w-full text-white'>
           <div className='flex flex-col-reverse items-center justify-between bg-[#15171D] m-10 rounded-2xl gap-4 px-4 py-4 sm:flex-row sm:px-6 lg:px-10'>

            <div className='space-y-2 sm:space-y-3 lg:space-y-8 text-center sm:text-left'>
                <p className='text-[#C2F800] text-xs text-uppercsse'>WORKOUT LIBRARY</p>
                <h1 className='text-[#FFFFFF] font-bold text-5xl text-uppercsse'>TRAIN WITH INTENT. LOG <br /> EVERY SET.</h1>
                <p className='text-[#9CA3AF]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into today's plan, and watch the week's work add up.</p>
                
                <button className='bg-[#C2F800] text-[#000000] px-3 py-1.5 rounded-md text-md font-bold'>BROWSE WORKOUTS</button>
            </div>

            <div>
                <Image src={"/banner.png"} alt="" width={334} height={334} />
            </div>
           </div>
        </div>
    );
};

export default Banner;