'use client';

import React from 'react';

// Mock player stats data for visualizations
const accuracyData = [
  { month: 'Jan', accuracy: 42 },
  { month: 'Feb', accuracy: 45 },
  { month: 'Mar', accuracy: 48 },
  { month: 'Apr', accuracy: 51 },
  { month: 'May', accuracy: 53 },
  { month: 'Jun', accuracy: 58 },
  { month: 'Jul', accuracy: 62 },
];

const killData = [
  { game: 'Game 1', kills: 7 },
  { game: 'Game 2', kills: 12 },
  { game: 'Game 3', kills: 9 },
  { game: 'Game 4', kills: 15 },
  { game: 'Game 5', kills: 11 },
  { game: 'Game 6', kills: 18 },
  { game: 'Game 7', kills: 16 },
];

const kdaData = [
  { match: 'Match 1', kills: 7, deaths: 4, assists: 3 },
  { match: 'Match 2', kills: 12, deaths: 5, assists: 8 },
  { match: 'Match 3', kills: 9, deaths: 6, assists: 10 },
  { match: 'Match 4', kills: 15, deaths: 7, assists: 5 },
  { match: 'Match 5', kills: 11, deaths: 4, assists: 9 },
  { match: 'Match 6', kills: 18, deaths: 8, assists: 12 },
  { match: 'Match 7', kills: 16, deaths: 6, assists: 7 },
];

const skillRadarData = [
  { skill: 'Accuracy', value: 65 },
  { skill: 'Reaction Time', value: 80 },
  { skill: 'Game Sense', value: 70 },
  { skill: 'Movement', value: 75 },
  { skill: 'Teamwork', value: 60 },
  { skill: 'Map Knowledge', value: 85 },
];

export default function EvolutionClient() {
  return (
    <div className="container py-12 px-4 w-full mx-auto">
      {/* <div className='w-auto mx-auto'> */}
        <h1 className="text-4xl font-bold mb-12 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Player Evolution</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 p-8 rounded-xl border border-zinc-700/50 shadow-xl hover:shadow-purple-500/10 transition-all">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-100">Accuracy Progression</h2>
            <div className="h-[300px] w-full flex items-center justify-center">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl font-bold text-green-400 mb-2">58%</div>
                <p className="text-zinc-300 text-lg mt-2">Average accuracy</p>
                <p className="text-sm text-green-400 mt-1 font-medium">+16% from start</p>
              </div>
            </div>
            <p className="mt-4 text-zinc-400 text-sm">Your accuracy has improved 20% over the last 6 months</p>
          </div>

          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 p-8 rounded-xl border border-zinc-700/50 shadow-xl hover:shadow-purple-500/10 transition-all">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-100">Recent Kill Performance</h2>
            <div className="h-[300px] w-full flex flex-col items-center justify-center">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-6xl font-bold text-purple-400 mb-2">12.5</div>
                <p className="text-zinc-300 text-lg mt-2">Average kills per game</p>
                <p className="text-sm text-purple-400 mt-1 font-medium">+3.2 from last month</p>
              </div>
            </div>
            <p className="mt-4 text-zinc-400 text-sm">Your kill rate is trending upward in recent games</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 p-8 rounded-xl border border-zinc-700/50 shadow-xl hover:shadow-purple-500/10 transition-all">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-100">KDA Ratio Breakdown</h2>
            <div className="h-[300px] flex items-center justify-center">
              <div className="grid grid-cols-3 gap-6 w-full">
                <div className="text-center bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/30 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-green-400 mb-2">14.0</div>
                  <p className="text-zinc-300 text-sm mt-1">Avg. Kills</p>
                </div>
                <div className="text-center bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/30 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-red-400 mb-2">5.7</div>
                  <p className="text-zinc-300 text-sm mt-1">Avg. Deaths</p>
                </div>
                <div className="text-center bg-zinc-800/60 p-4 rounded-lg border border-zinc-700/30 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-blue-400 mb-2">7.7</div>
                  <p className="text-zinc-300 text-sm mt-1">Avg. Assists</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-zinc-400 text-sm">Your KDA ratio improved to 2.8 in your last match</p>
          </div>

          <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 p-8 rounded-xl border border-zinc-700/50 shadow-xl hover:shadow-purple-500/10 transition-all">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-100">Skill Distribution</h2>
            <div className="h-[300px] flex flex-col items-center justify-center space-y-5 p-2">
              {skillRadarData.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between mb-2">
                    <span className="text-zinc-200 font-medium">{skill.skill}</span>
                    <span className="text-zinc-300 font-bold">{skill.value}%</span>
                  </div>
                  <div className="w-full bg-zinc-700/50 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.value}%`,
                        background: `linear-gradient(90deg, ${getSkillGradient(index).start} 0%, ${getSkillGradient(index).end} 100%)`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 p-8 rounded-xl border border-zinc-700/50 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-100">Performance Insights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-zinc-800/60 rounded-lg border border-zinc-700/30 hover:border-green-500/30 hover:bg-zinc-800/80 transition-all">
              <h3 className="font-medium text-zinc-200 mb-2">Overall Accuracy</h3>
              <p className="text-3xl font-bold text-green-400 mb-1">58%</p>
              <p className="text-sm text-zinc-400">+16% from start</p>
            </div>
            <div className="p-6 bg-zinc-800/60 rounded-lg border border-zinc-700/30 hover:border-purple-500/30 hover:bg-zinc-800/80 transition-all">
              <h3 className="font-medium text-zinc-200 mb-2">Avg. Kills/Game</h3>
              <p className="text-3xl font-bold text-purple-400 mb-1">12.5</p>
              <p className="text-sm text-zinc-400">+3.2 from last month</p>
            </div>
            <div className="p-6 bg-zinc-800/60 rounded-lg border border-zinc-700/30 hover:border-blue-500/30 hover:bg-zinc-800/80 transition-all">
              <h3 className="font-medium text-zinc-200 mb-2">KDA Ratio</h3>
              <p className="text-3xl font-bold text-blue-400 mb-1">2.8</p>
              <p className="text-sm text-zinc-400">+0.5 from last month</p>
            </div>
            <div className="p-6 bg-zinc-800/60 rounded-lg border border-zinc-700/30 hover:border-pink-500/30 hover:bg-zinc-800/80 transition-all">
              <h3 className="font-medium text-zinc-200 mb-2">Win Rate</h3>
              <p className="text-3xl font-bold text-pink-400 mb-1">62%</p>
              <p className="text-sm text-zinc-400">+8% from last month</p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

// Helper function to get different colors for skill bars
function getSkillColor(index: number) {
  const colors = ['#4ade80', '#8b5cf6', '#3b82f6', '#ec4899', '#f43f5e', '#f97316'];
  return colors[index % colors.length];
}

// Helper function to get gradient colors for skill bars
function getSkillGradient(index: number) {
  const gradients = [
    { start: '#4ade80', end: '#22c55e' }, // Green
    { start: '#a78bfa', end: '#8b5cf6' }, // Purple
    { start: '#60a5fa', end: '#3b82f6' }, // Blue
    { start: '#f472b6', end: '#ec4899' }, // Pink
    { start: '#fb7185', end: '#f43f5e' }, // Red
    { start: '#fb923c', end: '#f97316' }  // Orange
  ];
  return gradients[index % gradients.length];
} 