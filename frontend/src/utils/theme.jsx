import React from 'react';

function Theme() {
    const themes = [
        { value: 'default', label: 'Default' },
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
        { value: 'cupcake', label: 'Cupcake' },
        { value: 'bumblebee', label: 'Bumblebee' },
        { value: 'emerald', label: 'Emerald' },
        { value: 'corporate', label: 'Corporate' },
        { value: 'synthwave', label: 'Synthwave' },
        { value: 'retro', label: 'Retro' },
        { value: 'cyberpunk', label: 'Cyberpunk' },
        { value: 'valentine', label: 'Valentine' },
        { value: 'halloween', label: 'Halloween' },
        { value: 'garden', label: 'Garden' },
        { value: 'forest', label: 'Forest' },
        { value: 'aqua', label: 'Aqua' },
        { value: 'lofi', label: 'Lofi' },
        { value: 'pastel', label: 'Pastel' },
        { value: 'fantasy', label: 'Fantasy' },
        { value: 'wireframe', label: 'Wireframe' },
        { value: 'black', label: 'Black' },
        { value: 'luxury', label: 'Luxury' },
        { value: 'dracula', label: 'Dracula' },
        { value: 'cmyk', label: 'CMYK' },
        { value: 'autumn', label: 'Autumn' },
        { value: 'business', label: 'Business' },
        { value: 'acid', label: 'Acid' },
        { value: 'lemonade', label: 'Lemonade' },
        { value: 'night', label: 'Night' },
        { value: 'coffee', label: 'Coffee' },
        { value: 'winter', label: 'Winter' },
        { value: 'dim', label: 'Dim' },
        { value: 'nord', label: 'Nord' },
        { value: 'sunset', label: 'Sunset' },
    ];

    return (
        <div className="dropdown mb-72">
            <div tabIndex={0} role="button" className="btn m-1">
                Theme
                <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048">
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <ul 
                tabIndex={0} 
                className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl overflow-y-auto max-h-48">
                {themes.map(theme => (
                    <li key={theme.value}>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                            aria-label={theme.label}
                            value={theme.value} />
                       
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Theme;
