import React from 'react';

export default function Skill({ skill }) {
  return (
    <div >
        <div className='border mb-5'></div>
        <div className='text-3xl mb-3'>
            skills
        </div>
      {skill.length > 0 && (
        <div className='flex gap-5 flex-wrap'>
          {/* Render something based on the skill prop here */}
          {skill.map((item, index) => (
            <div key={index} className='px-3 border rounded-md text-sm'>{item}</div> // Use key for each item in the list
          ))}
        </div>
      )}
    </div>
  );
}
