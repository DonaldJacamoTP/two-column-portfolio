function ProjectItem(props) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col p-5 transition-all bg-surface-200 hover:scale-110 brightness-75 hover:brightness-100 hover:z-10">
            <div className='text-surface-600 mb-4 flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <span className='ml-1 text-xs'>{props.stars}</span>
                </div>
                <div className='text-xs font-medium tracking-widest uppercase'>
                    {props.lib}
                </div>
            </div>
            <h1 className="mb-4 text-xl subpixel-antialiased">{props.name}</h1>
            <div className="text-surface-600 text-xs mb-4">{props.description}</div>
            
            {props.technologies && (
                <div className="mb-3">
                    <h4 className="text-xs font-medium text-surface-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                        {props.technologies.map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded border border-blue-200 dark:border-blue-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            
            {props.features && (
                <div>
                    <h4 className="text-xs font-medium text-surface-700 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                        {props.features.map((feature, index) => (
                            <span key={index} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded border border-green-200 dark:border-green-700">
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </a>
    )
}

export default ProjectItem