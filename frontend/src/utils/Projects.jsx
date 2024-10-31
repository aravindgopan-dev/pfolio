import React from 'react';

export default function Projects({ project }) {
  return (
    <div >
      <div className='border my-5'></div>
      <div className='text-3xl mb-3'>Projects</div>
      {project && project.length > 0 ? (
        project.map((items, index) => (
          <div key={index} className='border my-2 rounded-md p-2'>
            {items.projectName ? (
              <div className='text-2xl'>{items.projectName}</div>
            ) : (
             null
            )}
            {items.projectDescription ? (
              <div className='text-lg'>{items.projectDescription}</div>
            ) : (
            null
            )}
            <div>
              {items.githubLink ? (
                <a href={items.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              ) : (
               null
              )}
              {items.demoLink ? (
                <a href={items.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
              ) : (
                null
              )}
            </div>
          </div>
        ))
      ) : (
        <div className='text-lg text-gray-500'>No projects available</div>
      )}
    </div>
  );
}