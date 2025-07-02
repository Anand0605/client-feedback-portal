import express from 'express';
import { submitFeedback, getAllFeedback } from '../controllers/feedbackController.js';
const router = express.Router();

router.post('/submit-feedback', submitFeedback);
router.get('/all-feedback', getAllFeedback); // optional: add auth middleware

export default router;
