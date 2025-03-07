import React, { useState } from 'react';
import { Search, Calendar, Users, BookOpen, Award, Briefcase, Building, MessageCircle, ChevronRight, Star, Download, ExternalLink, User, Bell, Settings } from 'lucide-react';

const WomenProfessionalDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  
  // Mock data
  const upcomingDeadlines = [
    { id: 1, title: "Women in Tech Scholarship", organization: "Google", deadline: "March 15, 2025", amount: "$10,000", category: "tech" },
    { id: 2, title: "Female Founders Grant", organization: "SheEO", deadline: "April 2, 2025", amount: "$15,000", category: "business" },
    { id: 3, title: "Women in Research Fellowship", organization: "National Science Foundation", deadline: "March 30, 2025", amount: "$25,000", category: "research" }
  ];
  
  const recommendedMentors = [
    { id: 1, name: "Dr. Sarah Chen", title: "AI Research Director", company: "TechCorp", expertise: ["Machine Learning", "Leadership"], availability: "Weekly" },
    { id: 2, name: "Jessica Wong", title: "Startup Founder & CEO", company: "FinTech Solutions", expertise: ["Entrepreneurship", "Finance"], availability: "Monthly" },
    { id: 3, name: "Maria Garcia", title: "Senior Product Manager", company: "Major Software", expertise: ["Product Strategy", "UX Design"], availability: "Bi-weekly" }
  ];
  
  const upcomingEvents = [
    { id: 1, title: "Women in Leadership Summit", date: "March 20, 2025", type: "Conference", virtual: true },
    { id: 2, title: "Startup Funding Workshop", date: "April 5, 2025", type: "Workshop", virtual: false },
    { id: 3, title: "Resume Review Session", date: "March 12, 2025", type: "Workshop", virtual: true }
  ];
  
  const entrepreneurResources = [
    { id: 1, title: "Business Plan Template", type: "Template", popularity: 4.8 },
    { id: 2, title: "Funding Pitch Deck Guide", type: "Guide", popularity: 4.9 },
    { id: 3, title: "Financial Projections Spreadsheet", type: "Tool", popularity: 4.7 },
    { id: 4, title: "Legal Considerations for Startups", type: "Guide", popularity: 4.5 }
  ];
  
  const careerSkillProgress = [
    { skill: "Leadership", progress: 75 },
    { skill: "Public Speaking", progress: 60 },
    { skill: "Negotiation", progress: 45 },
    { skill: "Technical Writing", progress: 80 }
  ];

  const renderProgressBar = (progress) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-800">EmpowerHer</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Bell size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <Settings size={20} />
            </button>
            <button className="flex items-center space-x-2">
              <div className="bg-purple-100 p-2 rounded-full">
                <User size={20} className="text-purple-600" />
              </div>
              <span className="font-medium text-gray-700">Michelle Johnson</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button 
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'overview' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              onClick={() => setActiveSection('overview')}
            >
              Overview
            </button>
            <button 
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'scholarships' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              onClick={() => setActiveSection('scholarships')}
            >
              Scholarships & Programs
            </button>
            <button 
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'resume' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              onClick={() => setActiveSection('resume')}
            >
              Resume & Portfolio
            </button>
            <button 
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'entrepreneurship' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              onClick={() => setActiveSection('entrepreneurship')}
            >
              Entrepreneurship
            </button>
            <button 
              className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSection === 'networking' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
              onClick={() => setActiveSection('networking')}
            >
              Networking & Mentorship
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and summary */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Your Professional Development Hub</h2>
            <p className="text-sm text-gray-600 mt-1">Curated resources to advance your career and ventures</p>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search resources..."
              className="pl-9 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-64"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>
        
        {/* Dashboard grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Scholarships & Programs */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">Scholarships & Programs</h3>
                <Award className="text-white" size={24} />
              </div>
              <p className="text-purple-100 text-sm mt-1">Application deadlines approaching</p>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                {upcomingDeadlines.map((scholarship) => (
                  <div key={scholarship.id} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">{scholarship.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        scholarship.category === 'tech' ? 'bg-blue-100 text-blue-800' :
                        scholarship.category === 'business' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>{scholarship.category}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{scholarship.organization}</p>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-red-600 font-medium">Due: {scholarship.deadline}</span>
                      <span className="text-gray-700">{scholarship.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 flex justify-center items-center text-sm font-medium text-purple-600 hover:text-purple-800">
                View All Opportunities <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
          
          {/* Resume & Portfolio Builder */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 px-6 py-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">Resume & Portfolio</h3>
                <Briefcase className="text-white" size={24} />
              </div>
              <p className="text-indigo-100 text-sm mt-1">AI-powered tools to showcase your skills</p>
            </div>
            <div className="p-5">
              <div className="mb-4 pb-4 border-b border-gray-100">
                <h4 className="font-medium text-gray-900 mb-2">Resume Completion</h4>
                <div className="flex items-center">
                  {renderProgressBar(85)}
                  <span className="ml-3 text-sm font-medium text-gray-700">85%</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Add 2 more work experiences to complete your profile</p>
              </div>
              
              <h4 className="font-medium text-gray-900 mb-3">Professional Skills</h4>
              <div className="space-y-3">
                {careerSkillProgress.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{skill.skill}</span>
                      <span className="text-gray-500">{skill.progress}%</span>
                    </div>
                    {renderProgressBar(skill.progress)}
                  </div>
                ))}
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="py-2 px-3 flex justify-center items-center text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                  <Download size={16} className="mr-1" /> Export Resume
                </button>
                <button className="py-2 px-3 flex justify-center items-center text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                  AI Review
                </button>
              </div>
            </div>
          </div>
          
          {/* Networking & Mentorship */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">Networking & Mentorship</h3>
                <Users className="text-white" size={24} />
              </div>
              <p className="text-green-100 text-sm mt-1">Connect with professional women</p>
            </div>
            <div className="p-5">
              <h4 className="font-medium text-gray-900 mb-3">Recommended Mentors</h4>
              <div className="space-y-3">
                {recommendedMentors.map((mentor) => (
                  <div key={mentor.id} className="flex items-start pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-semibold">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="ml-3 flex-1">
                      <h5 className="font-medium text-gray-900">{mentor.name}</h5>
                      <p className="text-xs text-gray-600">{mentor.title} at {mentor.company}</p>
                      <div className="flex mt-1 flex-wrap gap-1">
                        {mentor.expertise.map((exp, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">{exp}</span>
                        ))}
                      </div>
                    </div>
                    <button className="ml-2 flex-shrink-0 py-1 px-3 text-xs font-medium text-teal-700 bg-teal-100 rounded-lg hover:bg-teal-200">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 flex justify-center items-center text-sm font-medium text-teal-600 hover:text-teal-800">
                Find More Mentors <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
          
          {/* Entrepreneurship & Startups */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">Entrepreneurship</h3>
                <Building className="text-white" size={24} />
              </div>
              <p className="text-amber-100 text-sm mt-1">Resources for your business ventures</p>
            </div>
            <div className="p-5">
              <h4 className="font-medium text-gray-900 mb-3">Popular Resources</h4>
              <div className="space-y-3">
                {entrepreneurResources.map((resource) => (
                  <div key={resource.id} className="flex justify-between items-center pb-2 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <div>
                      <h5 className="font-medium text-gray-900">{resource.title}</h5>
                      <span className="text-xs text-gray-500">{resource.type}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className={i < Math.floor(resource.popularity) ? "text-yellow-400" : "text-gray-300"} fill={i < Math.floor(resource.popularity) ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <button className="p-1 text-orange-600 hover:text-orange-800">
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-100">
                <h5 className="font-medium text-gray-900 mb-1">Funding Opportunity Alert</h5>
                <p className="text-sm text-gray-700">Women Founders Fund is accepting applications for Q2 2025</p>
                <button className="mt-2 text-sm text-orange-600 hover:text-orange-800 font-medium flex items-center">
                  Learn More <ExternalLink size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Events Calendar */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-rose-500 to-red-500 px-6 py-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">Upcoming Events</h3>
                <Calendar className="text-white" size={24} />
              </div>
              <p className="text-rose-100 text-sm mt-1">Networking and learning opportunities</p>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-gray-900">{event.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        event.virtual ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                      }`}>{event.virtual ? 'Virtual' : 'In-Person'}</span>
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-gray-600">{event.date}</span>
                      <span className="text-gray-500">{event.type}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 flex justify-center items-center text-sm font-medium text-rose-600 hover:text-rose-800">
                View Full Calendar <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
          
          {/* Learning Resources */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-6 py-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">Learning Resources</h3>
                <BookOpen className="text-white" size={24} />
              </div>
              <p className="text-violet-100 text-sm mt-1">Curated courses and materials</p>
            </div>
            <div className="p-5">
              <h4 className="font-medium text-gray-900 mb-3">Recommended For You</h4>
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border border-gray-200">
                  <div className="h-32 bg-gray-200 flex items-center justify-center">
                    <img src="/api/placeholder/300/150" alt="Course thumbnail" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3">
                    <h5 className="font-medium text-gray-900">Negotiation Skills for Women in Business</h5>
                    <p className="text-xs text-gray-600 mt-1">8 modules · 4.5 hours · Beginner friendly</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Free</span>
                      <button className="text-xs font-medium text-purple-600 hover:text-purple-800">
                        Start Learning
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <div>
                    <h5 className="font-medium text-gray-900">Financial Planning for Entrepreneurs</h5>
                    <p className="text-xs text-gray-600">5 hours · Intermediate</p>
                  </div>
                  <button className="text-xs px-3 py-1 font-medium bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200">
                    Enroll
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-medium text-gray-900">Tech Leadership Masterclass</h5>
                    <p className="text-xs text-gray-600">10 hours · Advanced</p>
                  </div>
                  <button className="text-xs px-3 py-1 font-medium bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200">
                    Enroll
                  </button>
                </div>
              </div>
              
              <button className="w-full mt-4 py-2 flex justify-center items-center text-sm font-medium text-purple-600 hover:text-purple-800">
                Browse All Courses <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WomenProfessionalDashboard;