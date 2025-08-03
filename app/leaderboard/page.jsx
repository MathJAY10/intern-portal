'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LeaderboardPage() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  // Simulate API call (you can replace this with fetch to your API)
  useEffect(() => {
    const data = [
      { name: 'Jatin bisthl', amount: 8500},
      { name: 'Kunal', amount: 6700 },
      { name: 'Riya', amount: 6950 },
      { name: 'Aman', amount: 5800 },
    ];
    const sortedData = data.sort((a, b) => b.amount - a.amount);
    setLeaderboardData(sortedData);
  }, []);

  // CSV Download Function
  const downloadCSV = (data) => {
    if (!data || data.length === 0) return;
    const headers = Object.keys(data[0]);
    const csvRows = [
      headers.join(','), // header row
      ...data.map(row => headers.map(h => JSON.stringify(row[h])).join(',')), // data rows
    ];
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leaderboard.csv';
    a.click();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>

      {leaderboardData.length > 0 ? (
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={leaderboardData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar
                dataKey="amount"
                fill="#10b981"
                barSize={30}
                isAnimationActive={true}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-gray-500">No data available</p>
      )}

      <button
        onClick={() => downloadCSV(leaderboardData)}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download CSV
      </button>

      <div className="mt-6">
        <Link href="/dashboard" className="text-blue-600 underline">
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
