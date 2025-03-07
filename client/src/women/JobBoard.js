import React, { useState } from 'react';

const JobBoard = () => {
  // Sample user data
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    skills: ["JavaScript", "React", "Node.js", "Python", "Data Analysis"],
    interests: ["Machine Learning", "Web Development", "Fintech"],
    salary: 85000,
    targetSalary: 110000,
    savedJobs: 12
  });

  // Sample job matches based on skills and interests
  const [jobMatches, setJobMatches] = useState([
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechGrowth Inc.",
      location: "Remote",
      salary: "$110,000 - $130,000",
      match: 92,
      description: "Looking for an experienced React developer to build innovative financial applications.",
      skills: ["React", "JavaScript", "Redux", "TypeScript"]
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "FinanceAI",
      location: "New York, NY",
      salary: "$120,000 - $140,000",
      match: 87,
      description: "Join our team to develop machine learning models for financial forecasting.",
      skills: ["Python", "Machine Learning", "Data Analysis", "SQL"]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "CareerBoost",
      location: "San Francisco, CA",
      salary: "$105,000 - $125,000",
      match: 85,
      description: "Build the next generation of career growth tools with our dynamic team.",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
      id: 4,
      title: "Financial App Developer",
      company: "WealthWise",
      location: "Remote",
      salary: "$95,000 - $115,000",
      match: 81,
      description: "Create applications to help users track and grow their wealth.",
      skills: ["React", "JavaScript", "Financial API Integration"]
    }
  ]);

  // Sample financial metrics
  const [financialMetrics, setFinancialMetrics] = useState({
    currentSalary: 85000,
    industryAverage: 92000,
    potentialGrowth: 38,
    savedAmount: 32500,
    investmentGrowth: 14.2
  });

  // Sample learning resources
  const [learningResources, setLearningResources] = useState([
    { id: 1, title: "Advanced React Patterns", type: "Course", progress: 65 },
    { id: 2, title: "Financial Planning for Tech Professionals", type: "Workshop", progress: 30 },
    { id: 3, title: "Machine Learning Fundamentals", type: "Certification", progress: 80 }
  ]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="bg-white rounded-lg shadow p-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Career & Financial Growth Dashboard</h1>
        <p className="text-gray-600">Welcome back, {userData.name}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Career Insights Panel */}
        <div className="bg-white rounded-lg shadow p-4 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Career Insights</h2>
          
          <div className="mb-4">
            <h3 className="font-medium text-gray-700">Skills</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {userData.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium text-gray-700">Interests</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {userData.interests.map((interest, index) => (
                <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-medium text-gray-700">Financial Health</h3>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Current Salary</p>
                <p className="text-lg font-semibold">${financialMetrics.currentSalary.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Industry Average</p>
                <p className="text-lg font-semibold">${financialMetrics.industryAverage.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Growth Potential</p>
                <p className="text-lg font-semibold text-green-600">+{financialMetrics.potentialGrowth}%</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Investment Growth</p>
                <p className="text-lg font-semibold text-green-600">+{financialMetrics.investmentGrowth}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Matched Job Board */}
        <div className="bg-white rounded-lg shadow p-4 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">AI-Matched Job Opportunities</h2>
          
          <div className="space-y-4">
            {jobMatches.map(job => (
              <div key={job.id} className="border border-gray-200 rounded-lg p-4 transition-all hover:shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <p className="text-gray-600">{job.company} • {job.location}</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                    {job.match}% Match
                  </div>
                </div>
                
                <p className="mt-2 text-gray-700">{job.description}</p>
                
                <div className="mt-3">
                  <p className="text-gray-600 font-medium">{job.salary}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Apply Now
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              Load More Matches
            </button>
          </div>
        </div>
      </div>
      
      {/* Learning Resources */}
      <div className="mt-6 bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Learning Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {learningResources.map(resource => (
            <div key={resource.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{resource.title}</h3>
                  <p className="text-gray-600 text-sm">{resource.type}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${resource.progress}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600 mt-1">{resource.progress}% Complete</p>
              </div>
              
              <button className="mt-4 w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Continue Learning
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobBoard;