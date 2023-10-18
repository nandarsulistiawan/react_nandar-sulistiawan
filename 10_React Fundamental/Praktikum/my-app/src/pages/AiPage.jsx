import { useState } from "react";
import OpenAI from "openai";
import "../CSS/AiPage.css";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

function AiPage() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.completions.create({
        model: "text-davinci-003",
        prompt: `Q: Apa saja peristiwa penting dalam sejarah Indonesia?\nA: Sejarah Indonesia ditandai oleh beberapa peristiwa penting, termasuk ${userInput}. Bisakah Anda memberikan lebih banyak detail tentang ${userInput}?\nQ:`,
        temperature: 0.5,
        max_tokens: 150,
      });
      setResult(response.choices[0].text.trim());
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleDelete = () => {
    setUserInput("");
    setResult("");
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="chat">
          <div className="ai-message">
            <p>
              Selamat datang di Chat Tanya Jawab Sejarah Indonesia. Silakan
              ajukan pertanyaan terkait sejarah Indonesia!
            </p>
          </div>
        </div>
        <div className="chat">
          <div className="user-message">
            <textarea
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ajukan pertanyaan sejarah Indonesia..."
              className="textarea"
            ></textarea>
            <button
              onClick={handleClick}
              disabled={loading || userInput.length === 0}
              className="btn"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
        {result && (
          <div className="chat">
            <div className="ai-message">
              <p>Answer:</p>
              <div className="result">{result}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiPage;
