import React, { useEffect, useState } from 'react';
import { getDashboardData } from './dashboardService';

const Dashboard: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       const result = await getDashboardData();
//       setData(result.data.message);
//     }
//     fetchData();
//   }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {/* <p>{data}</p> */}
    </div>
  );
};

export default Dashboard;
