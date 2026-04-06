import React from 'react';

const DailyGoal = ({ goal }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', width: '250px', textAlign: 'center' }}>
            <h2>Daily Hydration Goal</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{goal} L</p>
        </div>
    );
};

export default DailyGoal;