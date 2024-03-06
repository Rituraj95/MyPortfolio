import React, { useState } from 'react';

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" checked={isDarkMode} onChange={handleToggle} />
    <div className="w-11 h-6 bg-rose-200 rounded-full peer ring-4 ring-rose-700 dark:ring-rose-800 dark:bg-rose-700 
    peer-checked:after:translate-x-full peer-checked:after:border-rose-500  after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
    after:bg-orange-300 after:border-orange-100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-rose-600 peer-checked:bg-orange-100"></div>
    </label>

  );
};

export default ToggleButton;

