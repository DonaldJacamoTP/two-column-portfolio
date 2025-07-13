import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";

const Header = (props) => {
    return (
        <div className='lg:fixed lg:h-screen basis-1.5/4 flex flex-col justify-between pb-8 lg:pb-48 self-center lg:self-auto'>
            <div className=''>
                <h1 className='text-3xl sm:text-4xl md:text-5xl subpixel-antialiased tracking-wide'>{props.data.name}</h1>
                <h2 className='text-surface-600 pt-2 text-sm sm:text-base font-normal tracking-wider'>{props.data.headline}</h2>
                {props.data.location && (
                    <p className='text-surface-500 pt-1 text-xs sm:text-sm font-normal tracking-wider'>
                        📍 {props.data.location}
                    </p>
                )}
                {props.data.socials && props.data.socials.email && (
                    <div className='mt-4'>
                        <a 
                            href={`mailto:${props.data.socials.email}`}
                            className='text-surface-600 hover:text-blue-600 transition-colors text-xs sm:text-sm flex items-center'
                        >
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {props.data.socials.email}
                        </a>
                    </div>
                )}
            </div>
            <Navigation></Navigation>
            <Socials data={props.data.socials}></Socials>
        </div>
    )
}

export default Header