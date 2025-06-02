// express-backend/server.js

require('dotenv').config();
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3003; // or 3004 if that’s what you’re using

//  allow POSTs from your Next.js origin:
app.use(cors({ origin: 'http://localhost:3000' }));

// ensure uploads folder exists:
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log('Created uploads folder:', uploadDir);
}

// configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage, limits: { fileSize: 200 * 1024 * 1024 } });

// dummy AI analyzer (replace with real logic)
async function analyzeVideo(filePath) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        estimate: 150.0,
        objects: ['couch', 'table'],
        message: 'Mock AI result: 2 items detected.'
      });
    }, 1000);
  });
}

// POST /api/upload-video
app.post('/api/upload-video', upload.single('video'), async (req, res) => {
  console.log('✓ /api/upload-video called');
  try {
    const { name, phone, address, haulingDate } = req.body;
    console.log('Fields:', { name, phone, address, haulingDate });

    if (!req.file) {
      console.error('✖ No file in req.file');
      return res.status(400).json({ error: 'No video file uploaded.' });
    }

    console.log('File info:', req.file);
    const filePath = req.file.path;
    console.log('Saved at:', filePath);

    const aiResult = await analyzeVideo(filePath);
    console.log('AI result:', aiResult);

    return res.status(200).json({
      name,
      phone,
      address,
      haulingDate,
      ...aiResult
    });
  } catch (err) {
    console.error('✖ Error in /api/upload-video:', err);
    return res.status(500).json({ error: 'Server error during upload or AI.' });
  }
});

app.listen(PORT, () => {
  console.log(`Express AI backend listening on http://localhost:${PORT}`);
});
