import React, { useState } from "react";
import { Briefcase, CheckCircle, Clock, XCircle, Menu } from "lucide-react";
import { Card, CardContent } from "../components/Card";
//import { Button } from "@/components/ui/button";

const Femme = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Google", status: "Pending" },
    { id: 2, title: "UI/UX Designer", company: "Meta", status: "Interview" }, 
    { id: 3, title: "Backend Engineer", company: "Amazon", status: "Rejected" },
    { id: 4, title: "Product Manager", company: "Tesla", status: "Accepted" },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Accepted":
        return <CheckCircle className="text-green-500" />;
      case "Rejected":
        return <XCircle className="text-red-500" />;
      case "Interview":
        return <Clock className="text-yellow-500" />;
      default:
        return <Briefcase className="text-gray-500" />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`w-64 bg-white p-5 shadow-lg ${menuOpen ? "block" : "hidden"} md:block`}>
        <h2 className="text-xl font-bold mb-4">Job Dashboard</h2>
        <nav>
          <ul className="space-y-3">
            <li><button variant="ghost" className="w-full text-left">Dashboard</button></li>
            <li><button variant="ghost" className="w-full text-left">Applications</button></li>
            <li><button variant="ghost" className="w-full text-left">Settings</button></li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Mobile Menu Toggle */}
        <button className="md:hidden mb-4" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </button>

        <h1 className="text-2xl font-bold mb-6">Job Applications</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <Card key={job.id} className="p-4 shadow-md">
              <CardContent>
                <div className="flex items-center space-x-3">
                  {getStatusIcon(job.status)}
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.company}</p>
                  </div>
                </div>
                <p className="mt-2 text-gray-600">Status: <strong>{job.status}</strong></p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Femme;
