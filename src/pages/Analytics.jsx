import React from 'react';
import { Line } from 'react-chartjs-2';

const Analytics = () => {
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
            {
                label: 'Water Intake (Liters)',
                data: [2, 3, 2.5, 4, 3.5, 4.5, 5], // Example data
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };
    
    return (
        <div>
            <h2>7-Day Water Analytics Dashboard</h2>
            <Line data={data} />
        </div>
    );
};

export default Analytics;