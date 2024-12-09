import { useState } from "react";
import "./feedback.css";

function Feedback() {
    const [feedback, setFeedback] = useState(""); // State to hold feedback
    const [message, setMessage] = useState("");  // State to show success/error message

    // Function to handle form submission
    const handleSubmit = async () => {
        if (!feedback) {
            setMessage("Feedback cannot be empty!");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/submit-feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ feedback }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message); // Success message from the server
                setFeedback("");          // Clear the textarea
            } else {
                setMessage("Failed to submit feedback: " + data.message);
            }
        } catch (error) {
            setMessage("Error submitting feedback: " + error.message);
        }
    };

    return (
        <div className="feedback">
            <div className="fdb-container">
                <label className="label">Give us your valuable feedback:</label>
                <br /><br />
                <textarea
                    className="form-control"
                    placeholder="Type your feedback here..."
                    rows="10"
                    cols="60"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                />
                <br /><br />
                <button className="fdb-sbm-btn" type="button" onClick={handleSubmit}>
                    Submit it
                </button>
                <br /><br />
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default Feedback;
