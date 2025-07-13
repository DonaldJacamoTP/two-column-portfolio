import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
    return (
        <div className="group flex flex-col sm:flex-row mb-4 p-3 sm:p-5 transition-all hover:bg-surface-200">
            <div className="basis-1/4 mb-3 sm:mb-0 sm:mr-2 flex justify-center sm:justify-start">
                <Image 
                    src={props.logo} 
                    alt="Company Logo" 
                    width={60} 
                    height={60} 
                    className='object-contain object-top pt-2 w-12 h-12 sm:w-16 sm:h-16' 
                />
            </div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all text-sm sm:text-base'>
                    {props.title} | {props.company}
                </a>
                <div className='mb-2 text-surface-600 text-xs sm:text-sm'>{props.startDate} - {props.endDate}</div>
                <div className='text-surface-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed'>{props.description}</div>
                <div className='flex flex-wrap gap-1 sm:gap-2'>
                    {props.skills ? props.skills.map(function(object, index){
                        return <div key={object} className='bg-surface-400 py-1 px-2 sm:px-3 rounded-full text-xs mr-1 sm:mr-2'>{object}</div>
                    }) : ""}
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem