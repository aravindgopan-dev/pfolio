import React from 'react';
import { MdDeleteForever } from "react-icons/md";
export default function Skill({ skill,onDelete}) {
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
            <div key={index} className='px-3 border rounded-md text-sm flex justify-between'><div>{item}</div><button className='pl-2 pt-1' onClick={()=>onDelete(index)} ><MdDeleteForever /></button></div> // Use key for each item in the list
          ))}
        </div>
      )}
    </div>
  );
}
