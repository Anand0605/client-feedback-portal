import { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/all-feedback`);
      setFeedbacks(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-blue-600 font-medium text-lg">
        Loading feedback...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Client Feedback List</h2>

        {feedbacks.length === 0 ? (
          <p className="text-center text-gray-600">No feedback submitted yet.</p>
        ) : (
          <div className="space-y-4">
            {feedbacks.map((fb) => (
              <div
                key={fb._id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-blue-600">{fb.name}</h3>
                  <span className="text-yellow-600 font-medium">⭐ {fb.rating}</span>
                </div>
                <p className="text-sm text-gray-700"><strong>Email:</strong> {fb.email}</p>
                <p className="text-sm text-gray-700"><strong>Service:</strong> {fb.service}</p>
                <p className="text-gray-600 mt-2"><strong>Comments:</strong> {fb.comments}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Submitted at: {new Date(fb.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackList;
