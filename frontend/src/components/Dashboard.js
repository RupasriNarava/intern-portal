import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user');
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h1>Welcome, {userData.name}!</h1>
      
      <div className="dashboard-section">
        <h2>Your Referral Code</h2>
        <div className="referral-code">{userData.referralCode}</div>
      </div>
      
      <div className="dashboard-section">
        <h2>Total Donations Raised</h2>
        <div className="donations">${userData.totalDonations}</div>
      </div>
      
      <div className="dashboard-section">
        <h2>Your Rewards</h2>
        <div className="rewards">
          {userData.rewards.map(reward => (
            <div key={reward.id} className={`reward ${reward.unlocked ? 'unlocked' : 'locked'}`}>
              {reward.name} - {reward.unlocked ? '✓ Unlocked' : '🔒 Locked'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;