import { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [form, setForm] = useState({ name: '', email: '', service: '', rating: 5, comments: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/submit-feedback', form);
    alert('Feedback Submitted!');
    setForm({ name: '', email: '', service: '', rating: 5, comments: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
      <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
      <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} required>
        <option value="">Select Service</option>
        <option value="Web Development">Web Development</option>
        <option value="Branding">Branding</option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="Cybersecurity">Cybersecurity</option>
      </select>
      <input type="number" value={form.rating} min="1" max="5" onChange={e => setForm({ ...form, rating: e.target.value })} required />
      <textarea placeholder="Comments" value={form.comments} onChange={e => setForm({ ...form, comments: e.target.value })}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
