import { workExperience } from '@/data';
import Image from "next/legacy/image";
import React from 'react'
import { Button } from './ui/MovingBorders';

const Experience = () => {
  return (
    <div id="testimonials" className="py-20">
    <h1 className="heading" id="experience">
      My 
      <span className="text-purple"> Work Experience </span>
    </h1>
    <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card)=> (
            <Button 
            key={card.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-100 dark-border-slate-800'
            >
                <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <div className="relative w-36 h-36 mr-4"> {/* Image size and margin */}
                <Image 
                  src={card.thumbnail} 
                  alt={card.title} 
                  layout='fill' 
                  objectFit='contain' 
                />
              </div>
                    <div className='flex-1'>
                        <h1 className='text-start text-xl md:text-2xl font-bold'>
                            {card.title}
                        </h1>
                        <p className='text-start text-white-100 mt-3 font-semibold'>
                            {card.desc}
                        </p>
                    </div>
                </div>
            </Button>
        ))}
    </div>
    </div>
  )
}

export default Experience;