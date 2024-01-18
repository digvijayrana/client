import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';

function SideNavList() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`flex flex-col items-center space-y-3 mt-3 ${isSidebarOpen ? 'w-64' : 'w-16'} transition-all`}>
      <div className="flex items-center">
        {isSidebarOpen && <CiMenuFries size={24} />}
        <div className='text-lg font-bold'>
          {isSidebarOpen && <h3>Safety Analytics</h3>}
        </div>
      </div>
      <button onClick={handleToggleSidebar}>
        {isSidebarOpen ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
}

export default SideNavList;
