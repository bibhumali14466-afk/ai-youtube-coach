export default async function handler(req, res) {
  const { text } = req.body;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: `Analyze this YouTube video: ${text}` }]
          }
        ]
      })
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
