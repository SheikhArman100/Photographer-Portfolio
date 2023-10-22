import { ArrowLeft, ArrowRight, Sparkle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import image7 from "@/public/assets/image7.jpg"
import image13 from "@/public/assets/image13.jpg"
import image14 from "@/public/assets/image14.jpg"

const AppointmentSection = () => {
  return (
    <section className='h-screen w-full bg-customOffWhite text-customBlack relative flex flex-col'>
        <div className='w-full h-[4.5rem] border-b border-customBlack flex items-center justify-center gap-x-2'>
            <h3 className='text-3xl  font-semibold'>Photography</h3>
            <Sparkle size={32} className='fill-customOrange stroke-none'/>
            <h3 className='text-3xl  font-semibold'>Cinematography</h3>
            <Sparkle size={32} className='fill-customOrange stroke-none'/>
            <h3 className='text-3xl  font-semibold'>Product</h3>
            <Sparkle size={32} className='fill-customOrange stroke-none'/>
            <h3 className='text-3xl  font-semibold'>Commercial</h3>
            <Sparkle size={32} className='fill-customOrange stroke-none'/>
            <h3 className='text-3xl  font-semibold'>Visualization</h3>
            
        </div>
        <div className='flex-[1_1_100%] w-full  flex items-center justify-between px-[3rem] lg:px-[6rem]'>
            <div className='flex flex-col gap-y-1'>
                <div className='relative h-48 aspect-[1.8/2]'>
                    <Image src={image13} fill placeholder='blur' alt='appointment left image' className='w-full h-full object-cover '/>
                </div>
                <p className='flex items-center gap-x-3 font2 text-sm font-bold uppercase'><span className="text-sm font2 font-medium">01/</span>Men-with-flowers</p>
            </div>
            <div className='flex flex-col gap-y-1'>
                <div className='relative  h-48 aspect-[1.8/2]'>
                    <Image src={image14} fill placeholder='blur' alt='appointment right image' className='w-full h-full object-cover '/>
                </div>
                <p className='flex items-center gap-x-3 font2 text-sm font-bold uppercase'><span className="text-sm font2 font-medium">02/</span>Men-with-flowers</p>
            </div>

        </div>
        <div className='w-full h-16 border-t border-b  border-customBlack flex items-center justify-between px-[3rem] lg:px-[6rem]'>
            <div className='h-full flex items-center gap-x-2 border-l border-black px-6'>
                <p className='uppercase text-sm font-bold font2'>Make your appointment</p>
                <ArrowRight/>
            </div>
            <div className='h-full flex items-center gap-x-2 border-r border-black px-6'>
                <ArrowLeft/>
                <p className='uppercase text-sm font-bold font2'>Make your appointment</p>
            </div>

        </div>
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 h-[75%] w-[22rem] rounded-t-full'>
            <Image src={image7} className='w-full h-full object-cover rounded-t-full' fill placeholder='blur' alt='appointment center image'/>
        </div>

    </section>
  )
}

export default AppointmentSection