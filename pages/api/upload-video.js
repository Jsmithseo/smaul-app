// /pages/api/upload-video.js

import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Disable Next.js body parser so formidable can handle file uploads
export const config = {
  api: {
    bodyParser: false
  }
};

// Mock AI analysis function (replace with actual ML inference)
async function analyzeVideo(filePath) {
  // Example: pretend we ran a model and found 3 items, costing $150
  return {
    estimate: 150.00,
    objects: ['couch', 'table', 'boxes'],
    message: 'Analysis complete: 3 items detected.'
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 1) Parse the multipart form
  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), '/public/uploads'),
    keepExtensions: true
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parse error:', err);
      return res.status(500).json({ error: 'Failed to parse form' });
    }

    try {
      // Extract text fields
      const { name, phone, address, haulingDate } = fields;

      // Extract the uploaded video file info
      const videoFile = files.video;
      const filePath = videoFile.filepath || videoFile.path;

      // 2) Run AI analysis on that video (or a frame from it)
      const aiResult = await analyzeVideo(filePath);

      // 3) Return combined JSON
      return res.status(200).json({
        name,
        phone,
        address,
        haulingDate,
        ...aiResult
      });
    } catch (analysisErr) {
      console.error('AI analysis error:', analysisErr);
      return res.status(500).json({ error: 'AI analysis failed' });
    }
  });
}
