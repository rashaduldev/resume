import DashboardLayout from '@/mainlayout/DashboardLayout';
import React from 'react';

export const metadata = {
  title: "rashaduldev | dashboard",
  description: "This is rashaduldev dashboard page",
};
  
  const Page = () =>  {
	return (
	  <div>
        <DashboardLayout/>
	  </div>
	);
  }
  
  export default Page;
  