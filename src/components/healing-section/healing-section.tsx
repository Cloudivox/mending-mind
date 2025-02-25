import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const words = [
  'Startup',
  'SaaS',
  'AI',
  'Web3',
  'FinTech',
  'Healthcare',
  'EdTech',
  'CleanTech'
];

function App() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(true);
      }, 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Find your next 
            <div className="h-[1.5em] overflow-hidden inline-flex flex-col ml-3">
              <span 
                className={`transition-transform duration-200 ${
                  isAnimating ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                {words[currentWordIndex]}
              </span>
            </div>
            <br />
            opportunity
          </h1>
          
          <p className="text-gray-400 text-xl mb-8">
            Discover your ideal role in tech's most innovative companies.
            Join thousands of tech professionals who've found their dream jobs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center hover:bg-gray-100 transition-colors">
              Find Jobs
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors">
              For Employers
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:scale-105 transition-transform"
            >
              <div className="text-4xl font-bold mb-2">
                {(i + 1) * 10}K+
              </div>
              <div className="text-gray-400">
                {i === 0 && 'Tech Jobs'}
                {i === 1 && 'Companies'}
                {i === 2 && 'Developers'}
                {i === 3 && 'Placements'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;