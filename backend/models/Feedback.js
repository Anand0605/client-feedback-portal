import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  service: {
    type: String,
    enum: ['Web Development', 'Branding', 'Digital Marketing', 'Cybersecurity']
  },
  rating: { type: Number, min: 1, max: 5 },
  comments: String,
}, { timestamps: true });

export default mongoose.model('Feedback', feedbackSchema);
