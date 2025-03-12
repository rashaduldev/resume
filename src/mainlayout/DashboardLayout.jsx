"use client"

import EditProfile from "@/components/dashboard/EditProfile";
import Profile from "@/components/dashboard/Profile";
import Projects from "@/components/dashboard/Projects";
import Sidebar from "@/components/dashboard/Sidebar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
    const [activeTab, setActiveTab] = useState('profile');
    return (
        <div className="flex h-screen bg-primary container mx-auto">
        {/* Sidebar */}
        <div className="hidden md:flex">
        <Sidebar setActiveTab={setActiveTab} />
        </div>
  
        {/* Main content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="bg-black rounded-lg shadow-lg p-6">
            {/* Render content based on active tab */}
            {activeTab === 'profile' && <Profile />}
            {activeTab === 'editProfile' && <EditProfile />}
            {activeTab === 'projects' && <Projects />}
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardLayout;
  