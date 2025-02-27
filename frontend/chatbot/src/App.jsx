

/*import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [history, setHistory] = useState([]); // Stores Q&A history
  const [loading, setLoading] = useState(false);

  const generateText = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (data.response) {
        setResponse(data.response);
        setHistory([...history, { question: prompt, answer: data.response }]); // Add to history
      } else {
        setResponse("Error generating response.");
      }
    } catch (error) {
      setResponse("Server error.");
    } finally {
      setLoading(false);
      setPrompt(""); // Clear input after submitting
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Gemini AI Text Generator</h1>
      
      <textarea
        className="w-full max-w-lg p-3 border border-gray-600 bg-gray-800 text-white rounded-md"
        rows="4"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generateText}
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {response && (
        <div className="mt-6 p-4 bg-gray-800 rounded-md w-full max-w-lg">
          <h2 className="text-lg font-semibold">Response:</h2>
          <p className="mt-2">{response}</p>
        </div>
      )}

    
      {history.length > 0 && (
        <div className="mt-8 w-full max-w-lg">
          <h2 className="text-xl font-bold mb-4">History</h2>
          <div className="space-y-4">
            {history.map((item, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-md">
                <p className="font-semibold">Q: {item.question}</p>
                <p className="mt-2">A: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;*/


import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateText = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (data.response) {
        const formattedResponse = formatResponse(data.response);
        setResponse(formattedResponse);
        setHistory([...history, { question: prompt, answer: formattedResponse }]);
      } else {
        setResponse("Error generating response.");
      }
    } catch (error) {
      setResponse("Server error.");
    } finally {
      setLoading(false);
      setPrompt(""); // Clear input after submitting
    }
  };

  // Function to split response into bullet points
  const formatResponse = (text) => {
    return text
      .split(/\d+\.\s+|•\s+|-\s+/) // Splits at numbers (1., 2.), bullets (•), or dashes (-)
      .filter((point) => point.trim() !== "") // Remove empty elements
      .map((point, index) => <li key={index}>{point.trim()}</li>);
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 bg-dark text-white">
      <div className="col-md-8 col-lg-6">
        <h1 className="text-center mb-4 fw-bold text-primary">Gemini AI Text Generator</h1>

        {/* Prompt Input */}
        <div className="mb-3">
          <textarea
            className="form-control bg-secondary text-white"
            rows="4"
            placeholder="Enter your prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={generateText}
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>

        {/* Response Output (Pointwise) */}
        {response && (
          <div className="card mt-4 bg-light text-dark shadow">
            <div className="card-body">
              <h5 className="card-title fw-bold text-success">Response</h5>
              <ul className="list-group list-group-flush">{response}</ul>
            </div>
          </div>
        )}

        {/* Q&A History Section */}
        {history.length > 0 && (
          <div className="mt-5">
            <h2 className="text-center text-warning fw-bold">History</h2>
            <div className="list-group">
              {history.map((item, index) => (
                <div key={index} className="list-group-item bg-dark text-white border-secondary">
                  <p className="fw-bold text-info">Q: {item.question}</p>
                  <ul className="list-group list-group-flush text-light">{item.answer}</ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
