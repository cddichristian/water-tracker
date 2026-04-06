import React from 'react';

const App = () => {
    return (
        <div>
            <h1>Water Tracker</h1>
            {/* Main application component managing dashboard and analytics */}
            <Dashboard />
            <Analytics />
        </div>
    );
};

const Dashboard = () => {
    return <div>Dashboard Component</div>;
};

const Analytics = () => {
    return <div>Analytics Component</div>;
};

export default App;