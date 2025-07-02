import Feedback from '../models/Feedback.js';

export const submitFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json({ message: 'Feedback submitted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllFeedback = async (req, res) => {
  const feedbacks = await Feedback.find();
  res.json(feedbacks);
};
