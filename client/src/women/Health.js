import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Activity, Heart, Moon, Droplet, Coffee, ArrowUp, ArrowDown, Plus, Settings, Bell, User } from 'lucide-react';

const Health = () => {
  // Mock data
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  
  const sleepData = [
    { day: 'Mon', hours: 7.5, quality: 85 },
    { day: 'Tue', hours: 6.8, quality: 75 },
    { day: 'Wed', hours: 8.2, quality: 90 },
    { day: 'Thu', hours: 7.1, quality: 80 },
    { day: 'Fri', hours: 6.5, quality: 70 },
    { day: 'Sat', hours: 8.5, quality: 95 },
    { day: 'Sun', hours: 7.8, quality: 88 },
  ];
  
  const activityData = [
    { day: 'Mon', steps: 8500, calories: 320 },
    { day: 'Tue', steps: 10200, calories: 410 },
    { day: 'Wed', steps: 7800, calories: 290 },
    { day: 'Thu', steps: 9300, calories: 380 },
    { day: 'Fri', steps: 8700, calories: 340 },
    { day: 'Sat', steps: 12500, calories: 520 },
    { day: 'Sun', steps: 6200, calories: 240 },
  ];
  
  const moodData = [
    { day: 'Mon', level: 7 },
    { day: 'Tue', level: 6 },
    { day: 'Wed', level: 8 },
    { day: 'Thu', level: 7 },
    { day: 'Fri', level: 5 },
    { day: 'Sat', level: 9 },
    { day: 'Sun', level: 8 },
  ];
  
  const nutritionData = [
    { name: 'Protein', value: 30 },
    { name: 'Carbs', value: 45 },
    { name: 'Fats', value: 25 },
  ];
  
  const NUTRITION_COLORS = ['#4f46e5', '#84cc16', '#f97316'];
  
  const hydrationGoal = 2000; // ml
  const currentHydration = 1500; // ml
  const hydrationPercentage = (currentHydration / hydrationGoal) * 100;
  
  const wellnessScore = 78;
  
  const habits = [
    { name: 'Meditation', completed: true, streak: 7 },
    { name: 'Vitamins', completed: true, streak: 12 },
    { name: 'Reading', completed: false, streak: 3 },
    { name: 'Stretching', completed: true, streak: 5 },
  ];
  
  const upcomingActivities = [
    { time: '10:00 AM', title: 'Yoga Class', type: 'fitness' },
    { time: '1:30 PM', title: 'Nutrition Consultation', type: 'health' },
    { time: '5:00 PM', title: 'Evening Walk', type: 'routine' },
  ];
  
  const progressCircle = (percentage) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="8" />
        <circle 
          cx="50" 
          cy="50" 
          r={radius} 
          fill="none" 
          stroke="#4f46e5" 
          strokeWidth="8" 
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="#1f2937" fontWeight="bold" fontSize="16">
          {percentage}%
        </text>
      </svg>
    );
  };
  
  const getMoodEmoji = (level) => {
    if (level >= 8) return '😄';
    if (level >= 6) return '🙂';
    if (level >= 4) return '😐';
    return '😔';
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Wellness Hub</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Bell size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Settings size={20} />
            </button>
            <button className="flex items-center space-x-2">
              <div className="bg-indigo-100 p-2 rounded-full">
                <User size={20} className="text-indigo-600" />
              </div>
              <span className="font-medium text-gray-700">Lisa</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button 
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'dashboard' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'habits' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              onClick={() => setActiveTab('habits')}
            >
              Habits
            </button>
            <button 
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'nutrition' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              onClick={() => setActiveTab('nutrition')}
            >
              Nutrition
            </button>
            <button 
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'activity' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              onClick={() => setActiveTab('activity')}
            >
              Activity
            </button>
            <button 
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'insights' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              onClick={() => setActiveTab('insights')}
            >
              Insights
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Time selector */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Your Wellness Overview</h2>
          <div className="flex space-x-2 bg-white rounded-lg shadow-sm p-1">
            <button 
              className={`px-4 py-2 text-sm rounded-md ${selectedTimeframe === 'day' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setSelectedTimeframe('day')}
            >
              Day
            </button>
            <button 
              className={`px-4 py-2 text-sm rounded-md ${selectedTimeframe === 'week' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setSelectedTimeframe('week')}
            >
              Week
            </button>
            <button 
              className={`px-4 py-2 text-sm rounded-md ${selectedTimeframe === 'month' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setSelectedTimeframe('month')}
            >
              Month
            </button>
          </div>
        </div>
        
        {/* Dashboard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Wellness score */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">Wellness Score</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <ArrowUp size={12} className="mr-1" />
                5%
              </span>
            </div>
            <div className="flex justify-center my-4">
              {progressCircle(wellnessScore)}
            </div>
            <div className="text-center text-sm text-gray-500 mt-2">
              Great progress! You're on track to meet your wellness goals.
            </div>
          </div>
          
          {/* Sleep tracking */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">Sleep</h3>
              <div className="flex items-center text-sm text-indigo-600 font-medium">
                <span>7.5 hrs</span>
                <span className="mx-1 text-gray-400">|</span>
                <span>85% quality</span>
              </div>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sleepData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                  <YAxis domain={[0, 10]} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="hours" stroke="#4f46e5" strokeWidth={2} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex justify-between text-sm text-gray-600">
              <div className="flex items-center">
                <Moon size={16} className="mr-1 text-indigo-500" />
                <span>10:45 PM - 6:15 AM</span>
              </div>
              <span className="text-green-600 font-medium">+30 min vs. last week</span>
            </div>
          </div>
          
          {/* Activity tracking */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">Activity</h3>
              <div className="flex items-center text-sm text-indigo-600 font-medium">
                <span>9,028 steps</span>
                <span className="mx-1 text-gray-400">|</span>
                <span>90% of goal</span>
              </div>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={activityData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                  <YAxis yAxisId="left" orientation="left" tick={{ fontSize: 12 }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="steps" stroke="#4f46e5" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="calories" stroke="#f97316" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex justify-between text-sm text-gray-600">
              <div className="flex items-center">
                <Activity size={16} className="mr-1 text-indigo-500" />
                <span>Active: 1h 45m</span>
              </div>
              <span className="text-green-600 font-medium">+12% vs. last week</span>
            </div>
          </div>
          
          {/* Nutrition */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium text-gray-900">Nutrition</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                On track
              </span>
            </div>
            <div className="flex">
              <div className="h-40 w-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={nutritionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {nutritionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={NUTRITION_COLORS[index % NUTRITION_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 ml-4 flex flex-col justify-center">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full mr-2 bg-indigo-600"></div>
                  <span className="text-sm text-gray-600">Protein: 30%</span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full mr-2 bg-lime-500"></div>
                  <span className="text-sm text-gray-600">Carbs: 45%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2 bg-orange-500"></div>
                  <span className="text-sm text-gray-600">Fats: 25%</span>
                </div>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-gray-600">1,850 cal consumed</span>
              <span className="text-green-600 font-medium">350 cal remaining</span>
            </div>
          </div>
          
          {/* Hydration */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">Hydration</h3>
              <div className="text-sm text-indigo-600 font-medium">
                {currentHydration}ml / {hydrationGoal}ml
              </div>
            </div>
            <div className="flex justify-center my-4">
              {progressCircle(hydrationPercentage)}
            </div>
            <div className="mt-4 grid grid-cols-8 gap-1">
              {Array.from({ length: 8 }).map((_, index) => (
                <button 
                  key={index}
                  className={`flex justify-center py-2 rounded ${index < 6 ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-400'}`}
                >
                  <Droplet size={20} fill={index < 6 ? "#93c5fd" : "none"} />
                </button>
              ))}
            </div>
            <div className="mt-4 text-sm text-center text-gray-600">
              Remember to drink water regularly throughout the day!
            </div>
          </div>
          
          {/* Mood tracking */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">Mood</h3>
              <span className="text-2xl" aria-label="Current mood">{getMoodEmoji(moodData[moodData.length - 1].level)}</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              {moodData.map((data) => (
                <div key={data.day} className="flex flex-col items-center">
                  <span className="text-xl mb-1">{getMoodEmoji(data.level)}</span>
                  <span className="text-xs text-gray-500">{data.day}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Mood Factors</h4>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Sleep Quality
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Exercise
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Stress
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Social
                </span>
              </div>
            </div>
          </div>
          
          {/* Today's habits */}
          <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">Today's Habits</h3>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {habits.map((habit) => (
                <div key={habit.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${habit.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                      {habit.completed ? '✓' : ''}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{habit.name}</p>
                      <p className="text-xs text-gray-500">{habit.streak} day streak</p>
                    </div>
                  </div>
                  <button className={`w-8 h-8 rounded-full flex items-center justify-center ${habit.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                    {habit.completed ? '✓' : '+'}
                  </button>
                </div>
              ))}
              <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                <button className="flex items-center text-sm text-gray-600 hover:text-indigo-600">
                  <Plus size={16} className="mr-1" />
                  Add New Habit
                </button>
              </div>
            </div>
          </div>
          
          {/* Calendar */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">Today's Schedule</h3>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                <Calendar size={16} />
              </button>
            </div>
            <div className="space-y-4">
              {upcomingActivities.map((activity, index) => (
                <div key={index} className="flex">
                  <div className="w-12 flex-shrink-0 flex flex-col items-center">
                    <span className="text-sm font-medium text-gray-900">{activity.time.split(' ')[0]}</span>
                    <span className="text-xs text-gray-500">{activity.time.split(' ')[1]}</span>
                  </div>
                  <div className={`flex-1 ml-4 p-3 rounded-lg ${
                    activity.type === 'fitness' ? 'bg-blue-50' : 
                    activity.type === 'health' ? 'bg-green-50' : 'bg-orange-50'
                  }`}>
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500 capitalize">{activity.type}</p>
                  </div>
                </div>
              ))}
              <button className="w-full mt-4 py-2 flex items-center justify-center text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                View Full Schedule
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Health;