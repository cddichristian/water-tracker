import React from 'react';

const AIAssistant = () => {
    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '300px',
            height: '400px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            zIndex: '999'
        }}>
            <h2>AI Chat Assistant</h2>
            <div style={{ padding: '10px' }}>
                <p>Smart hydration recommendations to keep you healthy!</p>
                {/* Chat interface goes here */}
            </div>
        </div>
    );
};

export default AIAssistant;