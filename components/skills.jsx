import React from "react";

const Skills = (props) => {
    const skillCategories = [
        { title: "Programming Languages", skills: props.data.programming },
        { title: "Databases & Storage", skills: props.data.databases },
        { title: "Cloud & DevOps", skills: props.data.cloud },
        { title: "AI & Machine Learning", skills: props.data.ai_ml },
        { title: "Tools & Platforms", skills: props.data.tools }
    ];

    return (
        <div data-section id='skills' className='mb-12 sm:mb-16 group'>
            <h3 className='text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 group-hover:text-blue-600 transition-colors'>
                Technical Skills
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
                {skillCategories.map((category, index) => (
                    <div key={index} className='bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700'>
                        <h4 className='text-base sm:text-lg font-medium mb-3 sm:mb-4 text-gray-800 dark:text-gray-200'>
                            {category.title}
                        </h4>
                        <div className='flex flex-wrap gap-1 sm:gap-2'>
                            {category.skills.map((skill, skillIndex) => (
                                <span 
                                    key={skillIndex}
                                    className='px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs sm:text-sm rounded-full border border-blue-200 dark:border-blue-700'
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills; 