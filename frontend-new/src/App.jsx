import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedbackForm from '../../frontend-new/src/components/FeedbackForm';
import AdminLogin from '../../frontend-new/src/pages/AdminLogin';
import AdminDashboard from '../../frontend-new/src/pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
