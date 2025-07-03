import React from "react";
import {
  Brain,
  BadgeCheck,
  FileText,
  Video,
  CalendarCheck,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "AI Interviewer",
      description:
        "Get interviewed by an AI that evaluates your answers in real-time.",
    },
    {
      icon: <FileText className="w-8 h-8 text-green-500" />,
      title: "Smart Resume Parsing",
      description:
        "Your resume is scanned for skills and matched with jobs automatically.",
    },
    {
      icon: <Video className="w-8 h-8 text-pink-500" />,
      title: "Video Interview Practice",
      description:
        "Practice real-time video interviews with intelligent feedback.",
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-blue-500" />,
      title: "Instant Feedback",
      description:
        "Get detailed scoring and suggestions after every interview round.",
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-yellow-500" />,
      title: "Schedule & Track",
      description:
        "Keep track of interview schedules and progress across companies.",
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "AI-Powered Insights",
      description:
        "Receive personalized tips and resources based on your performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Platform Features</h2>
        <p className="text-gray-400">
          Explore the AI-powered tools that enhance your recruitment experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full cursor-pointer">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl 
             transition duration-300 border border-gray-800 
             transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
