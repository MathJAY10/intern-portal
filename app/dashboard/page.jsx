'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

export default function DashboardPage() {
  const [intern, setIntern] = useState(null);
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    async function fetchIntern() {
      try {
        const res = await fetch('/api/intern');
        const data = await res.json();
        setIntern(data);
      } catch (err) {
        console.error('Error fetching intern:', err);
      }
    }

    // Static leaderboard data
    const data = [
      { name: 'Jatin Bisthl', amount: 8500 },
      { name: 'Kunal', amount: 6700 },
      { name: 'Riya', amount: 6950 },
      { name: 'Aman', amount: 5800 },
    ];
    const sortedData = data.sort((a, b) => b.amount - a.amount);

    fetchIntern();
    setLeaderboardData(sortedData);
  }, []);

  const downloadCSV = (data) => {
    if (!data || data.length === 0) return;
    const headers = Object.keys(data[0]);
    const csvRows = [
      headers.join(','),
      ...data.map((row) => headers.map((h) => JSON.stringify(row[h])).join(',')),
    ];
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leaderboard.csv';
    a.click();
  };

  if (!intern) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 space-y-12">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link
          href="/leaderboard"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Leaderboard
        </Link>
      </div>

      {/* Intern Info */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-2">
        <h2 className="text-xl font-semibold">Intern Info</h2>
        <p><strong>Name:</strong> {intern.name}</p>
        <p><strong>Referral Code:</strong> {intern.referralCode}</p>
        <p><strong>Total Contribution:</strong> ₹{intern.totalContribution}</p>
      </div>

      {/* Monthly Contribution Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Monthly Contributions</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={intern.monthlyContribution}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#10b981"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Leaderboard Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
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
      </div>

      {/* Rewards & Gifts Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">🎁 Rewards & Gifts</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-200">
          <li>Top 3 interns win Amazon vouchers</li>
          <li>Exclusive certificates for those scoring above ₹5000</li>
          <li>Special merchandise for consistent performers</li>
        </ul>
      </div>
    </div>
  );
}
