import React from "react";

const Languages = (props) => {
    const getLevelColor = (level) => {
        switch (level.toLowerCase()) {
            case 'native':
                return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700';
            case 'professional':
                return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700';
            case 'basic':
                return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700';
            default:
                return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-600';
        }
    };

    return (
        <div data-section id='languages' className='mb-12 sm:mb-16 group'>
            <h3 className='text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 group-hover:text-blue-600 transition-colors'>
                Languages
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4'>
                {props.data.map((language, index) => (
                    <div key={index} className='bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center'>
                        <h4 className='text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200 mb-2 sm:mb-3'>
                            {language.name}
                        </h4>
                        <span className={`inline-flex items-center px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border ${getLevelColor(language.level)}`}>
                            {language.level}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Languages; 