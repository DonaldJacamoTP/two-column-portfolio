import React from "react";

const Certifications = (props) => {
    return (
        <div data-section id='certifications' className='mb-12 sm:mb-16 group'>
            <h3 className='text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 group-hover:text-blue-600 transition-colors'>
                Certifications
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                {props.data.map((cert, index) => (
                    <div key={index} className='bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow'>
                        <div className='flex flex-col'>
                            <div className='flex-1'>
                                <h4 className='text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 mb-2 line-clamp-2'>
                                    {cert.name}
                                </h4>
                                <p className='text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-2'>
                                    {cert.issuer}
                                </p>
                                <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-gray-500 dark:text-gray-400'>
                                    <span>Issued: {cert.date}</span>
                                    {cert.credentialId && (
                                        <span>ID: {cert.credentialId}</span>
                                    )}
                                </div>
                            </div>
                            <div className='mt-2 sm:mt-3'>
                                <span className='inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full border border-green-200 dark:border-green-700'>
                                    ✓ Verified
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications; 