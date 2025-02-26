import React, { useState } from 'react';

const FacultyDashboard = () => {
  const [labRequest, setLabRequest] = useState({
    labType: '',
    subject: '',
    date: '',
    time: '',
    duration: '',
    description: ''
  });

  const [requests, setRequests] = useState([
    { id: 1, labType: 'Computer Lab', status: 'Pending', date: '2025-03-01' },
    { id: 2, labType: 'Hardware Lab', status: 'Approved', date: '2025-03-05' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle lab request submission
    console.log('Lab request submitted:', labRequest);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Faculty Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Lab Request Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Request Lab Access</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lab Type
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={labRequest.labType}
                  onChange={(e) => setLabRequest({...labRequest, labType: e.target.value})}
                >
                  <option value="">Select Lab Type</option>
                  <option value="computer">Computer Lab</option>
                  <option value="hardware">Hardware Lab</option>
                  <option value="chemical">Chemical Lab</option>
                  <option value="electrical">Electrical Lab</option>
                  <option value="mechanical">Mechanical Lab</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={labRequest.subject}
                  onChange={(e) => setLabRequest({...labRequest, subject: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    value={labRequest.date}
                    onChange={(e) => setLabRequest({...labRequest, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    value={labRequest.time}
                    onChange={(e) => setLabRequest({...labRequest, time: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (hours)
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={labRequest.duration}
                  onChange={(e) => setLabRequest({...labRequest, duration: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  rows="3"
                  value={labRequest.description}
                  onChange={(e) => setLabRequest({...labRequest, description: e.target.value})}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Request Status */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">My Requests</h2>
            <div className="space-y-4">
              {requests.map((request) => (
                <div
                  key={request.id}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{request.labType}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        request.status === 'Approved'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {request.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Date: {request.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;