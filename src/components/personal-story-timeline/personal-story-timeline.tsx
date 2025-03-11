import React from 'react';

const PersonalStoryTimeline = () => {
  return (
    <div className="min-h-screen bg-primary-mint p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-playfair text-primary-black mb-8 text-center">
          AND THIS IS MY STORY
        </h1>
        
        <div className="space-y-8 md:space-y-12">
          {/* First Story Block */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
            <div className="w-full md:w-1/2">
              <p className="text-lg font-montserrat">
                Growing up, I didn't just want to learn, I wanted to excel at everything I could get close. There were times I wished for a magic wand to help me learn it all.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <svg className="w-full h-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" rx="10" fill="#FFB4A2"/>
                <path d="M100 50 L150 150 H50 Z" fill="#FF6B6B"/>
              </svg>
            </div>
          </div>

          {/* Second Story Block */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4 md:gap-8">
            <div className="w-full md:w-1/2">
              <p className="text-lg font-montserrat">
                I remember sitting in 11th grade when psychology sparked my interest.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <svg className="w-full h-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" rx="10" fill="#B5838D"/>
                <circle cx="100" cy="100" r="50" fill="#F5C84C"/>
              </svg>
            </div>
          </div>

          {/* Third Story Block */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
            <div className="w-full md:w-1/2">
              <p className="text-lg font-montserrat">
                Fast forward to 2021 — I'd just completed my master's degree, filled with the world.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <svg className="w-full h-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" rx="10" fill="#B7E4E1"/>
                <path d="M50 150 L100 50 L150 150" stroke="#000000" strokeWidth="8"/>
              </svg>
            </div>
          </div>

          {/* Fourth Story Block */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-4 md:gap-8">
            <div className="w-full md:w-1/2">
              <p className="text-lg font-montserrat">
                And here we are today — I complete my PhD with curiosity and a heart beautiful for learning.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <svg className="w-full h-auto" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" rx="10" fill="#FFB4A2"/>
                <circle cx="100" cy="100" r="60" fill="#FF6B6B"/>
                <circle cx="100" cy="100" r="30" fill="#F5C84C"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalStoryTimeline;