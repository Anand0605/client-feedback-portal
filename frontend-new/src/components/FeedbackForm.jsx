import { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    rating: 0,
    comments: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/submit-feedback`, form);
;
      alert('Feedback Submitted!');
      setForm({ name: '', email: '', service: '', rating: 5, comments: '' });
    } catch (err) {
      alert('Failed to submit feedback.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-sm bg-white rounded-xl shadow-lg p-4 space-y-3 animate-fade-in"
      >
        <h2 className="text-xl font-semibold text-center text-blue-600">Feedback</h2>

        <input
          className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-400"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-400"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <select
          className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-400"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          required
        >
          <option value="">Select Service</option>
          <option value="Web Development">Web Development</option>
          <option value="Branding">Branding</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Cybersecurity">Cybersecurity</option>
        </select>

        <input
          type="number"
          min="1"
          max="5"
          placeholder='rating'
          className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-400"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          required
        />

        <textarea
          rows="2"
          className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm resize-none focus:ring-2 focus:ring-blue-400"
          placeholder="Comments"
          value={form.comments}
          onChange={(e) => setForm({ ...form, comments: e.target.value })}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
