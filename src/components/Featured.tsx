import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

interface Props {
    
}

const Featured = (props: Props) => {
    return (
        <div className='w-screen overflow-x-scroll text-red-500'>
            {/* WRAPPER */}
<div className='w-max flex'>
    {/* single items */}
    {featuredProducts.map((item)=>(
<div key={item.id} className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
    {/* image container */}

    {/* since image is not required we render it with a condition */}

    {item.img && 
    <div  className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
        <Image src={item.img} alt='' fill className='object-contain'/>
    </div>
    }
    {/* text container */}
    <div className=" flex-1 flex flex-col gap-4 items-center text-center justify-center">

        <h1 className='text-xl font-bold uppercase p-4 xl:text-2xl 2xl:text-3xl'>{item.title}</h1>
        <p className='p-4 2xl:p-8'>{item.desc}</p>
        <span className='text-xl font-bold '>{`$${item.price}`}</span>
        <button className='bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
    </div>

</div>
))}
</div>
        </div>
    )
}

export default Featured
