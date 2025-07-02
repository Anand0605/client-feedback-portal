import { useEffect, useState } from 'react';
import axios from 'axios';
import { isAdminAuthenticated, logoutAdmin } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate('/admin-login');
      return;
    }

    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/api/all-feedback');
      setFeedbacks(res.data);
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin-login');
  };

  const filteredFeedback = feedbacks.filter(fb => {
    if (!filter) return true;
    return fb.service === filter;
  });

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>

      <div>
        <label>Filter by service: </label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Web Development">Web Development</option>
          <option value="Branding">Branding</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Cybersecurity">Cybersecurity</option>
        </select>
      </div>

      <ul>
        {filteredFeedback.map(fb => (
          <li key={fb._id}>
            <strong>{fb.name}</strong> ({fb.email}) - <b>{fb.service}</b> - ⭐{fb.rating}
            <br />
            <em>{fb.comments}</em>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
