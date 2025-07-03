import { useEffect, useState } from 'react';
import axios from 'axios';
import { isAdminAuthenticated, logoutAdmin } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate('/admin-login');
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/all-feedback`);
        setFeedbacks(res.data);
      } catch (err) {
        console.error('Error fetching feedbacks:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin-login');
  };

  const filteredFeedback = feedbacks.filter(fb =>
    !filter ? true : fb.service === filter
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-600">Admin Dashboard</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm transition"
          >
            Logout
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
          <label className="font-medium text-gray-700">Filter by service:</label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All</option>
            <option value="Web Development">Web Development</option>
            <option value="Branding">Branding</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </div>

        {loading ? (
          <p className="text-center text-blue-500 font-medium">Loading feedbacks...</p>
        ) : (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-300">
            {filteredFeedback.length === 0 ? (
              <p className="text-gray-500 italic">No feedback found.</p>
            ) : (
              filteredFeedback.map(fb => (
                <div key={fb._id} className="bg-gray-100 rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold text-blue-700">{fb.name}</h3>
                    <span className="text-yellow-600 font-medium">⭐ {fb.rating}</span>
                  </div>
                  <p className="text-sm text-gray-700"><strong>Email:</strong> {fb.email}</p>
                  <p className="text-sm text-gray-700"><strong>Service:</strong> {fb.service}</p>
                  <p className="text-gray-600 italic mt-2">{fb.comments}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
