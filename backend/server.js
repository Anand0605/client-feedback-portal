import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import feedbackRoutes from './routes/feedbackRoutes.js';

dotenv.config();
const app = express();

// ✅ Allow specific frontend origin (Netlify)
app.use(cors({
  origin: 'https://client-feedback-05.netlify.app',
  credentials: true
}));

app.use(express.json());
connectDB();
app.use('/api', feedbackRoutes);

// Optional: Home route test
app.get('/', (req, res) => {
  res.send('API running ✅');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
