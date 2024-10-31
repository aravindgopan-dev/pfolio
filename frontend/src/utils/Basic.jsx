// Preview.js
import React from 'react';
import { FaLinkedin, FaInstagram, FaFileDownload } from 'react-icons/fa';

function Basic({ basicDetails }) {
    return (
        <div className='p-2'>
            {/* Name */}
            {basicDetails?.name && <h1 className='text-5xl md:text-8xl'>{basicDetails.name}</h1>}
            
            {/* Position */}
            {basicDetails?.position && <h2 className='text-3xl md:text-6xl mt-5'>{basicDetails.position}</h2>}
            
            {/* Description */}
            {basicDetails?.description && (
                <h3 className='text-base w-full lg:w-2/3 md:text-xl md:mt-2'>{basicDetails.description}</h3>
            )}

            {/* Social Links */}
            <div className='flex space-x-4 py-5'>
                {basicDetails?.linkedIn && (
                    <a href={basicDetails.linkedIn} target="_blank" rel="noopener noreferrer">
                        <button className="text-xl sm:text-2xl">
                            <FaLinkedin />
                        </button>
                    </a>
                )}
                {basicDetails?.instagram && (
                    <a href={basicDetails.instagram} target="_blank" rel="noopener noreferrer">
                        <button className="text-xl sm:text-2xl">
                            <FaInstagram />
                        </button>
                    </a>
                )}
            </div>

            {/* Resume Download */}
            <div>
    {basicDetails?.resume && (
        <a href={basicDetails.resume} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <FaFileDownload />
            <span>download resume</span>
        </a>
    )}
</div>

        </div>
    );
}

export default Basic;
