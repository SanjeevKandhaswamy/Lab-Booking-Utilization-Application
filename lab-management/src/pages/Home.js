import React from 'react';

const Home = () => {
  const labTypes = [
    { name: 'Computer Labs', icon: '💻', description: 'Modern computing facilities with latest software' },
    { name: 'Hardware Labs', icon: '🔧', description: 'Equipment for circuit design and testing' },
    { name: 'Chemical Labs', icon: '🧪', description: 'Fully equipped for experiments and research' },
    { name: 'Electrical Labs', icon: '⚡', description: 'Power systems and electrical engineering' },
    { name: 'Mechanical Labs', icon: '⚙️', description: 'Machinery and mechanical testing equipment' },
    { name: 'Electronic Labs', icon: '📱', description: 'Electronic component testing and design' },
    { name: 'Physics Labs', icon: '🔭', description: 'Experimental setup for physics research' }
  ];

  const features = [
    { title: 'Easy Scheduling', description: 'Simple interface to request and manage lab time' },
    { title: 'Real-time Updates', description: 'Instant notifications about lab availability' },
    { title: 'Resource Tracking', description: 'Monitor equipment usage and availability' },
    { title: 'Automated Reports', description: 'Generate usage reports for departments' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-5xl font-bold text-blue-700 mb-6">
            Welcome to Lab Management System
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Efficiently manage and allocate laboratory resources across departments
            with our comprehensive solution for faculty and students.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors shadow-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Key Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* User Roles Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">For Faculty</h2>
            <div className="space-y-3">
              <p className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Request lab access for your courses</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Track request status in real-time</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">✓</span> View lab allocation schedule</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Manage course requirements</p>
              <p className="flex items-center"><span className="text-blue-600 mr-2">✓</span> Access detailed equipment lists</p>
            </div>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Faculty Login
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">For Students</h2>
            <div className="space-y-3">
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> View allocated lab schedules</p>
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> Check upcoming lab sessions</p>
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> Access lab resources</p>
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> Track attendance</p>
              <p className="flex items-center"><span className="text-green-600 mr-2">✓</span> Submit lab reports online</p>
            </div>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Student Login
            </button>
          </div>
        </div>

        {/* Lab Types Section */}
        <div className="mt-16 mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Available Laboratory Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {labTypes.map((lab, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all hover:-translate-y-1 duration-300 border border-gray-100">
                <div className="text-4xl mb-3">{lab.icon}</div>
                <h3 className="font-medium text-lg text-gray-800 mb-2">{lab.name}</h3>
                <p className="text-gray-600 text-sm">{lab.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-gray-200">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">Lab Management System</h3>
              <p className="text-gray-600">Simplifying laboratory management for educational institutions.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Help</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">User Guide</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Lab Policies</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Equipment List</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="mr-2">📧</span> support@labsystem.edu</li>
                <li className="flex items-center"><span className="mr-2">📞</span> +1 (555) 123-4567</li>
                <li className="flex items-center"><span className="mr-2">📍</span> University Campus, Building B</li>
              </ul>
            </div>
          </div>
          <div className="text-center py-6 border-t border-gray-200 text-gray-600">
            <p>© {new Date().getFullYear()} Lab Management System. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;