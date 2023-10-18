import { useState } from "react";
import OpenAI from "openai";
import "../CSS/AiPage.css";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

function AiPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.completions.create({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 500,
      });
      setResult(response.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleDelete = () => {
    setPrompt("");
    setResult("");
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="chat">
          <div className="user-message">
            <textarea
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Write your message..."
              className="textarea"
            ></textarea>
            <button
              onClick={handleClick}
              disabled={loading || prompt.length === 0}
              className="btn"
            >
              {loading ? "Generating.." : "Generate"}
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
        {result && (
          <div className="chat">
            <div className="ai-message">
              <pre className="result">{result}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiPage;
