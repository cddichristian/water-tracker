import React from 'react';

const Dashboard = () => {
    // Sample data for today's water intake
    const waterIntake = 2; // in liters
    const goal = 3; // in liters
    const progressPercentage = (waterIntake / goal) * 100;

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Today's Water Intake</h1>
            <h2>{waterIntake} L / {goal} L</h2>
            <div style={{ height: '30px', width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px', margin: '20px 0' }}>
                <div style={{ height: '100%', width: `${progressPercentage}%`, backgroundColor: '#76c7c0', borderRadius: '5px' }}></div>
            </div>
            <p>{progressPercentage.toFixed(0)}% of your daily goal</p>
        </div>
    );
};

export default Dashboard;
