const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle feedback submissions
app.post("/submit-feedback", (req, res) => {
    const { feedback } = req.body;

    if (!feedback) {
        return res.status(400).json({ message: "Feedback cannot be empty" });
    }

    // Save feedback to a database or log it (for now, just log it)
    console.log("Feedback received:", feedback);

    res.status(200).json({ message: "Thank you for your valuable feedback!" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
