// components/Sidebar.js
import Link from 'next/link';

const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="w-64 bg-gray-800 text-white flex-none flex flex-col justify-between">
      <div>
        <div className="p-6 text-2xl font-semibold">Dashboard</div>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveTab('profile')}
              className="w-full text-left px-6 py-3 hover:bg-gray-700 transition-all"
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('editProfile')}
              className="w-full text-left px-6 py-3 hover:bg-gray-700 transition-all"
            >
              Edit Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('projects')}
              className="w-full text-left px-6 py-3 hover:bg-gray-700 transition-all"
            >
              Projects
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;