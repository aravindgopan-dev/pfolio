import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../utils/Navbar';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [data, setData] = useState(null); // State to hold fetched data
  const isAuth = useSelector((state) => state.user);

  // Mock data for the dashboard
  const mockData = {
    visits: 1200,
    uniqueVisitors: 800,
    bounceRate: '30%',
    averageSessionDuration: '5 min 30 sec',
    pagesPerSession: 4,
  };

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      // Simulating an API response with a timeout
      setTimeout(() => {
        setData(mockData);
      }, 1000);
    };

    if (isAuth.user) { // Only fetch data if isAuth.user is defined
      fetchData();
    }
  }, [isAuth.user]);

  return (
    <div>
      <Navbar />
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-4 text-custom-blue">Welcome, {isAuth.user}</h2>
        {data ? ( // Check if data is available
          <div>
            <h2 className="text-2xl font-bold mb-4">Website Performance Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-custom-yellow text-black p-4 rounded-lg">
                <h3 className="text-xl">Total Visits</h3>
                <p className="text-2xl">{data.visits}</p>
              </div>
              <div className="bg-custom-yellow text-black p-4 rounded-lg">
                <h3 className="text-xl">Unique Visitors</h3>
                <p className="text-2xl">{data.uniqueVisitors}</p>
              </div>
              <div className="bg-custom-yellow text-black p-4 rounded-lg">
                <h3 className="text-xl">Bounce Rate</h3>
                <p className="text-2xl">{data.bounceRate}</p>
              </div>
              <div className="bg-custom-yellow text-black p-4 rounded-lg">
                <h3 className="text-xl">Avg. Session Duration</h3>
                <p className="text-2xl">{data.averageSessionDuration}</p>
              </div>
              <div className="bg-custom-yellow text-black p-4 rounded-lg">
                <h3 className="text-xl">Pages/Session</h3>
                <p className="text-2xl">{data.pagesPerSession}</p>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/design">
                <button className="bg-custom-blue text-white rounded-xl p-2">Edit Portfolio</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <Link to="/design">
              <button className="bg-gray-600 text-white rounded-xl p-2">Create Portfolio</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
