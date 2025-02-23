import React from 'react'

function GrowthSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
    <div className="flex flex-col items-center">
      <h1 className="flex flex-wrap items-center justify-center text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
        PROMISING
        <span className="flex items-center ml-3">
          <span className="relative">
            GROWTH
            {/* Decorative background for "GROWTH" */}
            <span 
              className="absolute inset-0 bg-teal-600/80 -skew-x-6 transform -rotate-1"
              style={{ zIndex: -1 }}
            ></span>
          </span>
        </span>
      </h1>
      
      <div className="mt-4 md:mt-6 flex items-center">
        <span className="text-xl md:text-2xl italic font-serif">since day</span>
        <span className="relative mx-2">
          <span className="text-xl md:text-2xl italic font-serif">One</span>
          {/* Yellow circle behind "One" */}
          <span 
            className="absolute inset-0 -inset-x-2 bg-yellow-400 rounded-full -z-10 transform -rotate-3"
            style={{ padding: '0.25rem' }}
          ></span>
        </span>
      </div>
    </div>
  </div>
  )
}

export default GrowthSection