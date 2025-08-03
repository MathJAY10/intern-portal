'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="p-4 flex justify-between items-center bg-white shadow-sm">
        <h2 className="text-2xl font-bold text-blue-600">InternPortal</h2>
        <div className="space-x-4">
          <button className="px-4 py-2 text-blue-600 hover:text-blue-700">Login</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          She Can Foundation InternPortal
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Empowering women through technology and innovation
        </p>
        <button
          onClick={() => router.push('/dashboard')}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Enter Dashboard
        </button>
      </main>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Leaderboard</h3>
            <p className="text-gray-600">Track your performance and compete with peers</p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Performance Analytics</h3>
            <p className="text-gray-600">Visualize your progress with interactive charts</p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Rewards</h3>
            <p className="text-gray-600">Earn recognition for top performance</p>
          </div>
        </div>
      </section>
    </div>
  );
}