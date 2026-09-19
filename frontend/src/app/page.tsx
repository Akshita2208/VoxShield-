"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [health, setHealth] = useState<{ status: string; service: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function checkHealth() {
      try {
        const res = await fetch("http://localhost:8000/health");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setHealth(data);
      } catch (e: any) {
        setError(e.message || "Failed to connect to backend");
      } finally {
        setLoading(false);
      }
    }

    checkHealth();
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">VoxShield</h1>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">System Status</h2>
          
          <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
            <span className="font-medium text-gray-300">Backend API</span>
            
            {loading ? (
              <span className="flex items-center text-yellow-400">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Connecting...
              </span>
            ) : error ? (
              <span className="text-red-400 font-medium flex items-center">
                <span className="h-2 w-2 bg-red-400 rounded-full mr-2"></span>
                Disconnected
              </span>
            ) : (
              <span className="text-green-400 font-medium flex items-center">
                <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                Connected
              </span>
            )}
          </div>

          {error && (
            <div className="p-3 text-sm text-red-300 bg-red-900/30 rounded border border-red-800">
              {error}. Ensure the FastAPI server is running on port 8000.
            </div>
          )}

          {health && (
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-700 text-sm overflow-auto">
              <pre className="text-gray-300">{JSON.stringify(health, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
