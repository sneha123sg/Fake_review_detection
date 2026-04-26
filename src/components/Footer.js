import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">ReviewGuard AI</h3>
            <p className="text-gray-400 text-sm">
              An academic project utilizing Soft Computing , Cyber Security techniques and AIML
              to identify fake reviews using machine learning algorithms.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Project Details</h3>
            {/* <div className="text-gray-400 text-sm space-y-1">
              <p>Student: [ Farheen Gulam]</p>
              <p>Course: [AIML, Soft Computing & Cyber Security]</p>
              <p>Institution: [SJCEM CAP STONE PROJECT]</p>
              <p>Year: 2025</p>
            </div> */}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
          <p>&copy; 2025 ReviewGuard AI. Academic Project. All rights reserved with  Farheen Gulam </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
