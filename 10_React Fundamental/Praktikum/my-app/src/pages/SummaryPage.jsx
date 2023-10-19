import { useState } from "react";
import "../CSS/SummaryPage.css";

const SummaryPage = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSummarize = async () => {
    setLoading(true);
    const apiKey = "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";
    const apiUrl = "https://api.openai.com/v1/engines/davinci/completions";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: `Summarize the following text: ${text}`,
          max_tokens: 100,
        }),
      });

      const data = await response.json();
      setSummary(data.choices[0].text.trim());
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleDelete = () => {
    setText("");
    setSummary("");
  };

  return (
    <div className="summary-container">
      <h1 className="judul">OpenAI Text Summarizer</h1>
      <textarea
        placeholder="Masukkan teks yang ingin Anda ringkas..."
        value={text}
        onChange={handleTextChange}
      />
      <button
        className="summary-btn"
        onClick={handleSummarize}
        disabled={loading}
      >
        {loading ? "Menghasilkan Summary..." : "Ringkas"}
      </button>
      <button className="reset-button" onClick={handleDelete}>
        Delete
      </button>
      {summary && <div className="summary-output">{summary}</div>}
    </div>
  );
};

export default SummaryPage;
