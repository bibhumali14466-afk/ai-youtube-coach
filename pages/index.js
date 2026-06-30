import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const analyzeVideo = async () => {
    setResult("Analyzing... (AI will be added later)");
    
    setTimeout(() => {
      setResult(
        "Hook weak tha. Video ka starting 5-10 sec improve karo. Title aur engaging banao."
      );
    }, 1500);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>AI YouTube Coach</h1>

      <textarea
        placeholder="Apna video description ya idea yahan likho"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", height: 100, marginTop: 10 }}
      />

      <br />

      <button onClick={analyzeVideo} style={{ marginTop: 10 }}>
        Analyze Video
      </button>

      <h3>Result:</h3>
      <p>{result}</p>
    </div>
  );
          }
