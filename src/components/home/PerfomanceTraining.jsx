import React from 'react'

const PerfomanceTraining = () => {

    const features = [
        {
            img: "https://i.ibb.co/r69Rm1v/tokyo.png",
            title: "This is demo title not serious.",
            user: "sujon sheikh",
            date: "January 4, 2023",
            description: "We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining"
        },
        {
            img: "https://i.ibb.co/r69Rm1v/tokyo.png",
            title: "This is demo title not serious.",
            user: "sujon sheikh",
            date: "January 4, 2023",
            description: "We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining"
        },
        {
            img: "https://i.ibb.co/r69Rm1v/tokyo.png",
            title: "This is demo title not serious.",
            user: "sujon sheikh",
            date: "January 4, 2023",
            description: "We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining"
        },
        {
            img: "https://i.ibb.co/r69Rm1v/tokyo.png",
            title: "This is demo title not serious.",
            user: "sujon sheikh",
            date: "January 4, 2023",
            description: "We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining"
        },
        {
            img: "https://i.ibb.co/r69Rm1v/tokyo.png",
            title: "This is demo title not serious.",
            user: "sujon sheikh",
            date: "January 4, 2023",
            description: "We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our homestay family’s small dining"
        },
    ];
    return (
        <div className='flex justify-start'>
            <div className='md:mx-52 mx-4 my-20 h-full'>
                <span className='uppercase bg-black px-2 text-white font-bold my-4 py-2 rounded'>Perfomane Training</span>
                <hr className='my-6' />

                <div className='space-y-6 grid grid-cols-1'>
                    {
                        features.map((feature) => (
                            <div className='md:flex justify-start items-center md:space-x-4'>
                                <img className='w-full md:w-60 h-40 rounded' src={feature.img} alt="image" />
                                <div className='space-y-4'>
                                    <h2 className='text-2xl my-2  hover:text-blue-400 cursor-pointer duration-300'>{feature.title}</h2>
                                    <div className='felx space-x-4'>
                                        <span className='text-gray-900 font-semibold'>{feature.user}</span>
                                        <span className='text-gray-400'>{feature.date}</span>
                                    </div>
                                    <p className='text-gray-500'>{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PerfomanceTraining