import { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/all-feedback');
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

  if (loading) return <p>Loading feedback...</p>;

  return (
    <div>
      <h2>Client Feedback List</h2>
      {feedbacks.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <ul>
          {feedbacks.map((fb) => (
            <li key={fb._id} style={{ marginBottom: '1rem', padding: '10px', border: '1px solid #ccc' }}>
              <strong>Name:</strong> {fb.name} <br />
              <strong>Email:</strong> {fb.email} <br />
              <strong>Service:</strong> {fb.service} <br />
              <strong>Rating:</strong> {fb.rating} ⭐<br />
              <strong>Comments:</strong> {fb.comments} <br />
              <small>Submitted at: {new Date(fb.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
