import React from 'react';

const ProgressRing = ({ radius, stroke, progress }) => {
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <svg height={radius} width={radius}>
            <circle
                stroke="#e6e6e6"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius / 2}
                cy={radius / 2}
            />
            <circle
                stroke="#4db8ff"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius / 2}
                cy={radius / 2}
                strokeDasharray={circumference + ' ' + circumference}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: 'stroke-dashoffset 0.5s ease 0s' }}
            />
        </svg>
    );
};

export default ProgressRing;