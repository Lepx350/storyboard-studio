export default function handler(req, res) {
res.setHeader(‘Access-Control-Allow-Origin’, ‘*’);
res.setHeader(‘Access-Control-Allow-Methods’, ‘POST, OPTIONS’);
res.setHeader(‘Access-Control-Allow-Headers’, ‘Content-Type’);
if (req.method === ‘OPTIONS’) return res.status(200).end();
if (req.method !== ‘POST’) return res.status(405).json({ error: ‘Not allowed’ });

const { password } = req.body || {};
if (password !== process.env.APP_PASSWORD) {
return res.status(401).json({ error: ‘Wrong password’ });
}

res.status(200).json({
key: process.env.GEMINI_API_KEY,
parse_model: ‘gemini-3.1-pro-preview’,
image_model: ‘gemini-3-pro-image-preview’
});
}
