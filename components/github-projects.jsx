"use client";

import React, { useState, useEffect } from 'react';

const GitHubProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Djacamo01/repos');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                
                // Filter and map the projects
                const filteredProjects = data
                    .filter(repo => !repo.fork && repo.description) // Only non-forked repos with descriptions
                    .map(repo => ({
                        name: repo.name,
                        description: repo.description || 'Sin descripción disponible',
                        href: repo.html_url,
                        stars: repo.stargazers_count,
                        language: repo.language,
                        framework: getFrameworkFromLanguage(repo.language),
                        technologies: getTechnologiesFromLanguage(repo.language),
                        features: getFeaturesFromRepo(repo)
                    }))
                    .slice(0, 6); // Limit to 6 most recent projects
                
                setProjects(filteredProjects);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const getFrameworkFromLanguage = (language) => {
        const frameworks = {
            'JavaScript': 'JavaScript',
            'TypeScript': 'TypeScript',
            'Python': 'Python',
            'Java': 'Java',
            'Vue': 'Vue.js',
            'HTML': 'HTML/CSS',
            'CSS': 'HTML/CSS',
            'PHP': 'PHP',
            'C#': 'C#',
            'C++': 'C++',
            'Go': 'Go',
            'Rust': 'Rust',
            'Ruby': 'Ruby',
            'Swift': 'Swift',
            'Kotlin': 'Kotlin'
        };
        return frameworks[language] || language || 'Otros';
    };

    const getTechnologiesFromLanguage = (language) => {
        const technologies = {
            'JavaScript': ['JavaScript', 'ES6+', 'DOM'],
            'TypeScript': ['TypeScript', 'JavaScript', 'ES6+'],
            'Python': ['Python', 'Flask', 'Django'],
            'Java': ['Java', 'Spring', 'Maven'],
            'Vue': ['Vue.js', 'JavaScript', 'Vue Router'],
            'HTML': ['HTML5', 'CSS3', 'JavaScript'],
            'CSS': ['CSS3', 'HTML5', 'Responsive Design'],
            'PHP': ['PHP', 'MySQL', 'Apache'],
            'C#': ['C#', '.NET', 'ASP.NET'],
            'C++': ['C++', 'STL', 'OOP'],
            'Go': ['Go', 'Gin', 'GORM'],
            'Rust': ['Rust', 'Cargo', 'Systems Programming'],
            'Ruby': ['Ruby', 'Rails', 'Sinatra'],
            'Swift': ['Swift', 'iOS', 'UIKit'],
            'Kotlin': ['Kotlin', 'Android', 'Jetpack']
        };
        return technologies[language] || ['Desarrollo Web', 'Programación'];
    };

    const getFeaturesFromRepo = (repo) => {
        const features = [];
        if (repo.has_pages) features.push('GitHub Pages');
        if (repo.has_wiki) features.push('Documentación');
        if (repo.has_issues) features.push('Issue Tracking');
        if (repo.stargazers_count > 0) features.push('Destacado');
        if (repo.fork === false) features.push('Proyecto Original');
        return features;
    };

    if (loading) {
        return (
            <div data-section id='projects' className='mb-12 sm:mb-16'>
                <h2 className='mb-6 sm:mb-8 visible lg:invisible font-medium tracking-widest text-sm sm:text-base'>Projects</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3'>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-4 sm:p-5 bg-surface-200 animate-pulse">
                            <div className="h-3 sm:h-4 bg-gray-300 rounded mb-2"></div>
                            <div className="h-2 sm:h-3 bg-gray-300 rounded mb-3 sm:mb-4"></div>
                            <div className="h-2 bg-gray-300 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div data-section id='projects' className='mb-12 sm:mb-16'>
                <h2 className='mb-6 sm:mb-8 visible lg:invisible font-medium tracking-widest text-sm sm:text-base'>Projects</h2>
                <div className='text-red-500 text-center py-6 sm:py-8 text-sm sm:text-base'>
                    Error al cargar proyectos: {error}
                </div>
            </div>
        );
    }

    return (
        <div data-section id='projects' className='mb-12 sm:mb-16'>
            <h2 className='mb-6 sm:mb-8 visible lg:invisible font-medium tracking-widest text-sm sm:text-base'>Projects</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3'>
                {projects.map((project, index) => (
                    <a 
                        key={index}
                        href={project.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group flex flex-col p-4 sm:p-5 transition-all bg-surface-200 hover:scale-110 brightness-75 hover:brightness-100 hover:z-10"
                    >
                        <div className='text-surface-600 mb-3 sm:mb-4 flex flex-row items-center justify-between'>
                            <div className='flex flex-row items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                <span className='ml-1 text-xs'>{project.stars}</span>
                            </div>
                            <div className='text-xs font-medium tracking-widest uppercase'>
                                {project.framework}
                            </div>
                        </div>
                        <h1 className="mb-3 sm:mb-4 text-lg sm:text-xl subpixel-antialiased">{project.name}</h1>
                        <div className="text-surface-600 text-xs sm:text-sm mb-3 sm:mb-4">{project.description}</div>
                        
                        {project.technologies && (
                            <div className="mb-2 sm:mb-3">
                                <h4 className="text-xs font-medium text-surface-700 mb-1 sm:mb-2">Technologies:</h4>
                                <div className="flex flex-wrap gap-1">
                                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                        <span key={techIndex} className="px-1 sm:px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded border border-blue-200 dark:border-blue-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {project.features && project.features.length > 0 && (
                            <div>
                                <h4 className="text-xs font-medium text-surface-700 mb-1 sm:mb-2">Features:</h4>
                                <div className="flex flex-wrap gap-1">
                                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                                        <span key={featureIndex} className="px-1 sm:px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded border border-green-200 dark:border-green-700">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default GitHubProjects; 