import React from "react";

const Credits = (props) => {
        return (
            <div data-section id='credits' className='group mt-32'>
            <div className='text-surface-600'>
              <div className='mb-4'>
                This site was designed and developed by <span className="font-medium text-on-background">Donald Jacamo</span>, a backend developer passionate about clean architecture, artificial intelligence, and crafting meaningful digital experiences.
              </div>
              <div className='flex flex-row justify-between'>
                <a href="/imprint" rel="noopener noreferrer" className="scroll-auto transition-all hover:text-on-background">Imprint</a>
                <a href="/privacy" rel="noopener noreferrer" className="scroll-auto transition-all hover:text-on-background">Privacy Statement</a>
                <span>Donald Jacamo | {new Date().getFullYear()}</span>
              </div>
            </div>
          </div>
    )
}

export default Credits