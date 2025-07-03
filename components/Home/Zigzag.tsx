import React from 'react';
import Image from 'next/image';
import Hireverse from '@/assets/images/Hireverse.png';

const InfoZigZag = () => {
  return (
    <div className="bg-gray-950 text-white py-20 px-6 space-y-24">
      
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl font-bold mb-4">How Our AI Recruitment Platform Works</h2>
        <p className="text-gray-400">
          From smart matching to virtual interviews — here’s how we streamline the hiring process using AI.
        </p>
      </div>

      {/* First Section: Image Left, Text Right */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full h-auto">
          <Image
            src={Hireverse}
            alt="AI Interview"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">AI-Powered Interviews</h2>
          <p className="text-gray-400">
            Our virtual AI interviewer asks intelligent questions and evaluates responses with instant feedback. Experience personalized interviews anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Second Section: Text Left, Image Right */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Smart Job Matching</h2>
          <p className="text-gray-400">
            Our system scans resumes and job descriptions to connect candidates with the best-fit roles using deep learning algorithms.
          </p>
        </div>
        <div className="w-full h-auto">
          <Image
            src={Hireverse}
            alt="AI Interview"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoZigZag;
