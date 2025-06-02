import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = { api: { bodyParser: false } };

async function analyzeVideo(filePath) {
  // Mock result—replace with your real AI logic
  return { estimate: 150.0, objects: ['couch','table'], message: 'Mock AI result' };
}

export default async function handler(req, res) {
  console.log('✅ /api/upload-video received a request, method:', req.method);

  if (req.method !== 'POST') {
    console.log('🚫 Not a POST, returning 405');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Ensure upload directory exists
  const uploadDir = path.join(process.cwd(), '/public/uploads');
  console.log('Upload directory:', uploadDir);

  if (!fs.existsSync(uploadDir)) {
    console.log('❌ Upload directory does not exist—creating it now.');
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = new formidable.IncomingForm({
    uploadDir,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('❌ Form parse error:', err);
      return res.status(500).json({ error: 'Failed to parse form.' });
    }

    console.log('📄 Parsed fields:', fields);
    console.log('🎥 Parsed files:', files);

    const videoFile = files.video;
    if (!videoFile) {
      console.log('❌ No video file found in `files.video`');
      return res.status(400).json({ error: 'No video uploaded.' });
    }

    const filePath = videoFile.filepath || videoFile.path;
    console.log('Saved video file path:', filePath);

    try {
      const aiResult = await analyzeVideo(filePath);
      console.log('🤖 AI result:', aiResult);

      return res.status(200).json({ ...fields, ...aiResult });
    } catch (aiErr) {
      console.error('❌ AI analysis error:', aiErr);
      return res.status(500).json({ error: 'AI analysis failed.' });
    }
  });
}
