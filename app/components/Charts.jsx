'use client'
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Dummy data for contributions
const data = [
  { name: 'Intern A', amount: 4000 },
  { name: 'Intern B', amount: 3000 },
  { name: 'Intern C', amount: 5000 },
  { name: 'Intern D', amount: 2000 },
];

const Charts = () => {
  return (
    <div className="w-full h-[400px] bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Total Money Contribution</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
