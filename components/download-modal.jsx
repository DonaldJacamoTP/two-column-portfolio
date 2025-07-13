"use client";

import React, { useState } from 'react';

const DownloadModal = ({ isOpen, onClose }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleDownload = () => {
        if (selectedLanguage === 'spanish') {
            window.open('/files/Donald.pdf', '_blank');
        } else if (selectedLanguage === 'english') {
            window.open('/files/Resume Donald Jacamo.pdf', '_blank');
        }
        onClose();
        setSelectedLanguage('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-900 dark:bg-black flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-6 max-w-md w-full shadow-2xl border border-gray-300 dark:border-gray-600">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        Descargar CV
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className="mb-4 sm:mb-6">
                    <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium text-sm sm:text-base">
                        Selecciona el idioma de tu CV:
                    </p>
                    
                    <div className="space-y-3">
                        <label className="flex items-center p-3 sm:p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                            <input
                                type="radio"
                                name="language"
                                value="spanish"
                                checked={selectedLanguage === 'spanish'}
                                onChange={(e) => setSelectedLanguage(e.target.value)}
                                className="mr-3 text-blue-600 focus:ring-blue-500"
                            />
                            <div>
                                <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Español</div>
                                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">CV en español</div>
                            </div>
                        </label>
                        
                        <label className="flex items-center p-3 sm:p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                            <input
                                type="radio"
                                name="language"
                                value="english"
                                checked={selectedLanguage === 'english'}
                                onChange={(e) => setSelectedLanguage(e.target.value)}
                                className="mr-3 text-blue-600 focus:ring-blue-500"
                            />
                            <div>
                                <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">English</div>
                                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">CV in English</div>
                            </div>
                        </label>
                    </div>
                </div>
                
                <div className="flex justify-end space-x-2 sm:space-x-3">
                    <button
                        onClick={onClose}
                        className="px-3 sm:px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors text-sm sm:text-base"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleDownload}
                        disabled={!selectedLanguage}
                        className="px-4 sm:px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors shadow-sm text-sm sm:text-base"
                    >
                        Descargar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DownloadModal; 